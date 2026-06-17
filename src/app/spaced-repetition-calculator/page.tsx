"use client";

import { useState, useMemo, useEffect } from "react";
import { ArrowLeft, Brain, Info, Sparkles, TrendingUp, Clock, Zap, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function SpacedRepetitionCalculator() {
  const { language, t } = useLanguage();
  const [concept, setConcept] = useState("");
  const [quality, setQuality] = useState<number>(4);
  const [historyRepetitions, setHistoryRepetitions] = useState<number>(0);
  const [currentEF, setCurrentEF] = useState<number>(2.5);

  useEffect(() => {
    setConcept(language === "tr" ? "İngilizce: 'Persistent' (Kalıcı)" : "English: 'Persistent'");
  }, [language]);

  // SM-2 Hatırlama kalitesi dereceleri
  const ratings = useMemo(() => [
    { 
      val: 0, 
      label: language === "tr" ? "0 - Tamamen Unuttum" : "0 - Completely Forgot", 
      desc: language === "tr" ? "Kelimeye dair hiçbir şey hatırlamıyorum." : "I don't remember anything about the word." 
    },
    { 
      val: 1, 
      label: language === "tr" ? "1 - Çok Zayıf / Tanıdık" : "1 - Very Weak / Familiar", 
      desc: language === "tr" ? "Yanlış hatırladım ama görünce tanıdım." : "Incorrect recall, but recognized it upon seeing it." 
    },
    { 
      val: 2, 
      label: language === "tr" ? "2 - Zor Hatırlama" : "2 - Difficult Recall", 
      desc: language === "tr" ? "Hatalı hatırladım, cevabı görünce anımsadım." : "Incorrect recall, but remembered upon seeing the answer." 
    },
    { 
      val: 3, 
      label: language === "tr" ? "3 - Güçlükle Doğru" : "3 - Correct with Difficulty", 
      desc: language === "tr" ? "Zorlanarak da olsa doğru hatırladım." : "Correct recall but required significant effort." 
    },
    { 
      val: 4, 
      label: language === "tr" ? "4 - Küçük Duraksama" : "4 - Correct with Hesitation", 
      desc: language === "tr" ? "Kısa bir duraksama sonrası doğru bildim." : "Correct recall after a short hesitation." 
    },
    { 
      val: 5, 
      label: language === "tr" ? "5 - Kusursuz / Anında" : "5 - Perfect / Instant", 
      desc: language === "tr" ? "Hiç düşünmeden, mükemmel hatırladım." : "Perfect, instant recall without any hesitation." 
    },
  ], [language]);

  // SM-2 Hesaplamaları
  const calculations = useMemo(() => {
    const q = quality;
    const prevRep = historyRepetitions;
    const prevEF = currentEF;

    let newEF = prevEF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
    if (newEF < 1.3) newEF = 1.3;

    let nextRepCount = prevRep + 1;
    let interval = 1;

    if (q < 3) {
      nextRepCount = 0;
      interval = 1;
    } else {
      if (prevRep === 0) {
        interval = 1;
      } else if (prevRep === 1) {
        interval = 6;
      } else {
        let tempInterval = 6;
        for (let i = 2; i < prevRep; i++) {
          tempInterval = Math.round(tempInterval * prevEF);
        }
        interval = Math.round(tempInterval * prevEF);
      }
    }

    return {
      newEF: parseFloat(newEF.toFixed(2)),
      nextRepCount,
      interval,
    };
  }, [quality, historyRepetitions, currentEF]);

  // Grafik Verisi Oluşturma (Day 0 - Day 30)
  const chartWidth = 600;
  const chartHeight = 220;
  const paddingX = 40;
  const paddingY = 20;

  const graphPaths = useMemo(() => {
    const q = quality;
    const EF = currentEF;
    const H = historyRepetitions;

    const repDays: number[] = [0];
    
    const getIntervalForRep = (repIdx: number, currentEFVal: number) => {
      if (repIdx === 0) return 1;
      if (repIdx === 1) return 6;
      let temp = 6;
      for (let i = 2; i < repIdx; i++) {
        temp = temp * currentEFVal;
      }
      return Math.round(temp);
    };

    if (q >= 3) {
      let currentDay = 0;
      let repIndex = H;
      
      while (currentDay <= 30 && repDays.length < 10) {
        const nextInterval = getIntervalForRep(repIndex + 1, EF);
        currentDay += nextInterval;
        if (currentDay <= 30) {
          repDays.push(currentDay);
          repIndex++;
        } else {
          break;
        }
      }
    }

    const getStrength = (n: number, currentEFVal: number) => {
      if (n === 0) return 1.2;
      return 6.2 * Math.pow(currentEFVal, n - 1);
    };

    const spacedPoints: { x: number; y: number; day: number; ret: number }[] = [];
    const step = 0.1;

    for (let day = 0; day <= 30; day = parseFloat((day + step).toFixed(2))) {
      let activeRepIdx = 0;
      for (let i = 0; i < repDays.length; i++) {
        if (day >= repDays[i]) {
          activeRepIdx = i;
        }
      }

      const lastRepDay = repDays[activeRepIdx];
      const repCountAtPoint = q < 3 ? 0 : H + activeRepIdx;
      const S = getStrength(repCountAtPoint, EF);
      
      const t = day - lastRepDay;
      let retention = 100 * Math.exp(-t / S);
      
      if (day === lastRepDay && day > 0) {
        retention = 100;
      }

      spacedPoints.push({
        day,
        ret: retention,
        x: paddingX + (day / 30) * (chartWidth - paddingX * 2),
        y: chartHeight - paddingY - (retention / 100) * (chartHeight - paddingY * 2),
      });
    }

    const forgetPoints: { x: number; y: number; day: number; ret: number }[] = [];
    for (let day = 0; day <= 30; day = parseFloat((day + step).toFixed(2))) {
      const S = 1.8;
      const retention = 100 * Math.exp(-day / S);
      forgetPoints.push({
        day,
        ret: retention,
        x: paddingX + (day / 30) * (chartWidth - paddingX * 2),
        y: chartHeight - paddingY - (retention / 100) * (chartHeight - paddingY * 2),
      });
    }

    const makePath = (pts: typeof spacedPoints) => {
      if (pts.length === 0) return "";
      let path = `M ${pts[0].x} ${pts[0].y}`;
      for (let i = 1; i < pts.length; i++) {
        const isJump = pts[i].ret > pts[i-1].ret + 10;
        if (isJump) {
          path += ` L ${pts[i].x} ${pts[i-1].y} L ${pts[i].x} ${pts[i].y}`;
        } else {
          path += ` L ${pts[i].x} ${pts[i].y}`;
        }
      }
      return path;
    };

    return {
      spacedPath: makePath(spacedPoints),
      forgetPath: makePath(forgetPoints),
      repDays,
      spacedPoints,
    };
  }, [quality, currentEF, historyRepetitions]);

  return (
    <>
      <Nav />

      <main className="bg-[var(--bg)] text-[var(--fg)] min-h-screen pt-36 pb-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-sm text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors group font-mono"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              {t("common.blogListBack")}
            </Link>
          </div>

          {/* HERO SECTION */}
          <section className="mb-20">
            <div className="flex items-center gap-2 mb-4">
              <Brain className="text-indigo-500" size={24} />
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-[var(--fg-muted)]">{t("spacedRepetition.badge")}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none mb-6">
              {t("spacedRepetition.title")}
            </h1>
            <p className="text-lg md:text-xl text-[var(--fg-muted)] font-light max-w-3xl leading-relaxed">
              {t("spacedRepetition.desc")}
            </p>
          </section>

          {/* SECTION 1: HOW IT WORKS EXPLAINER */}
          <section className="grid md:grid-cols-2 gap-12 mb-24 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-5 text-[var(--fg)]">
                {t("spacedRepetition.sec1Title")}
              </h2>
              <p className="text-[var(--fg-muted)] text-sm md:text-base leading-relaxed mb-4">
                {t("spacedRepetition.sec1Desc1")}
              </p>
              <p className="text-[var(--fg-muted)] text-sm md:text-base leading-relaxed mb-6">
                {t("spacedRepetition.sec1Desc2")}
              </p>
              
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-2.5">
                  <Check size={16} className="text-indigo-500 shrink-0 mt-0.5" />
                  <span className="text-xs text-[var(--fg-muted)]" dangerouslySetInnerHTML={{ __html: t("spacedRepetition.sec1Check1") }} />
                </div>
                <div className="flex items-start gap-2.5">
                  <Check size={16} className="text-indigo-500 shrink-0 mt-0.5" />
                  <span className="text-xs text-[var(--fg-muted)]" dangerouslySetInnerHTML={{ __html: t("spacedRepetition.sec1Check2") }} />
                </div>
              </div>
            </div>

            <div className="bg-[var(--card-bg)] border border-[var(--border)] p-8 rounded-xl shadow-lg flex flex-col gap-6">
              <h3 className="text-base font-bold uppercase font-mono text-[var(--fg-muted)] flex items-center gap-1.5">
                <Clock size={16} className="text-indigo-400" /> {t("spacedRepetition.cardTitle")}
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-[var(--bg)] border border-red-500/10 rounded-md">
                  <h4 className="text-xs font-bold text-red-400 uppercase font-mono">{t("spacedRepetition.cramTitle")}</h4>
                  <p className="text-xs text-[var(--fg-muted)] mt-1">{t("spacedRepetition.cramDesc")}</p>
                </div>
                <div className="p-4 bg-[var(--bg)] border border-indigo-500/15 rounded-md">
                  <h4 className="text-xs font-bold text-indigo-400 uppercase font-mono">{t("spacedRepetition.sm2Title")}</h4>
                  <p className="text-xs text-[var(--fg-muted)] mt-1">{t("spacedRepetition.sm2Desc")}</p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: INTERACTIVE SIMULATOR (THE CALCULATOR & SVG CHART) */}
          <section className="border-t border-[var(--border)] pt-20 mb-24">
            <div className="mb-10 text-center max-w-2xl mx-auto">
              <span className="px-3 py-1 bg-indigo-500/10 text-indigo-500 text-xs font-bold font-mono rounded-full uppercase">{t("spacedRepetition.stationBadge")}</span>
              <h2 className="text-3xl font-extrabold mt-4">{t("spacedRepetition.simTitle")}</h2>
              <p className="text-sm text-[var(--fg-muted)] mt-2">
                {t("spacedRepetition.simDesc")}
              </p>
            </div>

            <div className="grid md:grid-cols-12 gap-8 items-start">
              {/* CALCULATOR CONTROLS (Col-5) */}
              <div className="md:col-span-5 bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-6 shadow-xl flex flex-col gap-6">
                <h3 className="text-base font-bold flex items-center gap-2 pb-3 border-b border-[var(--border)]">
                  <Sparkles size={16} className="text-indigo-400" /> {t("spacedRepetition.simCardTitle")}
                </h3>

                {/* Concept Input */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-semibold uppercase text-[var(--fg-muted)] font-mono">{t("spacedRepetition.simConceptLabel")}</label>
                  <input 
                    type="text" 
                    value={concept} 
                    onChange={(e) => setConcept(e.target.value)}
                    className="px-3 py-2 bg-[var(--bg)] border border-[var(--border)] rounded-md text-sm text-[var(--fg)] focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                {/* Quality Rating Buttons */}
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-semibold uppercase text-[var(--fg-muted)] font-mono">{t("spacedRepetition.simQualityLabel")}</label>
                  <div className="grid grid-cols-6 gap-1.5">
                    {[0, 1, 2, 3, 4, 5].map((val) => (
                      <button
                        key={val}
                        onClick={() => setQuality(val)}
                        className={`h-9 font-bold text-sm rounded transition-all cursor-pointer ${
                          quality === val
                            ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                            : "bg-[var(--bg)] border border-[var(--border)] text-[var(--fg-muted)] hover:border-indigo-500/50 hover:text-[var(--fg)]"
                        }`}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                  <div className="p-3 bg-[var(--bg)] rounded-md border border-[var(--border)]">
                    <p className="text-xs font-bold text-[var(--fg)]">{ratings[quality].label}</p>
                    <p className="text-[10px] text-[var(--fg-muted)] mt-1">{ratings[quality].desc}</p>
                  </div>
                </div>

                {/* Advanced Controls */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1">
                      <label className="text-[9px] font-semibold uppercase text-[var(--fg-muted)] font-mono">{t("spacedRepetition.simPrevRep")}</label>
                    </div>
                    <input 
                      type="number" 
                      min={0}
                      value={historyRepetitions} 
                      onChange={(e) => setHistoryRepetitions(Math.max(0, parseInt(e.target.value) || 0))}
                      className="px-3 py-1.5 bg-[var(--bg)] border border-[var(--border)] rounded-md text-sm text-[var(--fg)] focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-semibold uppercase text-[var(--fg-muted)] font-mono">{t("spacedRepetition.simPrevEF")}</label>
                    <input 
                      type="number" 
                      step={0.1}
                      min={1.3}
                      value={currentEF} 
                      onChange={(e) => setCurrentEF(Math.max(1.3, parseFloat(e.target.value) || 1.3))}
                      className="px-3 py-1.5 bg-[var(--bg)] border border-[var(--border)] rounded-md text-sm text-[var(--fg)] focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div className="text-[11px] text-[var(--fg-muted)] flex items-start gap-1.5 leading-relaxed bg-indigo-500/5 p-3 border border-indigo-500/10 rounded-md">
                  <Info size={14} className="shrink-0 text-indigo-500 mt-0.5" />
                  <span>
                    {t("spacedRepetition.simQualityInfo")}
                  </span>
                </div>
              </div>

              {/* CHART & PROJECTION (Col-7) */}
              <div className="md:col-span-7 flex flex-col gap-6">
                {/* Output Stats Dashboard */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-[var(--card-bg)] border border-[var(--border)] p-4 rounded-xl shadow-md text-center">
                    <p className="text-[9px] uppercase font-mono text-[var(--fg-muted)]">{t("spacedRepetition.outInterval")}</p>
                    <p className="text-2xl font-extrabold text-indigo-500 mt-1">{calculations.interval} <span className="text-xs font-normal text-[var(--fg)]">{t("spacedRepetition.outDays")}</span></p>
                  </div>
                  <div className="bg-[var(--card-bg)] border border-[var(--border)] p-4 rounded-xl shadow-md text-center">
                    <p className="text-[9px] uppercase font-mono text-[var(--fg-muted)]">{t("spacedRepetition.outEF")}</p>
                    <p className="text-2xl font-extrabold text-emerald-500 mt-1">{calculations.newEF}</p>
                  </div>
                  <div className="bg-[var(--card-bg)] border border-[var(--border)] p-4 rounded-xl shadow-md text-center">
                    <p className="text-[9px] uppercase font-mono text-[var(--fg-muted)]">{t("spacedRepetition.outRepCount")}</p>
                    <p className="text-2xl font-extrabold text-amber-500 mt-1">#{calculations.nextRepCount}</p>
                  </div>
                </div>

                {/* VISUAL CHART */}
                <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-6 shadow-xl relative overflow-hidden">
                  <div className="flex items-center justify-between mb-4 border-b border-[var(--border)] pb-3">
                    <h3 className="text-sm font-bold flex items-center gap-1.5">
                      <TrendingUp size={15} className="text-indigo-400" /> {t("spacedRepetition.chartTitle")}
                    </h3>
                  </div>

                  <div className="w-full overflow-x-auto">
                    <svg 
                      viewBox={`0 0 ${chartWidth} ${chartHeight}`} 
                      className="w-full h-auto min-w-[500px]"
                      style={{ background: "transparent" }}
                    >
                      {/* Grid Lines */}
                      {[0, 25, 50, 75, 100].map((val) => {
                        const y = chartHeight - paddingY - (val / 100) * (chartHeight - paddingY * 2);
                        return (
                          <g key={val}>
                            <line 
                              x1={paddingX} 
                              y1={y} 
                              x2={chartWidth - paddingX} 
                              y2={y} 
                              stroke="var(--border)" 
                              strokeDasharray="4 4" 
                            />
                            <text 
                              x={paddingX - 8} 
                              y={y + 4} 
                              textAnchor="end" 
                              fontSize="9" 
                              fill="var(--fg-muted)"
                              className="font-mono"
                            >
                              %{val}
                            </text>
                          </g>
                        );
                      })}

                      {/* X-Axis Labels (Days) */}
                      {[0, 5, 10, 15, 20, 25, 30].map((day) => {
                        const x = paddingX + (day / 30) * (chartWidth - paddingX * 2);
                        return (
                          <g key={day}>
                            <line 
                              x1={x} 
                              y1={chartHeight - paddingY} 
                              x2={x} 
                              y2={chartHeight - paddingY + 5} 
                              stroke="var(--border)" 
                            />
                            <text 
                              x={x} 
                              y={chartHeight - paddingY + 16} 
                              textAnchor="middle" 
                              fontSize="9" 
                              fill="var(--fg-muted)"
                              className="font-mono"
                            >
                              {day} {language === "tr" ? "G" : "d"}
                            </text>
                          </g>
                        );
                      })}

                      {/* Unutma Eğrisi (Red Curve - No repetition) */}
                      <path 
                        d={graphPaths.forgetPath} 
                        fill="none" 
                        stroke="#ef4444" 
                        strokeWidth="1.5" 
                        strokeDasharray="3 3"
                        opacity="0.65"
                      />

                      {/* Spaced Repetition Eğrisi (Indigo Curve - With repetitions) */}
                      <path 
                        d={graphPaths.spacedPath} 
                        fill="none" 
                        stroke="#4f46e5" 
                        strokeWidth="2.5" 
                      />

                      {/* Repetition Days */}
                      {graphPaths.repDays.map((day, idx) => {
                        const x = paddingX + (day / 30) * (chartWidth - paddingX * 2);
                        const topY = paddingY;
                        const bottomY = chartHeight - paddingY;
                        return (
                          <g key={day}>
                            <line 
                              x1={x} 
                              y1={topY} 
                              x2={x} 
                              y2={bottomY} 
                              stroke="#4f46e5" 
                              strokeWidth="1" 
                              strokeDasharray="2 2"
                              opacity="0.5"
                            />
                            <circle 
                              cx={x} 
                              cy={topY} 
                              r="4" 
                              fill="#4f46e5" 
                              className="animate-ping" 
                              style={{ animationDuration: '3s' }}
                            />
                            <circle 
                              cx={x} 
                              cy={topY} 
                              r="3" 
                              fill="#4f46e5" 
                            />
                            <text
                              x={x + 4}
                              y={topY + 12}
                              fontSize="7"
                              fill="#4f46e5"
                              className="font-mono font-bold"
                            >
                              {idx === 0 
                                ? (historyRepetitions > 0 ? (language === "tr" ? `${historyRepetitions}. Gün` : `Day ${historyRepetitions}`) : (language === "tr" ? "Öğrenme" : "Learning")) 
                                : (language === "tr" ? `${historyRepetitions + idx}. Tekrar` : `Review #${historyRepetitions + idx}`)}
                            </text>
                          </g>
                        );
                      })}
                    </svg>
                  </div>

                  {/* Legend */}
                  <div className="flex flex-wrap gap-4 items-center justify-center mt-6 text-xs border-t border-[var(--border)] pt-4">
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-0.5 bg-[#4f46e5] inline-block" />
                      <span className="font-semibold text-xs">{t("spacedRepetition.chartSpacedLegend")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-0.5 bg-[#ef4444] border-dashed border-t border-spacing-1 inline-block" />
                      <span className="text-[var(--fg-muted)] text-xs">{t("spacedRepetition.chartForgetLegend")}</span>
                    </div>
                  </div>
                </div>

                {/* Repetition timeline */}
                <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-5 shadow-lg">
                  <h3 className="text-xs font-bold flex items-center gap-2 mb-3 font-mono uppercase text-[var(--fg-muted)]">
                    {t("spacedRepetition.timelineTitle")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {graphPaths.repDays.map((day, idx) => (
                      <div key={day} className="px-3.5 py-1.5 bg-[var(--bg)] border border-[var(--border)] rounded flex flex-col items-center">
                        <span className="text-[8px] font-mono text-[var(--fg-muted)] uppercase">
                          {idx === 0 ? t("spacedRepetition.timelineToday") : `${t("spacedRepetition.timelineRep")} #${historyRepetitions + idx}`}
                        </span>
                        <span className="text-xs font-extrabold text-[var(--fg)] mt-0.5">
                          {day === 0 ? t("spacedRepetition.timelineStart") : `+${day} ${language === "tr" ? "Gün" : "Days"}`}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: MATHEMATICAL RULES */}
          <section className="border-t border-[var(--border)] pt-20 mb-20">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--fg)] mb-10 text-center">
              {t("spacedRepetition.mathTitle")}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[var(--card-bg)] border border-[var(--border)] p-6 rounded-lg">
                <span className="text-2xl mb-4 block">1️⃣</span>
                <h3 className="font-bold text-base text-[var(--fg)] mb-2">{t("spacedRepetition.mathRule1Title")}</h3>
                <p className="text-xs text-[var(--fg-muted)] leading-relaxed">
                  {t("spacedRepetition.mathRule1Desc")}
                </p>
                <code className="block bg-[var(--bg)] p-2.5 rounded font-mono text-[10px] mt-4 text-[var(--fg-muted)]">
                  I(1) = 1 {language === "tr" ? "gün" : "day"}<br />
                  I(2) = 6 {language === "tr" ? "gün" : "days"}<br />
                  n &gt; 2: I(n) = I(n-1) * EF
                </code>
              </div>

              <div className="bg-[var(--card-bg)] border border-[var(--border)] p-6 rounded-lg">
                <span className="text-2xl mb-4 block">2️⃣</span>
                <h3 className="font-bold text-base text-[var(--fg)] mb-2">{t("spacedRepetition.mathRule2Title")}</h3>
                <p className="text-xs text-[var(--fg-muted)] leading-relaxed">
                  {t("spacedRepetition.mathRule2Desc")}
                </p>
                <code className="block bg-[var(--bg)] p-2.5 rounded font-mono text-[10px] mt-4 text-[var(--fg-muted)]">
                  EF' = EF + (0.1 - (5 - q) *<br />
                  (0.08 + (5 - q) * 0.02))
                </code>
              </div>

              <div className="bg-[var(--card-bg)] border border-[var(--border)] p-6 rounded-lg">
                <span className="text-2xl mb-4 block">3️⃣</span>
                <h3 className="font-bold text-base text-[var(--fg)] mb-2">{t("spacedRepetition.mathRule3Title")}</h3>
                <p className="text-xs text-[var(--fg-muted)] leading-relaxed">
                  {t("spacedRepetition.mathRule3Desc")}
                </p>
                <code className="block bg-[var(--bg)] p-2.5 rounded font-mono text-[10px] mt-4 text-[var(--fg-muted)]">
                  q &lt; 3 ise:<br />
                  n = 0 ({language === "tr" ? "Öğrenme Aşaması" : "Learning Phase"})<br />
                  Sonraki Aralık = 1 {language === "tr" ? "Gün" : "Day"}
                </code>
              </div>
            </div>
          </section>

          {/* SECTION 4: CALL TO ACTION (POLYVO INTEGRATION) */}
          <section className="bg-indigo-600/5 border border-indigo-500/15 p-8 md:p-12 rounded-xl text-center flex flex-col items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500">
              <Zap size={22} className="animate-pulse" />
            </div>
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--fg)] mb-4">
                {t("spacedRepetition.ctaTitle")}
              </h2>
              <p className="text-sm md:text-base text-[var(--fg-muted)] leading-relaxed">
                {t("spacedRepetition.ctaDesc")}
              </p>
            </div>
            <a 
              href="https://polyvo.polimelo.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all rounded-md group"
            >
              {t("spacedRepetition.ctaBtn")} <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </section>

        </div>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}

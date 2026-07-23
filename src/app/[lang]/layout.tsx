import { LanguageProvider } from "@/context/LanguageContext";

export async function generateStaticParams() {
  return [{ lang: "tr" }, { lang: "en" }];
}

export default async function LangLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const validLang = lang === "en" ? "en" : "tr";

  return (
    <LanguageProvider lang={validLang}>
      {children}
    </LanguageProvider>
  );
}

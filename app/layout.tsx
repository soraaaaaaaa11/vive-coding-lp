import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "3時間でアプリを作ろう | Vibe Codingマンツーマンサポート",
  description:
    "プログラミング未経験でも、3時間で動くWebサービスが作れる。7回挫折した僕が教える、コードを書かない開発。Zoomマンツーマンサポート。",
  keywords: [
    "Vibe Coding",
    "プログラミング",
    "初心者",
    "マンツーマン",
    "AI開発",
    "ノーコード",
  ],
  openGraph: {
    title: "3時間でアプリを作ろう | Vibe Codingマンツーマンサポート",
    description:
      "プログラミング未経験でも、3時間で動くWebサービスが作れる。7回挫折した僕が教える、コードを書かない開発。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "3時間でアプリを作ろう | Vibe Codingマンツーマンサポート",
    description:
      "プログラミング未経験でも、3時間で動くWebサービスが作れる。7回挫折した僕が教える、コードを書かない開発。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>{children}</body>
    </html>
  );
}

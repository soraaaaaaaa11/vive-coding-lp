import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* ヘッドライン */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          7回挫折した僕が、
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            3時間でサービスを作れた理由
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          コードを書かない開発、始めませんか？
        </p>
        <a
          href="#cta"
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
        >
          無料で相談する
        </a>
        <div className="mt-12 animate-bounce">
          <svg
            className="w-8 h-8 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* 悩み・課題 */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            プログラミング学習、
            <span className="text-yellow-400">何周目</span>ですか？
          </h2>
          <div className="space-y-4 mb-12">
            {[
              "Progateを始めては挫折、を繰り返している",
              "プログラミングスクールは高すぎて手が出ない",
              "作りたいものはあるのに、技術がなくて諦めた",
              "「まずは基礎から」と言われて、いつまでも作れない",
              "ChatGPTでコード出力しても、結局動かせない",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg"
              >
                <span className="text-red-400 text-2xl">✗</span>
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-slate-700 to-slate-600 p-8 rounded-2xl">
            <p className="text-xl mb-4">僕も同じでした。</p>
            <p className="text-2xl font-bold mb-4">
              Progateに <span className="text-yellow-400">7回挑戦</span> して、
              <br />
              約 <span className="text-yellow-400">3万円</span> 課金。
            </p>
            <p className="text-xl text-gray-300 mb-6">
              でも結局、何も作れなかった。
            </p>
            
            {/* Progate課金履歴のスクショ */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-4 text-center">↓ 実際の課金履歴がこちら...</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-white rounded-lg overflow-hidden">
                  <Image
                    src="/images/progate-1.png"
                    alt="Progate課金履歴1"
                    width={300}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="bg-white rounded-lg overflow-hidden">
                  <Image
                    src="/images/progate-2.png"
                    alt="Progate課金履歴2"
                    width={300}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="bg-white rounded-lg overflow-hidden">
                  <Image
                    src="/images/progate-3.png"
                    alt="Progate課金履歴3"
                    width={300}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="bg-white rounded-lg overflow-hidden">
                  <Image
                    src="/images/progate-4.png"
                    alt="Progate課金履歴4"
                    width={300}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 解決策 */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            でも、僕は「あること」に気づいて
            <span className="text-green-400">変われた</span>。
          </h2>
          <p className="text-center text-xl text-gray-300 mb-12">
            それが{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Vibe Coding（バイブコーディング）
            </span>{" "}
            です。
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-blue-400">
                🤖 Vibe Codingとは？
              </h3>
              <p className="text-gray-300">
                AIに「こんなの作って」と伝えるだけで、コードを自動生成してくれる開発手法。
              </p>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-purple-400">
                💡 必要なのは？
              </h3>
              <p className="text-gray-300">
                プログラミングの知識は<span className="font-bold">ほぼ不要</span>
                。必要なのは「何を作りたいか」というアイデアだけ。
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-8 rounded-2xl">
            <p className="text-xl mb-4 text-center">僕はこの方法で、</p>
            <p className="text-2xl font-bold mb-6 text-center">
              たった{" "}
              <span className="text-yellow-400">制作時間15時間（3日間）</span>{" "}
              で
              <br />
              YouTube分析ツールを作り、実際に{" "}
              <span className="text-green-400">公開・運用</span> しています。
            </p>
            
            {/* YouTube分析ツールのスクショ */}
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden border border-slate-600">
                <Image
                  src="/images/youtube-analyzer-1.png"
                  alt="YouTube分析ツール - トップページ"
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-600">
                <Image
                  src="/images/youtube-analyzer-2.png"
                  alt="YouTube分析ツール - カテゴリ検索"
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="text-center mt-4">
                <a
                  href="https://youtube-analyzer-pied.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 underline"
                >
                  🔗 実際のサービスを見る
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* こんな人におすすめ */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            このサービスは、
            <br />
            <span className="text-green-400">こんな方</span>にピッタリです
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "プログラミング学習で挫折した経験がある",
              "作りたいサービスやアプリのアイデアがある",
              "スクールに通う時間もお金もない",
              "「基礎」より「実践」で学びたい",
              "副業やビジネスで自分のサービスを持ちたい",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-lg"
              >
                <span className="text-green-400 text-2xl">✓</span>
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* サービス内容 */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            「3時間でアプリを作ろう」とは？
          </h2>
          <p className="text-center text-xl text-gray-300 mb-12">
            <span className="text-blue-400 font-bold">
              Zoomマンツーマン × 3時間
            </span>{" "}
            で、
            <br />
            あなたのアイデアを{" "}
            <span className="text-green-400 font-bold">動くサービス</span>{" "}
            にします。
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { label: "形式", value: "Zoomでの画面共有（マンツーマン）" },
              { label: "時間", value: "約3時間（延長OK）" },
              { label: "成果物", value: "実際に動くWebサービスの土台" },
              {
                label: "サポート",
                value: "終了後1週間のLINEチャットサポート付き",
              },
            ].map((item, index) => (
              <div key={index} className="bg-slate-700/50 p-6 rounded-xl">
                <p className="text-gray-400 text-sm mb-1">{item.label}</p>
                <p className="text-lg font-bold">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-700/50 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-6 text-center">
              やることはシンプル：
            </h3>
            <div className="space-y-4">
              {[
                "作りたいものを教えてください",
                "僕が横で見ながら、一緒にAIに指示を出します",
                "3時間後、あなたのサービスの土台が完成しています",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 作れるものの例 */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            3時間で「<span className="text-blue-400">動く状態</span>
            」まで作れます
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { icon: "📊", title: "データ分析ツール", desc: "YouTube分析、SNS分析など" },
              { icon: "📝", title: "業務効率化ツール", desc: "自動集計、レポート生成" },
              { icon: "🛒", title: "シンプルなWebサービス", desc: "予約システム、LP" },
              { icon: "🤖", title: "AIを使ったツール", desc: "文章生成、画像分析" },
            ].map((item, index) => (
              <div key={index} className="bg-slate-700/50 p-6 rounded-xl">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 p-6 rounded-xl">
            <p className="text-center text-lg">
              ※複雑な機能は
              <span className="font-bold text-yellow-400">
                1週間のLINEサポート
              </span>
              で完成までフォロー！
            </p>
          </div>
        </div>
      </section>

      {/* LINEサポート詳細 */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            1週間のLINEサポートで
            <span className="text-green-400">できること</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "💬", title: "質問は無制限OK", desc: "何度でも質問してください" },
              { icon: "⏰", title: "24時間以内に返信", desc: "お待たせしません" },
              {
                icon: "🔧",
                title: "未完成部分のフォロー",
                desc: "Zoom中に終わらなかった部分も完成まで",
              },
              { icon: "🚨", title: "エラー対応", desc: "困った時はすぐサポート" },
              {
                icon: "🗺️",
                title: "次のステップのアドバイス",
                desc: "「次に何をすればいいか」を提案",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-slate-700/50 rounded-lg"
              >
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 必要なもの */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            参加に必要な<span className="text-blue-400">準備</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "💻",
                title: "PC",
                desc: "Mac推奨（Windowsも対応OK）",
              },
              {
                icon: "🤖",
                title: "Claude Pro",
                desc: "月額 $20（約3,000円）の課金が必要",
              },
              { icon: "📹", title: "Zoom", desc: "無料版でOK" },
              { icon: "🔥", title: "やる気", desc: "これが一番大事！" },
            ].map((item, index) => (
              <div key={index} className="bg-slate-700/50 p-6 rounded-xl">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 mt-8">
            ※Claude Proの登録方法も、当日サポートします。
          </p>
        </div>
      </section>

      {/* 料金 */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">料金プラン</h2>
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-8 rounded-2xl border border-blue-500/30">
            <p className="text-6xl font-bold mb-4">
              ¥9,800
              <span className="text-xl text-gray-400">（税込）</span>
            </p>
            <div className="space-y-3 text-left mt-8 mb-8">
              {[
                "Zoomマンツーマンサポート（約3時間）",
                "1週間のLINEチャットサポート（無制限・24h以内返信）",
                "次のステップに進むための課題シート",
                "サポート終了後のフォローアップ面談（30分）",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-slate-600 pt-6 mt-6">
              <p className="text-gray-400 mb-2">お支払い方法</p>
              <p>クレジットカード（Stripe）/ 銀行振込</p>
            </div>
          </div>
        </div>
      </section>

      {/* ご利用の流れ */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            ご利用の<span className="text-blue-400">流れ</span>
          </h2>
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: "無料相談（LINE）",
                desc: '公式LINEで「興味あります！」とメッセージ。作りたいものや疑問点をお聞きします。',
              },
              {
                step: 2,
                title: "日程調整",
                desc: "Zoomサポートの日程を決めます。土日・平日夜もOK！",
              },
              {
                step: 3,
                title: "お支払い",
                desc: "クレジットカード or 銀行振込。入金確認後、正式予約となります。",
              },
              {
                step: 4,
                title: "事前準備",
                desc: "Claude Pro（$20/月）の登録、必要なツールのインストール。やり方は全部LINEでサポートします！",
              },
              {
                step: 5,
                title: "Zoomサポート当日（3時間）",
                desc: "画面共有しながら、一緒に開発スタート！終了時には動くサービスの土台が完成。",
              },
              {
                step: 6,
                title: "LINEサポート開始（1週間）",
                desc: "分からないこと、エラー対応、何でも質問OK。24時間以内に返信します。",
              },
              {
                step: 7,
                title: "フォローアップ面談（30分）",
                desc: "1週間後に振り返り面談。次のステップや今後の進め方をアドバイス。",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center font-bold text-xl">
                    {item.step}
                  </div>
                </div>
                <div className="bg-slate-700/50 p-6 rounded-xl flex-grow">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            よくある<span className="text-yellow-400">質問</span>
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "本当にプログラミング未経験でも大丈夫？",
                a: "はい、大丈夫です。僕自身、Progateを7回挫折した「超」がつく初心者でした。コードを書くのはAIなので、あなたは「何を作りたいか」を伝えるだけでOKです。",
              },
              {
                q: "3時間で本当に完成しますか？",
                a: "シンプルなものなら動く状態まで作れます。複雑な機能がある場合は、まず核となる部分を作り、残りは1週間のLINEサポートでフォローします。",
              },
              {
                q: "WindowsのPCしか持っていません",
                a: "対応OK！WSL（Windows Subsystem for Linux）の導入をサポートします。10〜15分で設定できます。",
              },
              {
                q: "作ったサービスは自分のものになりますか？",
                a: "もちろんです。著作権は100%あなたのもの。商用利用もOKです。",
              },
            ].map((item, index) => (
              <div key={index} className="bg-slate-700/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-yellow-400">Q.</span>
                  {item.q}
                </h3>
                <p className="text-gray-300 pl-8">
                  <span className="text-blue-400 font-bold">A.</span> {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 講師紹介 */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">講師紹介</h2>
          <div className="bg-slate-700/50 p-8 rounded-2xl">
            <div className="w-32 h-32 bg-slate-600 rounded-full mx-auto mb-6 flex items-center justify-center text-gray-400">
              📸 写真
            </div>
            <h3 className="text-2xl font-bold mb-4">Sora（そら）</h3>
            <div className="text-left space-y-3 mb-6">
              {[
                "プログラミングスクール・Progateに7回挫折",
                "2025年末、Vibe Codingに出会い人生が変わる",
                "非エンジニアながら、Webサービスを開発・公開中",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-blue-400">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <p className="text-gray-400 text-sm mb-2">作ったもの</p>
              <a
                href="https://youtube-analyzer-pied.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-blue-400 hover:text-blue-300"
              >
                YouTube分析ツール（開発・運用中）→
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            まずは<span className="text-green-400">無料</span>で
            <br />
            相談してみませんか？
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            「自分にもできるかな？」
            <br />
            「こんなの作りたいんだけど...」
          </p>
          <p className="text-gray-400 mb-8">
            どんな些細な質問でもOK！
            <br />
            公式LINEでお気軽にご相談ください。
          </p>

          <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 p-8 rounded-2xl border border-green-500/30">
            <p className="text-xl font-bold mb-6">📱 公式LINEで無料相談する</p>
            <div className="w-48 h-48 bg-white mx-auto rounded-xl flex items-center justify-center text-slate-800 font-bold">
              ［ QRコード挿入 ］
            </div>
            <p className="text-gray-400 mt-4 text-sm">
              ↑ スマホでスキャンしてください
            </p>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="py-8 px-4 border-t border-slate-700">
        <div className="max-w-4xl mx-auto text-center text-gray-400 text-sm">
          <p>© 2026 3時間でアプリを作ろう All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}

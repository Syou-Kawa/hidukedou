// サイト全体の設定。サイト名を変えたいときはここだけ変更すればOK
export const SITE = {
  name: "ひづけ堂",
  tagline: "日付の数え方まで、きちんと。",
  description:
    "四十九日・営業日・生後日数・クーリングオフ期限など、暮らしの日付をかんたんに計算できる無料ツール集。「初日を含めるかどうか」の数え方まで丁寧に解説します。",
  // Google Analytics 4 の測定ID（G-XXXXXXXXXX）。空文字ならタグは出力されない
  gaId: "G-5Q62MDVJFT",
  // 執筆者（全ページ共通）。各記事の「執筆」欄と構造化データに使う
  author: {
    name: "SyouKawa",
    url: "/about/",
  },
};

// よく使う一次情報源。各ページの sources から参照する
export const REFS = {
  minpo: {
    label: "民法（e-Gov 法令検索）",
    href: "https://laws.e-gov.go.jp/law/129AC0000000089",
    note: "第138〜143条（期間の計算）",
  },
  shukujitsuHo: {
    label: "国民の祝日に関する法律（e-Gov 法令検索）",
    href: "https://laws.e-gov.go.jp/law/323AC1000000178",
  },
  caoShukujitsu: {
    label: "内閣府「国民の祝日」について",
    href: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html",
    note: "祝日一覧・各祝日の趣旨。本サイトの祝日データの出典",
  },
  nenreiHo: {
    label: "年齢計算ニ関スル法律（e-Gov 法令検索）",
    href: "https://laws.e-gov.go.jp/law/135AC0000000050",
  },
  tokushoHo: {
    label: "特定商取引に関する法律（e-Gov 法令検索）",
    href: "https://laws.e-gov.go.jp/law/351AC0000000057",
    note: "第9条（訪問販売のクーリング・オフ）ほか",
  },
  caaCoolingOff: {
    label: "消費者庁「特定商取引法ガイド」",
    href: "https://www.no-trouble.caa.go.jp/",
    note: "クーリング・オフ制度の公式解説",
  },
  kokusen: {
    label: "国民生活センター（消費者ホットライン 188）",
    href: "https://www.kokusen.go.jp/",
  },
  naoKoyomi: {
    label: "国立天文台 暦計算室",
    href: "https://eco.mtk.nao.ac.jp/koyomi/",
    note: "暦要項（春分・秋分の日の公示）、旧暦・二十四節気",
  },
  gakkoKyoikuHo: {
    label: "学校教育法（e-Gov 法令検索）",
    href: "https://laws.e-gov.go.jp/law/322AC0000000026",
    note: "第17条（就学義務の始期）",
  },
  kosekiHo: {
    label: "戸籍法（e-Gov 法令検索）",
    href: "https://laws.e-gov.go.jp/law/322AC0000000224",
  },
  gengoHo: {
    label: "元号法（e-Gov 法令検索）",
    href: "https://laws.e-gov.go.jp/law/354AC1000000043",
  },
  gyoseiKyujitsuHo: {
    label: "行政機関の休日に関する法律（e-Gov 法令検索）",
    href: "https://laws.e-gov.go.jp/law/363AC0000000091",
  },
  ginkoHo: {
    label: "銀行法（e-Gov 法令検索）",
    href: "https://laws.e-gov.go.jp/law/356AC0000000059",
    note: "第15条（休日）",
  },
};

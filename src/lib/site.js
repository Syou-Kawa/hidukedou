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
    title: "ひづけ堂 運営者・計算ロジック開発",
    url: "/about/",
  },
};

// ツール一覧（トップ・コラム一覧・404・サイトマップで共用）
export const TOOLS = [
  { href: "/shukujitsu/", name: "祝日カレンダー", desc: "次の祝日まであと何日？年ごとの祝日一覧と連休が一目でわかる早見表。", published: "2026-07-09", updated: "2026-10-31" },
  { href: "/rokuyo/", name: "六曜カレンダー（大安・仏滅）", desc: "今日の六曜は？日付から大安・仏滅を調べて、次の大安までの残り日数も一覧表示。", published: "2026-07-09", updated: "2026-09-06" },
  { href: "/eigyobi/", name: "営業日計算", desc: "「3営業日後はいつ？」を土日祝を除いて計算。期間内の営業日数も数えられます。", published: "2026-07-05", updated: "2026-10-31" },
  { href: "/shijukunichi/", name: "四十九日・法要日の計算", desc: "命日から初七日・四十九日・一周忌〜三十三回忌までの日程を一覧表示します。", published: "2026-07-05", updated: "2026-09-06" },
  { href: "/seigo/", name: "生後日数・お祝い日の計算", desc: "今日で生後何日・何か月？お七夜・お宮参り・百日祝いの日付も自動計算。", published: "2026-07-05", updated: "2026-09-06" },
  { href: "/cooling-off/", name: "クーリングオフ期限の計算", desc: "書面の受領日と取引の種類から、クーリングオフの期限日を計算します。", published: "2026-07-05", updated: "2026-09-06" },
  { href: "/kinenbi/", name: "記念日カウンター", desc: "付き合って今日で何日目？100日・1000日・◯周年の節目も一覧表示。", published: "2026-07-05", updated: "2026-09-06" },
  { href: "/nyugaku/", name: "入学・卒業年の計算（学歴早見表）", desc: "生年月日から小学校〜大学の入学・卒業年を西暦・和暦で一覧。履歴書の学歴欄に。", published: "2026-07-05", updated: "2026-09-06" },
];

// コラム一覧。category はコラム一覧ページのグループ分けに使う
export const COLUMN_CATEGORIES = [
  { id: "basic", name: "日数の数え方の基本", desc: "「初日を含めるかどうか」から、期限・営業日・年齢まで。すべての土台になる考え方。" },
  { id: "koyomi", name: "祝日・暦・吉日", desc: "祝日の決まり方、六曜や一粒万倍日のしくみ、うるう年と和暦の換算。" },
  { id: "life", name: "人生の節目と行事", desc: "入籍、赤ちゃんの行事、法要、香典返し。慣習の「いつ」を数え方から整理。" },
];
export const COLUMNS = [
  { href: "/column/shonichi/", name: "「初日を含める・含めない」— 日数の数え方の基本", desc: "「7日後」と「7日目」はなぜ1日ずれる？民法の原則と身近な例外。", category: "basic", published: "2026-07-05", updated: "2026-09-06" },
  { href: "/column/cooling-off-kigen/", name: "クーリングオフの期限の数え方 — 8日目が日曜日でも延びない？", desc: "受領日を1日目とする理由、発信主義、書面不備のときの扱い。", category: "basic", published: "2026-07-15", updated: "2026-09-06" },
  { href: "/column/eigyobi-inai/", name: "「3営業日以内」はいつまで？営業日の数え方と見落としやすい休業日", desc: "翌営業日起算の考え方と、銀行・役所・企業で違う休業日。", category: "basic", published: "2026-07-15", updated: "2026-09-06" },
  { href: "/column/nenmatsu-nenshi/", name: "年末年始の営業日はいつまで？2026-27年の銀行・役所カレンダー", desc: "仕事納めは12月28日、銀行は12月30日まで。年内着金の振込期限と、年末年始にかかる期限の扱い。", category: "basic", published: "2026-10-31", updated: "2026-10-31" },
  { href: "/column/hayaumare/", name: "4月1日生まれはなぜ早生まれ？「誕生日前日に年を取る」しくみ", desc: "年齢計算の法律と学校教育法が組み合わさると、学年の境目が4月1日になる理由。", category: "basic", published: "2026-07-15", updated: "2026-09-06" },
  { href: "/column/shukujitsu/", name: "祝日はどうやって決まる？振替休日と国民の休日のしくみ", desc: "祝日法の3つのタイプ、振替休日・国民の休日の条件、春分・秋分の公示。", category: "koyomi", published: "2026-07-05", updated: "2026-09-06" },
  { href: "/column/rokuyo/", name: "六曜とは？大安・仏滅・友引の意味と、気にしなくてよい場面", desc: "旧暦から六曜が決まるしくみ、時間帯で変わる吉凶、場面別の付き合い方。", category: "koyomi", published: "2026-07-05", updated: "2026-09-06" },
  { href: "/column/ichiryumanbai/", name: "一粒万倍日・天赦日とは？六曜との違いと、日の決まり方", desc: "二十四節気と干支で決まる吉日のしくみと、不成就日との重なり。", category: "koyomi", published: "2026-07-15", updated: "2026-09-06" },
  { href: "/column/uruudoshi/", name: "うるう年のしくみ — 2月29日生まれの誕生日と年齢はどうなる？", desc: "4年・100年・400年のルールと、2月29日生まれの年齢が加算される日。", category: "koyomi", published: "2026-07-05", updated: "2026-09-06" },
  { href: "/column/wareki-seireki/", name: "令和・平成・昭和と西暦の変換 — 履歴書で間違えないための早見と覚え方", desc: "各元号の元年と改元日、下2桁で暗算する方法、履歴書での統一ルール。", category: "koyomi", published: "2026-07-15", updated: "2026-09-06" },
  { href: "/column/nyuseki/", name: "入籍日はどう決める？大安・一粒万倍日と、六曜より大事なこと", desc: "届出日が入籍日になるしくみと、休日提出・不備があったときの日付。", category: "life", published: "2026-07-15", updated: "2026-09-06" },
  { href: "/column/okuizome/", name: "お宮参り・お食い初めはいつ？生後日数の数え方と行事カレンダー", desc: "誕生日を1日目と数える行事の日程と、日齢との1日のずれ。", category: "life", published: "2026-07-15", updated: "2026-09-06" },
  { href: "/column/meinichi/", name: "祥月命日と月命日の違い — 年忌法要の「回忌」の数え方", desc: "一周忌は満1年、三回忌は満2年。回忌の数え方と年忌一覧。", category: "life", published: "2026-07-05", updated: "2026-09-06" },
  { href: "/column/kodengaeshi/", name: "香典返しはいつ送る？忌明けの数え方と当日返し", desc: "忌明け（四十九日後）の数え方、宗教ごとの時期、当日返しとの違い。", category: "life", published: "2026-07-15", updated: "2026-09-06" },
];

// 固定ページの日付（サイトマップ用）
export const STATIC_PAGES = [
  { href: "/", published: "2026-07-05", updated: "2026-09-06" },
  { href: "/column/", published: "2026-09-06", updated: "2026-09-06" },
  { href: "/about/", published: "2026-07-05", updated: "2026-10-31" },
  { href: "/privacy/", published: "2026-07-05", updated: "2026-09-06" },
  { href: "/contact/", published: "2026-07-05", updated: "2026-09-06" },
];

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
  boshiHokenHo: {
    label: "母子保健法（e-Gov 法令検索）",
    href: "https://laws.e-gov.go.jp/law/340AC0000000141",
    note: "第6条（新生児・乳児の定義）",
  },
  ginkoHo: {
    label: "銀行法（e-Gov 法令検索）",
    href: "https://laws.e-gov.go.jp/law/356AC0000000059",
    note: "第15条（休日）",
  },
  ntaKigen: {
    label: "国税庁 国税通則法基本通達 第3節「期間及び期限」",
    href: "https://www.nta.go.jp/law/tsutatsu/kihon/tsusoku/01/03/10.htm",
    note: "第10条第2項関係。期限が土日祝・12月29日〜1月3日に当たる場合の取扱い",
  },
  jpxCalendar: {
    label: "日本取引所グループ「営業時間・休業日」",
    href: "https://www.jpx.co.jp/corporate/about-jpx/calendar/index.html",
    note: "証券取引所の休業日一覧（年末年始は12月31日〜1月3日）",
  },
};

// holidayRules.js — 「国民の祝日に関する法律」（祝日法）の規定から祝日を算出する
//
// 内閣府の公表データ（holidays.js）がまだ無い将来の年のために、祝日法の条文どおりに
// 祝日・振替休日・国民の休日を計算します。春分の日・秋分の日は官報公示で確定するため、
// ここで算出した値はあくまで「予測」です（過去の実績では公示値と一致しています）。
//
// 対応している法律の状態: 2020年改正（スポーツの日・海の日・山の日の現行日付）以降。
// それ以前の年（2019年の改元、2020・2021年のオリンピック特例など）は再現しないため、
// 利用側で年の下限を設けてください。

/** y年m月の第n月曜日（ハッピーマンデー） */
function nthMonday(year, month, n) {
  const first = new Date(year, month - 1, 1).getDay(); // 0=日
  const offset = (8 - first) % 7; // 1日が月曜なら0
  return 1 + offset + (n - 1) * 7;
}

/**
 * 春分の日（3月）の日付。1980〜2099年に有効な近似式。
 * 国立天文台の暦要項で確定する値と、2000年以降は全年一致しています。
 */
export function vernalEquinoxDay(year) {
  return Math.floor(20.8431 + 0.242194 * (year - 1980) - Math.floor((year - 1980) / 4));
}

/** 秋分の日（9月）の日付。同上 */
export function autumnalEquinoxDay(year) {
  return Math.floor(23.2488 + 0.242194 * (year - 1980) - Math.floor((year - 1980) / 4));
}

/** 祝日法第2条で定められた「国民の祝日」（振替休日・国民の休日を除く）。[{ month, day, name }] */
export function statutoryHolidays(year) {
  return [
    { month: 1, day: 1, name: "元日" },
    { month: 1, day: nthMonday(year, 1, 2), name: "成人の日" },
    { month: 2, day: 11, name: "建国記念の日" },
    { month: 2, day: 23, name: "天皇誕生日" },
    { month: 3, day: vernalEquinoxDay(year), name: "春分の日" },
    { month: 4, day: 29, name: "昭和の日" },
    { month: 5, day: 3, name: "憲法記念日" },
    { month: 5, day: 4, name: "みどりの日" },
    { month: 5, day: 5, name: "こどもの日" },
    { month: 7, day: nthMonday(year, 7, 3), name: "海の日" },
    { month: 8, day: 11, name: "山の日" },
    { month: 9, day: nthMonday(year, 9, 3), name: "敬老の日" },
    { month: 9, day: autumnalEquinoxDay(year), name: "秋分の日" },
    { month: 10, day: nthMonday(year, 10, 2), name: "スポーツの日" },
    { month: 11, day: 3, name: "文化の日" },
    { month: 11, day: 23, name: "勤労感謝の日" },
  ];
}

function ymd(year, month, day) {
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

/**
 * y年の休日一覧（祝日＋振替休日＋国民の休日）。[{ date: "YYYY-MM-DD", name }] 日付順。
 * - 振替休日（第3条2項）: 祝日が日曜日のとき、その日後の「最も近い祝日でない日」を休日にする
 *   （5月3日が日曜なら、4日・5日は祝日なので6日が振替休日になる）
 * - 国民の休日（第3条3項）: 前日と翌日が祝日で、その日が祝日でも日曜でもない日は休日
 *   （振替休日に当たる日は国民の休日にならない）
 */
export function computeHolidays(year) {
  const byDate = new Map();
  for (const h of statutoryHolidays(year)) byDate.set(ymd(year, h.month, h.day), h.name);
  const isStatutory = (d) => byDate.has(d);

  // 振替休日
  const furikae = [];
  for (const h of statutoryHolidays(year)) {
    const d = new Date(year, h.month - 1, h.day);
    if (d.getDay() !== 0) continue;
    let cand = new Date(year, h.month - 1, h.day + 1);
    while (isStatutory(ymd(cand.getFullYear(), cand.getMonth() + 1, cand.getDate()))) {
      cand = new Date(cand.getFullYear(), cand.getMonth(), cand.getDate() + 1);
    }
    furikae.push(ymd(cand.getFullYear(), cand.getMonth() + 1, cand.getDate()));
  }
  for (const d of furikae) if (!byDate.has(d)) byDate.set(d, "振替休日");

  // 国民の休日（祝日に挟まれた平日）
  const kokumin = [];
  for (const h of statutoryHolidays(year)) {
    const next = new Date(year, h.month - 1, h.day + 2); // 祝日の翌々日が祝日なら、その間の日が候補
    const mid = new Date(year, h.month - 1, h.day + 1);
    const nextKey = ymd(next.getFullYear(), next.getMonth() + 1, next.getDate());
    const midKey = ymd(mid.getFullYear(), mid.getMonth() + 1, mid.getDate());
    if (isStatutory(nextKey) && !byDate.has(midKey) && mid.getDay() !== 0) kokumin.push(midKey);
  }
  for (const d of kokumin) byDate.set(d, "国民の休日");

  return [...byDate.entries()]
    .map(([date, name]) => ({ date, name }))
    .sort((a, b) => a.date.localeCompare(b.date));
}

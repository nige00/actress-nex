import "tailwindcss/tailwind.css";
import { Datas } from "./Datas";

export const fixedSentence = {
  caution: `本ページの情報は${Datas[0].date}時点のものです。最新の配信状況はU-NEXT公式サイトにてご確認ください。`,
  date: `【${Datas[0].date}】`,
  comment: (function () {
    return (
      <>
        <p className="text-lg" style={{ paddingBottom: "16px" }}>
          管理人より
        </p>
        <p style={{ paddingBottom: "8px" }}>
          <span style={{ fontWeight: "bold" }}>マジで抜けます</span>
          、ほんと一回見て欲しい。
        </p>
        <p>H-NEXTで見てみてください、よかったらでいいので。</p>
      </>
    );
  })(),
  affiliateLink:
    "https://lp.hnext.jp/?utm_source=linka&utm_medium=a_n&utm_campaign=a_n_title_adult",
  microCopy: "＼31日間無料 + 1200円分のポイントGET！／",
  hnext: "H-NEXT",
  actress: "AV女優",
  keywords: "見放題,AV,H-NEXT,U-NEXT,FALENO,お得,30日間無料,VOD,AV女優一覧",
  url: "https://actress-nex.vercel.app",
};

import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout";
import { Datas } from "../json/Datas";
import { actressList } from "../json/actressList";
import { fixedSentence } from "../json/fixedSentence";

const Actress: NextPage = () => {
  return (
    <Layout
      title={`${fixedSentence.date}H-NEXTで見れるAV女優まとめ`}
      description={`H-NEXTで見れるAV女優まとめ`}
      keyword={fixedSentence.keywords}
      url={`${fixedSentence.url}`}
      type="website"
    >
      <h1 className="text-xl sm:text-2xl text-gray-600">{`${fixedSentence.date}H-NEXTで見れる、AV女優まとめ【${actressList.length}人】`}</h1>
      <p>{`データ数${Datas.length}`}</p>
      <div className="py-4 sm:px-4">
        <p>{fixedSentence.caution}</p>
      </div>
      <div className="flex flex-col justify-center items-center py-4 cursor-pointer">
        <span className="py-1 text-sm">{fixedSentence.microCopy}</span>
        <a
          className="py-3 px-8 text-xl text-white bg-pink-500 hover:bg-pink-400 rounded transition"
          href={fixedSentence.affiliateLink}
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          H-NEXTで見る
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6 w-11/12">
        {actressList.map((content) => {
          return (
            <div key={content.actressName}>
              <Link href={`/${content.pageUrl}`}>
                <a className="text-blue-500 hover:opacity-90 border-b border-blue-500">
                  {content.actressName}
                </a>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col justify-center items-center py-4 cursor-pointer">
        <span className="py-1 text-sm">{fixedSentence.microCopy}</span>
        <a
          className="py-3 px-8 text-xl text-white bg-pink-500 hover:bg-pink-400 rounded transition"
          href={fixedSentence.affiliateLink}
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          H-NEXTで見る
        </a>
      </div>
    </Layout>
  );
};

export default Actress;

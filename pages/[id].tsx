import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import ReviewStar from "../components/ReviewStar";
import { Datas } from "../json/Datas";
import { actressList } from "../json/actressList";
import { fixedSentence } from "../json/fixedSentence";

type Props = {
  Data: any;
};

const Post: NextPage<Props> = ({ Data }) => {
  if (!Data) {
    return <div>Loading...</div>;
  }

  // URLに合わせて女優の出演作品を抽出
  let actressAvList = Datas.filter((item) => {
    if (item.actress == Data.actressName) {
      return item;
    } else if (item.actress.length > 1) {
      for (let i = 0; i < item.actress.length; i++) {
        if (item.actress[i] == Data.actressName) {
          return item;
        }
      }
    }
  });

  // 評価順に並び替え
  actressAvList.sort(function (a, b) {
    if (a.aveReviewPoint < b.aveReviewPoint) return 1;
    if (a.aveReviewPoint > b.aveReviewPoint) return -1;
    return 0;
  });

  return (
    <Layout
      title={`${fixedSentence.date}H-NEXTで見れる${Data.actressName}のAV作品一覧【${fixedSentence.actress}】`}
      description={`H-NEXTで見れる${Data.actressName}のAV作品まとめ【${fixedSentence.actress}】`}
      keyword={fixedSentence.keywords}
      url={`${fixedSentence.url}/${decodeURI(Data.actressName)}`}
      type="article"
    >
      <h1 className="text-xl sm:text-2xl text-gray-600">{`${fixedSentence.date}H-NEXTで見れる${Data.actressName}のAV作品一覧【${fixedSentence.actress}】`}</h1>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 w-11/12">
        {/* {actressAvList.map((content, index) => {
          return (
            <div key={content.forUrlNumber}>
              <div className="flex flex-col justify-center items-center">
                <span className="inline-block py-2 px-8 text-xl text-white bg-pink-400 rounded">{`${
                  index + 1
                } / ${actressAvList.length}`}</span>
              </div>
              <div className="pt-4">
                <a
                  href={fixedSentence.affiliateLink}
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  <Image
                    src={`/package_images/${content.imgName}`}
                    alt={content.title}
                    width={828}
                    height={466}
                    objectFit="contain"
                  />
                </a>
              </div>
              <h3 className="py-1 truncate">{content.title}</h3>
              <ReviewStar star={content.aveReviewPoint} />
              {content.paid == "----" ? (
                <p className="my-2">
                  <span className="py-1 px-2 text-white bg-green-600 rounded">
                    {content.ondemand}
                  </span>
                </p>
              ) : (
                <p className="my-2 ">
                  <span className="py-1 px-2 text-white bg-gray-400 rounded">
                    {content.ondemand}
                  </span>
                  <span className="pl-2">{content.paid}</span>
                </p>
              )}
            </div>
          );
        })} */}
      </div>
    </Layout>
  );
};

export default Post;

export async function getServerSidePaths() {
  const paths = actressList.map((actress) => {
    return {
      params: {
        id: String(actress.pageUrl),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export interface ParamsObj {
  id: string;
}

export async function getServerSideProps({ params }: { params: ParamsObj }) {
  const Data = actressList.find(function (actress) {
    return actress.pageUrl === params.id;
  });

  return {
    props: {
      Data,
      Datas,
    },
  };
}

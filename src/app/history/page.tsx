"use client";

import { Title } from "@/components/Title";
import { TimeLine } from "@/components/about/TimeLine";
import { useState } from "react";

export type HistoriesType = {
  time: string;
  title: string;
  description: string;
  href?: string;
  hrefText?: string;
};

export default function History() {
  const [histories, setHistories] = useState<HistoriesType[]>([
    {
      time: "2023/9/9",
      title: "株式会社MOVEDにジョイン",
      description: "友人からの誘いで入りました。人脈ってすごい！ ",
      href: "https://moved.co.jp",
      hrefText: "株式会社MOVED",
    },
    {
      time: "2023/8/7",
      title: "マレーシアに一週間語学留学",
      description: "初めての海外、初めての飛行機でした。",
    },
    {
      time: "2023/7/1",
      title: "HTML/TailwindCSSでweb制作を開始",
      description:
        "今まで『むずそうだから』という理由でプログラミングをしてなかったが、いざ初めて、HTML/CSSの全体像を理解したら、意外にできる！",
      href: "https://shuwatanabe-old.vercel.app",
      hrefText: "初めて作ったサイト",
    },
    {
      time: "2023/2/25",
      title: "チーム逸般人で講習会を開催",
      description:
        "マイクラで簡単なタワーの作り方や、オリジナルブロックの作り方を参加してくれた子供たちに教えました。約10人の前で、自分が主体的に話すのは初めてだったので、緊張しました。",
    },
    {
      time: "2023/1/18",
      title: "マインクラフトで計算機を制作",
      description:
        "コンピューターサイエンスに興味を持ち、マイクラ内で2進数などを駆使して計算機を作った。結構いいねついた！",
      href: "https://twitter.com/shu_out/status/1615695431631278080",
      hrefText: "詳しく(X)",
    },
    {
      time: "2022/11/6",
      title: "Microsoft主催のIDEA Creation Workshopサポーター",
      description:
        "JPというアイデアのビジネスコンテストの企画で、マイクラを使ってアイデアを出すイベントのサポーターになった。",
      href: "https://ideaworkshop1.peatix.com/",
      hrefText: "詳しく",
    },
    {
      time: "2022/1/30",
      title: "マイクラカップ受賞🏆&チーム逸般人結成",
      description:
        "今まで自己肯定感が低かった私だったが、結果を出せ、肯定感が上がるいい機会だった。",
      href: "https://youtu.be/B7V0NbCkZ_Y?si=Ic6tYlH7XS8-ETzm",
      hrefText: "詳しく(動画)",
    },
    { time: "2016", title: "", description: "学校つまんない" },
  ]);
  return (
    <>
      <Title>History</Title>

      <TimeLine histories={histories} />
    </>
  );
}

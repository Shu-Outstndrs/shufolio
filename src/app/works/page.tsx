import { Title } from "@/components/Title";

export default function Works() {
  const works = [
    {
      img: "Day.webp",
      title: "マイクラカップ2021受賞作品「私たちが考えた理想の街」",
      description:
        "18歳以下のクリエイターで構成された集団「チーム逸般人」がマイクラカップ２０２１で株式会社インプレスから「インプレスこどもとIT賞」を受賞しました。",
    },
  ];
  return (
    <>
      <Title>Works</Title>
      {works.map((data, i) => {
        return (
          <div key={i} className="grid grid-cols-3 gap-4">
            <div className="border border-slate-300 rounded-xl h-64">
              <img src={data.img} alt="workの画像" />
            </div>
          </div>
        );
      })}
    </>
  );
}

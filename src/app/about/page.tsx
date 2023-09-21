import { Title } from "@/components/Title";
import { FilledBar } from "@/components/about/FilledBar";
import { Parsonalities } from "@/components/about/Parsonalities";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";

export default function About() {
  const aboutShu = {
    age: 14,
    person: [
      { left: "外向型", right: "内向型", point: 77 },
      { left: "直感型", right: "現実型", point: 23 },
      { left: "論理型", right: "感情型", point: 20 },
      { left: "計画型", right: "探索型", point: 64 },
      { left: "自己主張型", right: "慎重型", point: 60 },
    ],
    skill: [
      { left: "HTML", point: 5 },
      { left: "CSS", point: 3 },
      { left: "TailwindCSS", point: 4 },
      { left: "JavaScript", point: 3 },
      { left: "React", point: 2 },
      { left: "Next.js", point: 3 },
      { left: "Supabase", point: 0 },
    ],
  };

  return (
    <>
      <Title>About</Title>
      <div className="w-64 my-16 mx-auto relative">
        <img
          src="./Shu-maru.png"
          alt="Shu-icon"
          className={`w-64 h-64 border-2 rounded-full border-zinc-300 z-[-1] `}
        />
      </div>
      <div className="md:mx-8 mx-4">
        <div className="my-24 text-xl">
          <div className="flex justify-between">
            <p>年齢</p> <p>{aboutShu.age}</p>
          </div>
          <Progress value={aboutShu.age} className="w-full shadow-sm" />
        </div>
        <div className="my-32">
          {aboutShu.person.map((data, i) => {
            return (
              <Parsonalities
                key={i}
                left={data.left}
                right={data.right}
                point={data.point}
              />
            );
          })}
        </div>
        {aboutShu.skill.map((data, i) => {
          return (
            <div className="my-24 text-xl" key={i}>
              <div className="flex justify-between">
                <p>{data.left}</p> <p>{data.point}</p>
              </div>
              <Progress value={data.point * 20} className="w-full shadow-sm" />
            </div>
          );
        })}
      </div>
    </>
  );
}

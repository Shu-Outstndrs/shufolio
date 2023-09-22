"use client";

import { Title } from "@/components/Title";
import { FilledBar } from "@/components/about/FilledBar";
import { Parsonalities } from "@/components/about/Parsonalities";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { useCallback, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Skills } from "@/components/about/Skills";

export type aboutShuType = {
  age: number;
  person: { left: string; right: string; point: number }[];
  skill: { left: string; point: number; id: number };
};

export default function About() {
  const [aboutShu, setAboutShu] = useState<any>({
    age: 14,
    person: [
      { left: "外向型", right: "内向型", point: 77 },
      { left: "直感型", right: "現実型", point: 23 },
      { left: "論理型", right: "感情型", point: 20 },
      { left: "計画型", right: "探索型", point: 64 },
      { left: "自己主張型", right: "慎重型", point: 60 },
    ],
    skill: [
      { left: "HTML", point: 5, id: 0 },
      { left: "CSS", point: 3, id: 1 },
      { left: "TailwindCSS", point: 4, id: 2 },
      { left: "JavaScript", point: 3, id: 3 },
      { left: "React", point: 2, id: 4 },
      { left: "Next.js", point: 3, id: 5 },
      { left: "Supabase", point: 0, id: 6 },
    ],
  });

  return (
    <>
      <Title>About</Title>
      <div className="w-64 my-16 mx-auto relative">
        <img
          src="./Shu-maru.webp"
          alt="Shu-icon"
          className={`w-64 h-64 border-2 rounded-full border-zinc-300 z-[-1] `}
        />
      </div>
      <div className="md:mx-8 mx-4">
        <motion.div
          className="my-24 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.4 }}
        >
          <div className="flex justify-between">
            <p>年齢</p> <p>{aboutShu.age}</p>
          </div>
          <Progress value={aboutShu.age} className="w-full shadow-sm" />
        </motion.div>
        <div className="my-32">
          {aboutShu.person.map((data: any, i: any) => {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: (i + 1) * 0.2, delay: 0.5 }}
                key={i}
              >
                <Parsonalities
                  left={data.left}
                  right={data.right}
                  point={data.point}
                />
              </motion.div>
            );
          })}
        </div>
        <Skills aboutShu={aboutShu} setAboutShu={setAboutShu} />
      </div>
    </>
  );
}

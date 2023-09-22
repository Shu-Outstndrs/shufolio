"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { motion } from "framer-motion";
import { aboutShuType } from "@/app/about/page";

type shuSkill = { left: string; point: number; id: number };

export const Skills = ({
  aboutShu,
  setAboutShu,
}: {
  aboutShu: any;
  setAboutShu: any;
}) => {
  const [defaultSorting, setDefaultSorting] = useState(true);
  const [scoreSorting, setScoreSorting] = useState(true);

  const defaultSortArrow = defaultSorting ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 384 512"
      className="ml-3"
    >
      <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 384 512"
      className="ml-3"
    >
      <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
    </svg>
  );
  const scoreSortArrow = scoreSorting ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 384 512"
      className="ml-3"
    >
      <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 384 512"
      className="ml-3"
    >
      <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
    </svg>
  );

  const changeSkill = (sortedSkill: shuSkill[]) => {
    setAboutShu((state: aboutShuType) => {
      return {
        ...state,
        skill: sortedSkill,
      };
    });
  };

  const handleDefault = () => {
    const sortedSkill = [...aboutShu.skill]; // aboutShu.skill のコピーを作成
    sortedSkill.sort((a, b) => {
      if (defaultSorting) {
        return b.id - a.id;
      } else {
        return a.id - b.id;
      }
    });
    changeSkill(sortedSkill);
    setDefaultSorting(!defaultSorting);
  };

  const handleScore = () => {
    const sortedSkill = [...aboutShu.skill]; // aboutShu.skill のコピーを作成
    sortedSkill.sort((a, b) => {
      if (scoreSorting) {
        return b.point - a.point;
      } else {
        return a.point - b.point;
      }
    });
    changeSkill(sortedSkill);
    setScoreSorting(!scoreSorting);
  };

  return (
    <>
      <div>
        <p>並べ替え</p>
        <div className="flex mt-2">
          <Button variant="outline" onClick={handleDefault}>
            Default {defaultSortArrow}
          </Button>
          <Button variant="outline" onClick={handleScore}>
            Score {scoreSortArrow}
          </Button>
        </div>
      </div>
      <div className="mt-12">
        {aboutShu.skill.map((data: shuSkill, i: number) => {
          console.log(data.point);
          return (
            <div className="mb-24 text-lg" key={i}>
              <div className="flex justify-between">
                <p>{data.left}</p> <p>{data.point}</p>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: i * 0.2 + 0.1, delay: 0.5 }}
              >
                <Progress
                  value={data.point * 20}
                  className="w-full shadow-sm"
                />
              </motion.div>
            </div>
          );
        })}
      </div>
    </>
  );
};

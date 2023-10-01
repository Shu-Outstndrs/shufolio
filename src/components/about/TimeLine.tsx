import Link from "next/link";
import { Button } from "../ui/button";
import { HistoriesType } from "@/app/history/page";

export const TimeLine = ({ histories }: { histories: HistoriesType[] }) => {
  return (
    <ol className="relative border-l border-gray-200 ml-1">
      {histories.map((history, i) => {
        return (
          <li className="mb-10 ml-4" key={i}>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-[10px] -left-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400">
              {history.time}
            </time>
            <h3 className="text-lg font-semibold">{history.title}</h3>
            <p className="mb-4 text-base font-normal text-gray-500 ">
              {history.description}
            </p>

            {history.href && (
              <Button variant={"outline"}>
                <Link href={history.href} className="flex">
                  <p>{history.hrefText}</p>
                  <svg
                    className="w-3 h-3 ml-2 my-auto"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </Button>
            )}
          </li>
        );
      })}
    </ol>
  );
};

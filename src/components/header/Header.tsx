"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Transition } from "react-transition-group";
import { ThemeSlider } from "./ThemeSlider";

export const Header = () => {
  const classData = { textSize: "text-lg" };
  const linkData = [
    { name: "Home", href: "/" },
    { name: "About", href: "about/" },
    { name: "Works", href: "works/" },
    { name: "History", href: "history/" },
    { name: "Blog", href: "blog/" },
  ];

  return (
    <div className="py-4">
      {linkData.map((data, i) => {
        return (
          <Link href={data.href} key={i}>
            <Button variant="ghost" className={classData.textSize}>
              {data.name}
            </Button>
          </Link>
        );
      })}
    </div>
  );
};

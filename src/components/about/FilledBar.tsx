"use client";

import { useEffect, useRef, useState } from "react";

export const FilledBar = ({ value }: { value: number }) => {
  const [width, setWidth] = useState(0);
  const ref: any = useRef(null!);

  useEffect(() => {
    let width = ref.current.offsetWidth;
    setWidth(width);
  }, []);

  const handleChange = () => {
    let width = ref.current.offsetWidth;
    setWidth(width);
  };

  // valueを0から100の間に制限
  const clampedValue = Math.min(100, Math.max(0, value));

  // バー内の円の位置を計算
  const circlePosition = (width - 16) * (clampedValue / 100);

  return (
    <div
      className="relative h-4 overflow-hidden rounded-full bg-secondary w-full shadow-sm"
      ref={ref}
      onResize={handleChange} //not work
    >
      <div className="h-full w-full flex-1 bg-primary transition-all">
        <div
          className="w-4 h-4 bg-white rounded-full border border-[#111827] "
          style={{ marginLeft: circlePosition }}
        ></div>
      </div>
    </div>
  );
};

import { FilledBar } from "./FilledBar";

export const Parsonalities = (props: any) => {
  let displayPoint;
  if (props.point < 50) {
    displayPoint = 100 - props.point;
  } else {
    displayPoint = props.point;
  }

  return (
    <div className="my-24 text-xl">
      <div className="flex justify-between">
        <p className="w-32">{props.left}</p>
        <p>{displayPoint}%</p>
        <p className="w-32 text-right">{props.right}</p>
      </div>
      <FilledBar value={props.point} />
    </div>
  );
};

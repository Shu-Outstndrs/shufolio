import { Slider } from "../ui/slider";

export const ThemeSlider = ({
  setValue,
  value,
}: {
  setValue: any;
  value: number[];
}) => {
  return (
    <Slider
      onValueChange={(e) => {
        setValue(e);
      }}
      value={value}
      max={80}
    />
  );
};

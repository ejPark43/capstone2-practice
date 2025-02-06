import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value: number) {
  return `${value}level`;
}
const marks = [
  {
    value: 1,
    label: "1 level",
  },
  {
    value: 2,
    label: "2 level",
  },
  {
    value: 3,
    label: "3 level",
  },
];
export default function DiscreteSlider({
  setValue,
}: {
  setValue: (val: number) => void;
}) {
  //   const [value, setValue] = React.useState<number>(1);
  const handleChange = (event: Event, newValue: number | number[]) => {
    console.log(newValue + " level");
    setValue(newValue as number);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Grid-Level"
        defaultValue={1}
        getAriaValueText={valuetext}
        shiftStep={1}
        step={1}
        marks={marks}
        min={1}
        max={3}
        // value={value}
        onChange={handleChange}
      />
    </Box>
  );
}

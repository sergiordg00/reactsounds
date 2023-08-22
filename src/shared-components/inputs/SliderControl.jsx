import CustomInputRange from "./CustomInputRange";

export default function SliderControl(inputProps) {
  return (
    <CustomInputRange
      {...inputProps}
      trackClassName="w-full h-[2px] bg-gray-600 rounded-lg group"
      progressClassName="bg-primary"
      thumb={
        <div className="h-[10px] w-[10px] rounded-full bg-primary transition group-active:scale-150"/>
      }
    />
  );
}
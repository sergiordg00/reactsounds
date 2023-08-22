import clsx from "clsx";

export default function FilterCard({ onClick, isActive, text }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "w-fit shrink-0 rounded-full border border-solid border-primary px-3 py-[2px] text-[13px] font-medium sm:text-sm",
        " text-primary hover:bg-primary hover:text-black",
        isActive && "bg-primary text-black"
      )}>
      {text}
    </button>
  );
}
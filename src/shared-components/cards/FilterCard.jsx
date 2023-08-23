import clsx from "clsx";

export default function FilterCard({ onClick, isActive, text }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "w-fit shrink-0 rounded-full border border-solid border-primary px-3 py-[2px]",
        " text-[13px] font-medium hover:bg-primary hover:text-black sm:text-sm",
        isActive ? "bg-primary text-black" : "text-primary"
      )}>
      {text}
    </button>
  );
}
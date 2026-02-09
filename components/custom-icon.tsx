import { ICustomIcon } from "@/types";

interface ICustomIconProps extends ICustomIcon {
  className?: string; // allow size/style customization
  size?: number;      // optional icon size
}

export default function CustomIcon({
  icon: Icon,
  dir = "left",
  className = "",
  size = 24,
}: ICustomIconProps) {
  return (
    <div
      className={`
        bg-orange-500 
        shadow-[inset_0_4px_4px_rgba(255,255,255,0.25),0_4px_10px_rgba(0,0,0,0.15)] 
        p-2 aspect-square rounded-lg text-white 
        ${dir === "left" ? "-rotate-15" : dir === "right" ? "rotate-15" : ""}
        ${className}
      `}
    >
      <Icon size={size} />
    </div>
  );
}

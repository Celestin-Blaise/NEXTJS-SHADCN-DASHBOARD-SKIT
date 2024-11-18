import Link from "next/link";

export function Footer() {
  return (
    <div className="flex z-20 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 items-center justify-center h-14">
      <p className="text-xs md:text-sm leading-loose text-muted-foreground text-center font-bold">
        COPYRIGHT © 2024
      </p>
    </div>
  );
}

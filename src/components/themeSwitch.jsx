import { Moon, Sun } from "react-feather";

export function ThemeSwitch() {
  return (
    <div className="flex gap-10 items-center">
      <p className="text-slate-300 text-xl font-bold">Light</p>
      <div
        className="flex gap-4 items-center rounded-full
        border border-slate-300 p-3"
      >
        <Sun className="text-slate-300 w-8 h-8" />
        <div className="w-8 h-8 bg-sunny rounded-full"></div>
      </div>
      <p className="text-slate-300 text-xl font-bold">Dark</p>
    </div>
  );
}

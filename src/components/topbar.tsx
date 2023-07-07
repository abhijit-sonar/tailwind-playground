import { Bell, Menu } from "react-feather";
import { SearchBar } from "./searchbar";
import { ButtonFilled, ButtonOutline } from "./buttons";

export function TopBar() {
  return (
    <div className="flex w-full items-center justify-between">
      <Menu className="text-slate-300 lg:hidden inline" />
      <h3 className="text-3xl text-slate-300 font-normal ">Statistics</h3>
      <SearchBar />
      <ButtonGroup />
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="hidden lg:flex gap-2">
      <ButtonFilled>Upgrade</ButtonFilled>
      <ButtonOutline>
        <Bell className="text-slate-300" />
      </ButtonOutline>
    </div>
  );
}

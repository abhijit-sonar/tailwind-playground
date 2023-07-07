import { Activity, Grid, Calendar, Settings } from "react-feather";

export function SidebarMenu() {
  return (
    <div className="grow">
      <ul className="overflow-auto">
        <MenuItem selected>
          <Grid className="text-slate-300 h-8 w-8" />
          <p className="text-slate-300 text-2xl">Dashboard</p>
        </MenuItem>
        <MenuItem selected={undefined} children={undefined}>
          <Activity className="text-slate-300 h-8 w-8" />
          <p className="text-slate-300 text-2xl">Activity</p>
        </MenuItem>
        <MenuItem>
          <Calendar className="text-slate-300 h-8 w-8" />
          <p className="text-slate-300 text-2xl">Schedule</p>
        </MenuItem>
        <MenuItem>
          <Settings className="text-slate-300 h-8 w-8" />
          <p className="text-slate-300 text-2xl">Settings</p>
        </MenuItem>
      </ul>
    </div>
  );
}

function MenuItem({ selected, children }) {
  const selectedClasses = "bg-slate-700";

  return (
    <li
      className={
        "flex gap-5 items-center px-8 py-4 my-1 " +
        "rounded-2xl cursor-pointer " +
        (selected ? selectedClasses : "hover:bg-dark-gunmetal-5")
      }
    >
      {children}
    </li>
  );
}

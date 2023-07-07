import { Profile } from "../../components/profile";
import { Logo } from "../../components/logo";
import { Card, CardPrimary } from "../../components/cards";
import { TopBar } from "../../components/topbar";
import { SidebarMenu } from "../../components/sidebarMenu";
import { ThemeSwitch } from "../../components/themeSwitch";

export function Home() {
  return (
    <div className="flex h-full">
      <LeftPane />
      <RightPane />
    </div>
  );
}

function LeftPane() {
  return (
    <div className="h-full overflow-auto py-16 hidden lg:flex lg:flex-col justify-between items-center gap-16 w-4/12">
      <Logo></Logo>
      <Profile />
      <SidebarMenu />
      <ThemeSwitch />
    </div>
  );
}

function RightPane() {
  return (
    <div className="flex flex-col px-8 pt-16 gap-10 grow">
      <TopBar></TopBar>
      <Content />
    </div>
  );
}

function Content() {
  return (
    <div
      className="h-full overflow-y-auto
        grid justify-between gap-4
        grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4
        pr-3 pb-32"
    >
      <Card>
        <div className="flex justify-between items-center mb-5">
          <p className="text-slate-50 font-bold text-lg">Returns</p>
          <p className=" text-gray-500">Details</p>
        </div>

        <p className="text-slate-50 font-bold text-4xl mb-2">263%</p>
        <p className="text-gray-500">Return on investment</p>
      </Card>
      <CardPrimary>
        <p className="text-black font-bold text-4xl mb-3">Something special</p>
        <p className="text-slate-500">Is coming</p>
      </CardPrimary>
      {new Array(30).fill(null).map((_, i) => (
        <Card key={i}>
          <div className="flex justify-between items-center mb-5">
            <p className="text-slate-50 font-bold text-lg">Returns</p>
            <p className=" text-gray-500">Details</p>
          </div>

          <p className="text-slate-50 font-bold text-4xl mb-2">263%</p>
          <p className="text-gray-500">Return on investment</p>
        </Card>
      ))}
    </div>
  );
}

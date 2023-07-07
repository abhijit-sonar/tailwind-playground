import { ButtonOutlineSmall } from "./buttons";

export function Profile() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Avatar />
      <p className="text-slate-300 font-bold text-2xl">Louis Carter</p>
      <ButtonOutlineSmall>Edit</ButtonOutlineSmall>
    </div>
  );
}

function Avatar() {
  return (
    <img
      src="https://eu.ui-avatars.com/api/?name=Louis+Carter"
      className="radius-full rounded-full w-20"
    />
  );
}

export function ButtonFilled(props: any) {
  return <button className="bg-sunny py-2 px-4 rounded-lg" {...props} />;
}

export function ButtonOutline(props: any) {
  return (
    <button
      className="bg-transparent py-2 px-4 rounded-lg
      border border-slate-700"
      {...props}
    ></button>
  );
}

export function ButtonOutlineSmall(props: any) {
  return (
    <button
      className="bg-transparent rounded-full border border-slate-700 py-1 px-4
        text-sm text-slate-400
        hover:bg-slate-800"
      {...props}
    />
  );
}

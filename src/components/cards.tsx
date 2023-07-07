export function Card(props: any) {
  return (
    <div className="p-8 rounded-3xl bg-dark-gunmetal-5 flex flex-col">
      {props.children}
    </div>
  );
}

export function CardPrimary(props: any) {
  return (
    <div className="shadow-md p-8 rounded-3xl bg-sunny flex flex-col ">
      {props.children}
    </div>
  );
}

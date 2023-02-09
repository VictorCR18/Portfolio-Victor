import "./styles.css";

export function Titles(props: { symbol: string; title: string }) {
  return (
    <div className="main-title">
      <label className="Symbol">{props.symbol}</label>
      <label className="Title">{props.title}</label>
    </div>
  );
}

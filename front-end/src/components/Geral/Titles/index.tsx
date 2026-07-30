import "./styles.css";

export function Titles(props: { symbol: string; title: string }) {
  return (
    <div className="main-title">
      <span className="Symbol" aria-hidden="true">
        {props.symbol}
      </span>
      <h2 className="Title">{props.title}</h2>
    </div>
  );
}

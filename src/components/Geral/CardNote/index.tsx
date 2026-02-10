import "./styles.css";

interface CardNote {
  title: string;
  description: string;
}

export function CardNote(props: { title: string; description: string }) {
  return (
    <div className="main-cardnote">
      <div className="content-cardnote">
        <h3 className="title-cardnote">{props.title}</h3>
        <div className="description-cardnode">
          <label>{props.description}</label>
        </div>
      </div>
    </div>
  );
}

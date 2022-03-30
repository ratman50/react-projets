import "./QuestionRow.css"
export default function QuestionRow(props) {
    const opt=props.opt;
    return (
    <div className="row" onClick={props.handleClick}>{opt}</div>
  )
}

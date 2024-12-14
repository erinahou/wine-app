export default function WineDescLineItem(props) {
  return(
    <div className="wine-desc-line-item">
      <p>{props.label}</p>
      <p>{props.value}</p>
    </div>
  )
}

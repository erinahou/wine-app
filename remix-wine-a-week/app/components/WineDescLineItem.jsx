export default function WineDescLineItem(props) {
  return(
    <div className="flex border-b border-black pt-2 pb-6">
      <p className="uppercase flex-1">{props.label}</p>
      <p className="flex-1">{props.value}</p>
    </div>
  )
}

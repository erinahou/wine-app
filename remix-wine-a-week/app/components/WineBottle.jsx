export default function WineBottle(props) {
  return(
    <>
      <div
        key={props.name}
        className="text-xs wine-bottle"
        style={{
          background: props.variety === "White" ? "var(--white-wine)" : "var(--red-wine)"
        }}
      >
        <div className="wine-bottle--stock">
          <p>{props.stock}</p>
        </div>
        <div className="wine-bottle--name">
          <p>{props.name}</p>
        </div>
      </div>
    </>
  )
}

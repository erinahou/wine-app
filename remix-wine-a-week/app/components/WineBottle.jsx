export default function WineBottle(props) {
  return(
    <>
      <div
        key={props.name}
        className="wine-bottle text-xs"
        style={{
          background: props.variety === "White" ? "var(--white-wine)" : "var(--red-wine)"
        }}
      >
        <div className="stock">
          <p>{props.stock}</p>
        </div>
        <div className="name">
          <p>{props.name}</p>
        </div>
      </div>
    </>
  )
}

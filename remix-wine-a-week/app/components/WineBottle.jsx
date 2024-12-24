import { displayWineColor } from '../utils/wineColor';

export default function WineBottle(props) {
  return(
    <>
      <div
        key={props.name}
        className="wine-bottle text-xs"
        style={{
          background: displayWineColor(props.variety)
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

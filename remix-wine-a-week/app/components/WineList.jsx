import { NavLink } from "@remix-run/react";
import WineBottle from './WineBottle';
import { getWineColor } from '../utils/wineColor';

export default function WineList(wineList) {
  return wineList.map(wine => (
    <NavLink
      key={wine.slug.current}
      to={`${wine.slug.current}`}
      prefetch="intent"
    >
      <WineBottle
        name={wine.name}
        stock={wine.stock}
        variety={getWineColor(wine)}
      />
    </NavLink>
  ))
}

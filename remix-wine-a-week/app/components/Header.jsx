import { Link, NavLink, useLoaderData } from "@remix-run/react";

export default function Header(wines) {
  return (
    <nav>
      <Link to="/">Wine a day</Link>
      {/* <NavLink to="wines">Wines</NavLink> */}
    </nav>
  )
}

import { Link, NavLink, useLoaderData } from "@remix-run/react";

export default function Header(wines) {
  return (
    <nav className="header">
      <Link
        to="/"
      >
        My cellar
      </Link>
      {/* <NavLink to="wines">Wines</NavLink> */}
    </nav>
  )
}

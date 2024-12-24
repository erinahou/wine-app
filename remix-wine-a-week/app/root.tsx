import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  NavLink,
  useLoaderData
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { SanityDocument } from "@sanity/client";
import { client } from "src/sanity/client";

import Header from "./components/Header";
import WineFilters from "~/components/WineFilters";
import WineList from "~/components/WineList";

import './styles/shared.css';
import "./tailwind.css";
import { useState } from "react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: "./tailwind.css" },
  { rel: "stylesheet", href: "./styles/shared.css" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  }
];

const WINES_QUERY = `
  *[_type == "wine"]{
    name,
    stock,
    "varieties": varieties[]->{
      name,
      type
    },
    region -> {
      region,
      country -> {
        country
      }
    },
    slug {
      current
    }
    }
`;

export async function loader() {
  return { wines: await client.fetch<SanityDocument[]>(WINES_QUERY) };
}

export function Layout({ children }: { children: React.ReactNode }) {
  console.log("Rendering Layout...");
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const { wines } = useLoaderData<typeof loader>();
  const [filters, setFilters] = useState({
    type: null,
    country: null
  });

  const filteredWines = wines.filter(wine => {
    return (!filters.type || wine.varieties.some(variety => variety.type === filters.type)) &&
    (!filters.country || wine.region.country.country === filters.country)
  })

  function handleFilter(newFilter) {
    setFilters(prev => {
      return {
        ...prev,
        ...newFilter
      }
    })
  }

  function clearFilters() {
    setFilters({
      type: null,
      country: null,
    })
  }

  return (
    <>
      <main className="main-container">
        <WineFilters onFilter={handleFilter} onClear={clearFilters} />
        <div className="wine-cellar">
          {WineList(filteredWines)}
        </div>
      </main>
      <Outlet />
    </>
  );
}

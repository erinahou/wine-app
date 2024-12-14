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

import Header from "./components/Header"
import WineBottle from "~/components/WineBottle";

import './styles/shared.css';
import "./tailwind.css";

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
    variety->{
      name,
      type
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

  return (
    <>
      <main className="container mx-auto min-h-screen max-w-5xl p-8">
        <div className="wine-cellar--container">
          {
            wines.map(wine => (
              <NavLink
                to={`${wine.slug.current}`}
                prefetch="intent" // Prefetch data when the link is hovered or in view
              >
                <WineBottle
                  name={wine.name}
                  stock={wine.stock}
                  variety={wine.variety.type}
                />
              </NavLink>
            ))
          }
        </div>
      </main>
      <Outlet />
    </>
  );
}

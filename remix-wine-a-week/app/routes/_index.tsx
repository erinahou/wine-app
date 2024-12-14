import { NavLink, useLoaderData } from "@remix-run/react";
import { SanityDocument } from "@sanity/client";
import { client } from "src/sanity/client";
import WineBottle from "~/components/WineBottle";

// const WINES_QUERY = `
//   *[_type == "wine"]{
//     name,
//     stock,
//     variety->{
//       name,
//       type
//     },
//     slug {
//       current
//     }
//     }
// `;

// export async function loader() {
//   return { wines: await client.fetch<SanityDocument[]>(WINES_QUERY) };
// }

export default function IndexPage() {
  // const { wines } = useLoaderData<typeof loader>();

  return (
    // <main className="container mx-auto min-h-screen max-w-5xl p-8">
    //   <div className="wine-cellar--container">
    //     {
    //       wines.map(wine => (
    //         <NavLink to={`wines/${wine.slug.current}`}>
    //           <WineBottle
    //             name={wine.name}
    //             stock={wine.stock}
    //             variety={wine.variety.type}
    //           />
    //         </NavLink>
    //       ))
    //     }
    //   </div>
    // </main>
    <h1>Hello!</h1>
  );
}

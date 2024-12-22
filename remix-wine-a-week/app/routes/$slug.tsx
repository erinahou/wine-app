import { useState } from 'react'
import { LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { SanityDocument } from "@sanity/client";
import { client } from "src/sanity/client";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

//Local components
import WineDescLineItem from '../components/WineDescLineItem'
import WineBottle from '../components/WineBottle';
import renderWineList from '../components/WineList';

const WINE_QUERY = `
*[_type == "wine" && slug.current == $slug][0]{
    name,
    stock,
    vintage,
    variety->{
      name,
      type
    },
    producer->{
      name
    },
    region -> {
      region,
      country -> {
        country
      }
    },
    tastingNotes,
    slug
  }
`;

export async function loader({ params }: LoaderFunctionArgs) {
  return { wine: await client.fetch<SanityDocument>(WINE_QUERY, params) };
}

export default function WineDetailPage() {
  const { wine } = useLoaderData<typeof loader>();
  const [open, setOpen] = useState(true);

  function getYear(vintage) {
    const year = new Date(vintage).getFullYear();

    return year
  }

  function backgroundColorOfDrawer(wine) {
    return wine.variety.type === 'Red' ? 'var(--red-wine)' : 'var(--white-wine)'
  }


  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-white/10 backdrop-blur-sm transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto relative w-screen max-w-2xl transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <TransitionChild>
                <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                  <Link
                    type="button"
                    onClick={() => setOpen(false)}
                    to="/"
                    className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <span className="absolute -inset-2.5" />
                    <span className="sr-only">Close panel</span>
                    <XMarkIcon aria-hidden="true" className="size-6" />
                  </Link>
                </div>
              </TransitionChild>
              <div
                className="flex h-full flex-col overflow-y-scroll p-16 shadow-xl"
                style={{
                  background: backgroundColorOfDrawer(wine),
                  backgroundColor: "white"
                }}
              >
                {/* <div className="px-4 sm:px-6">
                  <DialogTitle className="text-base font-semibold text-gray-900">
                    {wine.name ? wine.name : "No name"}
                  </DialogTitle>
                </div> */}
                <div
                  className="flex"
                >
                  <h1>
                    {wine.name ? wine.name : "No name"}
                  </h1>
                </div>
                <div className="wine-detail--description relative flex-1">
                  <WineDescLineItem
                    label="Producer"
                    value={wine.producer.name ? wine.producer.name : "No producer specified"}
                  />

                  <WineDescLineItem
                    label="Region"
                    value={wine.region.region ? wine.region.region : "No region specified"}
                  />

                  <WineDescLineItem
                    label="Country"
                    value={wine.region.country.country ? wine.region.country.country : "No country specified"}
                  />

                  <WineDescLineItem
                    label="Vintage"
                    value={wine.vintage ? getYear(wine.vintage) : "No vintage specified"}
                  />

                  <WineDescLineItem
                    label="Variety"
                    value={wine.variety.name ? wine.variety.name : "No region specified"}
                  />

                  <WineDescLineItem
                    label="Red / White"
                    value={wine.variety.type ? wine.variety.type : "No region specified"}
                  />

                  <WineDescLineItem
                    label="Notes"
                    value={wine.tastingNotes ? wine.tastingNotes : "No notes"}
                  />
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}

"use client";
import { useState } from "react";
import Link from "next/link";
import { locationsTerms } from "terms/locations";
import { createTermDefDisplay } from "~/helpers/createTermDefDisplay";
import { shuffleTerms } from "~/helpers/shuffleTerms";
import MatchMenu from "./matchMenu";

export default function LocationLocationLocation() {
  const [locationsKeys, setLocationsKeys] = useState(
    Object.keys(locationsTerms),
  );
  const [defsVisible, setDefsVisible] = useState(false);

  const toggleVisibility = () => {
    setDefsVisible(!defsVisible);
  };

  const setTerms = (locationsKeys: string[]) =>
    createTermDefDisplay(locationsTerms, locationsKeys);
  const [allLocationsDisplay, setLocationsDisplay] = useState(
    setTerms(locationsKeys),
  );

  const shuffleLocations = () => {
    const newLocations = shuffleTerms(locationsKeys);
    setLocationsKeys(newLocations);
    setLocationsDisplay(setTerms(newLocations));
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col gap-12 px-4 py-16 ">
        <Link
          className="flex w-fit flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
          href="/"
        >
          <h3 className="text-2xl font-bold">Back</h3>
        </Link>
        <div className="flex justify-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Location,{" "}
            <span className="text-[hsl(280,100%,70%)]">Location, </span>{" "}
            Location
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8"></div>
        </div>
        <button
          className="flex w-fit flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
          onClick={shuffleLocations}
        >
          <h3 className="text-2xl font-bold">Shuffle</h3>
        </button>
        <MatchMenu locationsKeys={locationsKeys} />
        <div>
          <button
            onClick={toggleVisibility}
            className="flex w-fit flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
          >
            {defsVisible ? "Hide" : "Show"} Definitions
          </button>
          {defsVisible && <div className="">{allLocationsDisplay}</div>}
        </div>
      </div>
    </main>
  );
}

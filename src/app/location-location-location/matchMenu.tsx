import React from "react";
import { createTermMatchDisplay } from "~/helpers/createTermMatchDisplay";
import { locationsTerms } from "terms/locations";

type MatchMenuProps = { locationsKeys: string[] };

export default function MatchMenu({ locationsKeys }: MatchMenuProps) {
  const locationDisplay = createTermMatchDisplay(locationsTerms, locationsKeys);
  return <div>{locationDisplay}</div>;
}

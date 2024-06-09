import React from "react";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeServices from "./HomeServices/HomeServices";
import { Helmet } from "react-helmet";

export default function HomePage() {
  return (
    <>
      <HomeBanner />
      <HomeServices />
    </>
  );
}

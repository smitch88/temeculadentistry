import React from "react";
import useScript from "../hooks/useScript";
import Page from "./common/Page";

const Reviews = () => {
  const [testiLoaded] = useScript(
    "https://birdeye.com/embed/v4/157429487503886/8/1234567985183"
  );
  const [reviewLoaded] = useScript(
    "https://birdeye.com/embed/v4/157429487503886/3/1234567935183"
  );

  return (
    <Page header="Reviews" isLoading={!testiLoaded || !reviewLoaded}>
      <div id="bf-revz-widget-1234567985183" />
      <br />
      <br />
      <div
        id="bf-revz-widget-1234567935183"
        style={{ overflowScrolling: "touch" }}
      />
    </Page>
  );
};

export default Reviews;

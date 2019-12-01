import React from "react";
import { Dimmer, Loader, Segment } from "semantic-ui-react";

const SuspenseLoader = () => (
  <Segment
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: 500,
      border: "none",
      boxShadow: "none",
      fontSize: "2em"
    }}
  >
    <Dimmer active inverted>
      <Loader inverted>Loading</Loader>
    </Dimmer>
  </Segment>
);

export default SuspenseLoader;

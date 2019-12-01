import React, { useEffect } from "react";
import { Container, Header, Segment } from "semantic-ui-react";
import SuspenseLoader from "./SuspenseLoader";

const Page = ({ header, isLoading = false, children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Container fluid style={{ borderBottom: "1px solid rgb(238, 238, 238)" }}>
      <Segment
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: 500,
          border: "none",
          boxShadow: "none",
          backgroundColor: "#fff",
          margin: "1em auto 3em auto",
          fontSize: "1.2em",
          maxWidth: 900
        }}
      >
        {header && (
          <Header
            as="h1"
            style={{
              color: "rgb(6, 61, 99)",
              borderBottomColor: "rgba(2, 139, 210, 0.7)",
              marginBottom: "1em",
              fontSize: "2em"
            }}
            dividing
          >
            {header}
          </Header>
        )}
        {isLoading ? <SuspenseLoader /> : children}
      </Segment>
    </Container>
  );
};

export default Page;

import React, { lazy, Suspense } from "react";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page from "./pages/common/Page";
import SuspenseLoader from "./pages/common/SuspenseLoader";
import HeaderSection from "./pages/common/Header";
import FooterSection from "./pages/common/Footer";
import Home from "./pages/Home";

const AboutUs = lazy(() => import("./pages/AboutUs"));
const Services = lazy(() => import("./pages/Services"));
const Reviews = lazy(() => import("./pages/Reviews"));
const ContactUs = lazy(() => import("./pages/ContactUs"));

const App = () => {
  return (
    <Router>
      <HeaderSection />
      <Suspense fallback={<SuspenseLoader />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutUs} />
          <Route path="/services" component={Services} />
          <Route exact path="/reviews" component={Reviews} />
          <Route exact path="/contact" component={ContactUs} />
          <Route
            render={() => (
              <Page>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                    marginTop: "4em",
                    textAlign: "center"
                  }}
                >
                  <h2
                    style={{
                      fontSize: "2.5em",
                      marginBottom: 0,
                      color: "#555"
                    }}
                  >
                    404
                  </h2>
                  <h2 style={{ fontSize: "3em", marginTop: 0 }}>
                    Page Not Found
                  </h2>
                  <p>
                    Oops! Seems like you've stumbled upon a link that does not
                    exist
                  </p>
                  <Link to="/">Back to Home</Link>
                </div>
              </Page>
            )}
          />
        </Switch>
      </Suspense>
      <FooterSection />
    </Router>
  );
};

export default App;

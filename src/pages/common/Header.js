import React, { createElement, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Menu, Visibility } from "semantic-ui-react";

const topMenuStyle = {
  backgroundColor: "#eee",
  margin: 0,
  padding: 0
};

const menuStyle = {
  background: "linear-gradient(-90deg, #063d63, #074168 50%, #063d63)",
  padding: 0,
  margin: 0,
  borderRadius: 0,
  border: "none",
  boxShadow: "none"
};

const fixedMenuStyle = {
  boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)"
};

const TopHeaderLink = ({ href, ...props }) => {
  return createElement(href ? "a" : "span", {
    ...props,
    href,
    style: {
      color: "#063d63",
      transition: "0.1s color ease",
      textTransform: "uppercase",
      fontFamily: "'Oswald', sans-serif",
      fontSize: "1.1em",
      fontWeight: 500,
      letterSpacing: "0.0875em",
      margin: 0,
      padding: 0
    }
  });
};

const HeaderLink = props => {
  const [isHovering, setHover] = useState(false);
  return (
    <Link
      style={{
        color: !isHovering
          ? "rgba(255, 255, 255, 0.85)"
          : "rgba(255, 255, 255, 1)",
        transition: "0.1s color ease",
        textTransform: "uppercase",
        fontFamily: "'Oswald', sans-serif",
        fontSize: "1.25em",
        fontWeight: 300,
        letterSpacing: "0.0875em"
      }}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...props}
    />
  );
};

const Header = () => {
  const [menuFixed, setMenuFixed] = useState(false);
  return (
    <Fragment>
      <Grid columns={3} padded={false} style={topMenuStyle} centered doubling>
        <Grid.Row style={{ maxWidth: 980, margin: "0 auto" }}>
          <Grid.Column textAlign="center">
            <Menu.Item as={TopHeaderLink} href="mailto:tvdpatients@gmail.com">
              <i
                className="envelope icon"
                style={{ color: "inherit", margin: "-2px 7px 0 0" }}
              />
              tvdpatients@gmail.com
            </Menu.Item>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <Menu.Item
              as={TopHeaderLink}
              href="https://birdeye.com/temecula-valley-dentistry-157429487503886#appointment"
              target="_blank"
            >
              <i
                className="calendar icon"
                style={{ color: "inherit", margin: "-2px 7px 0 0" }}
              />
              Request appointment
            </Menu.Item>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <Menu.Item as={TopHeaderLink}>
              <i
                className="phone icon"
                style={{ color: "inherit", margin: "-2px 7px 0 0" }}
              />
              +95 1 296 9661
            </Menu.Item>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Visibility
        onBottomPassed={() => setMenuFixed(true)}
        onBottomVisible={() => setMenuFixed(false)}
        once={false}
      >
        <Grid
          as={Menu}
          columns={5}
          padded={false}
          fixed={menuFixed ? "top" : undefined}
          style={{
            ...menuStyle,
            ...(menuFixed && fixedMenuStyle)
          }}
          centered
        >
          <Grid.Row style={{ maxWidth: 750, margin: "0 auto" }}>
            <Grid.Column textAlign="center">
              <HeaderLink to="/">Home</HeaderLink>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <HeaderLink to="/about">About</HeaderLink>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <HeaderLink to="/services">Services</HeaderLink>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <HeaderLink to="/reviews">Reviews</HeaderLink>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <HeaderLink to="/contact">Contact</HeaderLink>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Visibility>
    </Fragment>
  );
};

export default Header;

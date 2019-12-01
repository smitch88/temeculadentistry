import React, { Fragment } from "react";
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import CosmeticIcon from "../../assets/icons/cosmetic_surgery.svg";
import EmergencyIcon from "../../assets/icons/emergency.svg";
import RootCanalIcon from "../../assets/icons/root_canal.svg";
import SurgeryIcon from "../../assets/icons/surgery.svg";
import WhiteLogo from "../../assets/logo_trans_white.svg";

const Footer = () => {
  return (
    <Fragment>
      <Segment
        style={{
          display: "flex",
          alignItems: "center",
          margin: 0,
          position: "relative",
          background: "#fff",
          borderRadius: 0,
          border: "none",
          boxShadow: "none",
          width: "100%",
          color: "#063d63",
          padding: "3em 0"
        }}
      >
        <Grid style={{ width: "100%" }} columns={4} centered stackable>
          <Grid.Row centered>
            <Grid.Column
              style={{ padding: "0 2em" }}
              textAlign="center"
              computer={3}
              tablet={6}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "inherit",
                  fontSize: "1.5em"
                }}
              >
                <Image
                  style={{ height: "3em", width: "3em" }}
                  src={CosmeticIcon}
                />
                <Header
                  as="p"
                  style={{
                    color: "inherit",
                    fontWeight: 300,
                    fontFamily: "Oswald"
                  }}
                >
                  Cosmetic Dentistry
                </Header>
              </div>
            </Grid.Column>
            <Grid.Column
              style={{ padding: "0 2em" }}
              textAlign="center"
              computer={3}
              tablet={6}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "inherit",
                  fontSize: "1.5em"
                }}
              >
                <Image
                  style={{ height: "3em", width: "3em" }}
                  src={RootCanalIcon}
                />
                <Header
                  as="p"
                  style={{
                    color: "inherit",
                    fontWeight: 300,
                    fontFamily: "Oswald"
                  }}
                >
                  Endodontics
                </Header>
              </div>
            </Grid.Column>
            <Grid.Column
              style={{ padding: "0 2em" }}
              textAlign="center"
              computer={3}
              tablet={6}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "inherit",
                  fontSize: "1.5em"
                }}
              >
                <Image
                  style={{ height: "3em", width: "3em" }}
                  src={SurgeryIcon}
                />
                <Header
                  as="p"
                  style={{
                    color: "inherit",
                    fontWeight: 300,
                    fontFamily: "Oswald"
                  }}
                >
                  Oral Surgery
                </Header>
              </div>
            </Grid.Column>
            <Grid.Column
              style={{ padding: "0 2em" }}
              textAlign="center"
              computer={3}
              tablet={6}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "inherit",
                  fontSize: "1.5em"
                }}
              >
                <Image
                  style={{ height: "3em", width: "3em" }}
                  src={EmergencyIcon}
                />
                <Header
                  as="p"
                  style={{
                    color: "inherit",
                    fontWeight: 300,
                    fontFamily: "Oswald"
                  }}
                >
                  Emergency Relief
                </Header>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment
        inverted
        style={{
          padding: "5em 0em",
          background: "#063d63"
        }}
        vertical
      >
        <Container textAlign="center">
          <Grid columns={3} divided stackable inverted>
            <Grid.Row>
              <Grid.Column>
                <Header inverted as="h4" content="About" />
                <List link inverted>
                  <List.Item as={Link} to="/about#Dr-Riku-Mukherjee">
                    Dr. Riku Mukherjee, DDS
                  </List.Item>
                  <List.Item as={Link} to="/about#Dr-Alvina-Padua">
                    Dr. Alvina Padua
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <Header inverted as="h4" content="Services" />
                <List link inverted>
                  <List.Item as={Link} to="/services/cosmetic-dentistry">
                    Cosmetic Dentistry
                  </List.Item>
                  <List.Item as={Link} to="/services/endontics">
                    Endodontics
                  </List.Item>
                  <List.Item as={Link} to="/services/oral-surgery">
                    Oral Surgery
                  </List.Item>
                  <List.Item as={Link} to="/services/emergency-pain-relief">
                    Emergency Pain Relief
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <Header inverted as="h4" content="Accepts All Insurances" />
                <Header
                  inverted
                  as="h4"
                  content="Including Denti-Cal (Medicaid)"
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider inverted section />
          <Image src={WhiteLogo} size="small" centered alt="logo here" />
          <List horizontal inverted divided link size="small">
            <List.Item as={Link} to="/site-map">
              Site Map
            </List.Item>
            <List.Item as={Link} to="/contact">
              Contact Us
            </List.Item>
            <List.Item as={Link} to="/terms-and-conditions">
              Terms and Conditions
            </List.Item>
            <List.Item as={Link} to="/privacy-policy">
              Privacy Policy
            </List.Item>
          </List>
        </Container>
      </Segment>
    </Fragment>
  );
};

export default Footer;

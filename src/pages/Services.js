import React from "react";
import { Grid, Header, Image, List, Segment } from "semantic-ui-react";
import CosmeticTeeth from "../assets/services/cosmetic_teeth.jpg";
import Endodontics from "../assets/services/endodontics.jpg";
import RootCanal from "../assets/services/root_canal.png";
import Pain1 from "../assets/services/pain1.jpg";
import Page from "./common/Page";

const Services = () => (
  <Page header="Services">
    <p style={{ lineHeight: "28px" }}>
      At Temecula Valley Dentistry, you will find we offer a variety of dental
      services to meet your healthcare needs. Our staff is highly trained and
      professional, and keeps informed of the latest techniques and technologies
      through continuing education.
    </p>
    <Segment
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        fontSize: "1em"
      }}
    >
      <Header
        as="h2"
        style={{
          color: "rgb(6, 61, 99)",
          marginBottom: "1em",
          fontWeight: 700
        }}
      >
        Cosmetic Dentistry
      </Header>
      <Grid columns={2} stackable>
        <Grid.Row>
          <Grid.Column>
            <p style={{ textAlign: "left", lineHeight: "28px" }}>
              Cosmetic dentistry will give you healthy, radiant teeth. It is one
              of the most cost-effective ways to improve confidence and make you
              want to share your smile.
            </p>
            <Header
              as="h3"
              style={{
                color: "rgb(6, 61, 99)"
              }}
            >
              Our practice offers the following:
            </Header>
            <List>
              <List.Item>Smile Makeovers</List.Item>
              <List.Item>Teeth Whitening</List.Item>
              <List.Item>Cosmetic Bonding</List.Item>
              <List.Item>Porcelain Veneers</List.Item>
            </List>
            <br />
            <p style={{ textAlign: "left", lineHeight: "28px" }}>
              Call us today at <strong>(951) 296 9661</strong> to schedule your
              appointment to improve your smile.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Image src={CosmeticTeeth} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        fontSize: "1em"
      }}
    >
      <Header
        as="h2"
        style={{
          color: "rgb(6, 61, 99)",
          marginBottom: "1em",
          fontWeight: 700
        }}
      >
        Endodontics
      </Header>
      <Grid columns={2} stackable>
        <Grid.Row>
          <Grid.Column>
            <p style={{ textAlign: "left", lineHeight: "28px" }}>
              "Endo" is the Greek word for "inside" and "odont" is Greek for
              "tooth." Endodontic treatment treats the inside of the tooth. To
              understand endodontic treatment, it helps to know something about
              the anatomy of the tooth. Inside the tooth, under the white enamel
              and a hard layer called the dentin, is a soft tissue called the
              pulp. The pulp contains blood vessels, nerves, and connective
              tissue and creates the surrounding hard tissues of the tooth
              during development.
            </p>
            <Header
              as="h3"
              style={{
                color: "rgb(6, 61, 99)"
              }}
            >
              Our practice offers the following treatments:
            </Header>
            <List>
              <List.Item>Root canal treatment</List.Item>
              <List.Item>Endodontic retreatment</List.Item>
              <List.Item>Endodontic surgery</List.Item>
              <List.Item>Traumatic dental injuries</List.Item>
              <List.Item>Dental implants</List.Item>
            </List>
            <br />
            <p style={{ textAlign: "left", lineHeight: "28px" }}>
              Call us today at <strong>(951) 296 9661</strong> to schedule your
              appointment to improve your smile.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Image src={Endodontics} />
            <br />
            <Image src={RootCanal} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        fontSize: "1em"
      }}
    >
      <Header
        as="h2"
        style={{
          color: "rgb(6, 61, 99)",
          marginBottom: "1em",
          fontWeight: 700
        }}
      >
        Emergency Relief
      </Header>
      <Grid columns={2} stackable>
        <Grid.Row>
          <Grid.Column>
            <p style={{ textAlign: "left", lineHeight: "28px" }}>
              If you have never suffered a dental emergency, consider yourself
              lucky. If you should suffer one, however, you should know what to
              do. The actions you take immediately following the emergency could
              mean the difference between a minor repair and one that is very
              serious, resulting in permanent loss of your tooth or worse!
            </p>
            <Header
              as="h3"
              style={{
                color: "rgb(6, 61, 99)"
              }}
            >
              Our practice offers the following emergency relief:
            </Header>
            <List>
              <List.Item> Same-Day Emergency Exams & Pain Management</List.Item>
              <List.Item>Extractions</List.Item>
              <List.Item>Endodontic surgery</List.Item>
              <List.Item>Root Canals</List.Item>
              <List.Item>Temporary Tooth Replacements</List.Item>
            </List>
            <br />
            <p style={{ textAlign: "left", lineHeight: "28px" }}>
              In any of these dental emergencies you should call us and get to
              the dental office as soon as possible.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Image src={Pain1} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </Page>
);

export default Services;

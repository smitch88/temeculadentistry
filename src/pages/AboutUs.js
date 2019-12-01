import React from "react";
import { Header, Image, Segment } from "semantic-ui-react";
import DrSolo from "../assets/selfies/dr2_shadowed.jpg";
import Page from "./common/Page";

const AboutUs = () => (
  <Page header="About Us">
    <p style={{ lineHeight: "28px" }}>
      Dr. Riku Mukherjee established Temecula Valley Dentistry in 2019 when he
      took over the practice after he and his family decided to move to Southern
      California from the east coast. He is the owner and the primary dentist.
      Dr. Alvina Padua is an associate dentist that works at the practice as
      well. Dr. Mukherjee and Dr. Padua are working with patients to provide the
      very best dental care for patients in the Temecula area. Dr. Mukherjee
      wants to hear each and every concern from every patient about their teeth
      and address it as promptly as possible. Our team consists of office
      manager Erlinda who will answer all your billing questions and make your
      appointments and two assistants Eva and Josephine who will assist Dr.
      Mukherjee and Dr. Padua for each patient's treatment
    </p>
    <Segment
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1em",
        textAlign: "center"
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
        Dr. Riku Mukherjee, DDS
      </Header>
      <Image size="medium" src={DrSolo} />
      <br />
      <p style={{ textAlign: "left", lineHeight: "28px" }}>
        Dr. Riku Mukherjee earned his DDS degree from the University of Maryland
        Dental School, graduating in the top 10% of his class and gaining
        clinical experience from a top 10 dental school in the United States
        according to The Student Doctor Network. Dr. Mukherjee established
        Temecula Valley Dentistry in 2019 when he and his wife decided to leave
        the frigid temperatures of the east coast, where he was in private
        practice for 8 years, for the beautiful sunshine of Southern California.
        Dr. Mukherjee has provided missionary dentistry work in India and
        Vietnam. He has also provided free care for the Mission of Mercy. He is
        a member of the American Dental Association and the California Dental
        Association. Dr. Mukherjee is dedicated to providing the best and most
        affordable dental care for his patients. He wants every patient that
        walks through his door to be extremely happy with their teeth from his
        treatment. Dr. Mukherjee lives in Temecula with his wife, 3 year old
        son, dog, and 2 cats.
      </p>
    </Segment>
  </Page>
);

export default AboutUs;

import React from "react";
import { Header, Image, List, Grid } from "semantic-ui-react";
import OfficeImage from "../assets/other/front_desk.jpg";
import Page from "./common/Page";

const ContactUs = () => (
  <Page header="Contact Us">
    <Grid columns={2} stackable>
      <Grid.Row>
        <Grid.Column>
          <p>
            We gladly welcome new patients! Feel free to give our office a call
            to ask about procedures, billing, or any other questions you may
            have. Our friendly receptionists will be happy to help.
          </p>
          <Header
            as="h2"
            style={{
              color: "rgb(6, 61, 99)",
              fontWeight: 700
            }}
          >
            Temecula Valley Dentistry
          </Header>
          <a
            style={{
              color: "rgb(2, 139, 210)"
            }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps/dir/39.1443006,-76.6619475/27315+Jefferson+Ave+STE+G2,+Temecula,+CA+92590/@36.2495326,-115.1266038,4z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x80db7e23edb56767:0xe61832ef47773847!2m2!1d-117.1664536!2d33.5211159!3e0"
          >
            27315 Jefferson Avenue Suite G2 Temecula, CA 92590
          </a>
          <Header
            as="h2"
            style={{
              color: "rgb(6, 61, 99)",
              fontWeight: 700
            }}
          >
            Phone
          </Header>
          <p>+95 1 296 9661</p>
          <Header
            as="h2"
            style={{
              color: "rgb(6, 61, 99)",
              fontWeight: 700
            }}
          >
            Email
          </Header>
          <a
            style={{
              color: "rgb(2, 139, 210)"
            }}
            href="mailto:tvdpatients@gmail.com"
          >
            tvdpatients@gmail.com
          </a>
          <Header
            as="h2"
            style={{
              color: "rgb(6, 61, 99)",
              fontWeight: 700
            }}
          >
            Office Hours
          </Header>
          <List>
            <List.Item>
              <strong style={{ display: "inline-block", width: 58 }}>
                Mon
              </strong>
              9:00 am - 6:00 pm
            </List.Item>
            <List.Item>
              <strong style={{ display: "inline-block", width: 55 }}>
                Tue
              </strong>{" "}
              9:00 am - 6:00 pm
            </List.Item>
            <List.Item>
              <strong style={{ display: "inline-block", width: 55 }}>
                Wed
              </strong>{" "}
              9:00 am - 6:00 pm
            </List.Item>
            <List.Item>
              <strong style={{ display: "inline-block", width: 55 }}>
                Thu
              </strong>{" "}
              9:00 am - 6:00 pm
            </List.Item>
            <List.Item>
              <strong style={{ display: "inline-block", width: 55 }}>
                Fri
              </strong>{" "}
              9:00 am - 6:00 pm
            </List.Item>
            <List.Item>
              <strong style={{ display: "inline-block", width: 55 }}>
                Sat
              </strong>{" "}
              By appointment
            </List.Item>
            <List.Item>
              <strong style={{ display: "inline-block", width: 55 }}>
                Sun
              </strong>{" "}
              Closed
            </List.Item>
          </List>
        </Grid.Column>
        <Grid.Column only="tablet" tablet={6} computer={6}>
          <Image src={OfficeImage} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Page>
);

export default ContactUs;

import React, { Fragment } from "react";
import {
  Card,
  Container,
  Grid,
  Header,
  Image,
  List,
  Segment
} from "semantic-ui-react";
// import Slider from "react-slick";

// const settings = {
//   dots: false,
//   centerMode: true,
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   initialSlide: 0,
//   speed: 300,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// };

const Home = () => (
  <Fragment>
    <Segment style={{ padding: 0, margin: 0, maxHeight: 400, border: "none" }}>
      <Image fluid src={require("../assets/temecula_valley.jpg")} />
      <div
        style={{
          backgroundColor: "rgba(6, 61, 99, 0.35)",
          position: "absolute",
          zIndex: 1,
          height: "100%",
          width: "100%",
          top: 0,
          left: 0
        }}
      />
      <Grid
        columns={2}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          zIndex: 2,
          top: 15,
          left: 15,
          width: "100%",
          height: "100%"
        }}
        padded={false}
        centered
      >
        <Grid.Row centered stretched>
          <Grid.Column
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Image
              style={{ width: 400 }}
              src={require("../assets/logo_trans_white.svg")}
            />
          </Grid.Column>
          <Grid.Column
            only="computer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Card
              style={{
                background:
                  "linear-gradient(-90deg, #063d63, #074168 50%, #063d63)",
                color: "white",
                margin: "0 0 0 15px",
                fontSize: "1.15em",
                boxShadow: "0px 3px 3px 2px rgba(6, 61, 99, 0.15)",
                width: 235,
                padding: "0 6px"
              }}
            >
              <Card.Content style={{ padding: "1em 1em 0 1em" }}>
                <Card.Header
                  style={{
                    color: "inherit",
                    textTransform: "uppercase",
                    fontSize: "1em"
                  }}
                >
                  Office Hours
                </Card.Header>
              </Card.Content>
              <Card.Content>
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
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment
      style={{
        padding: 0,
        margin: 0,
        position: "relative",
        border: "none",
        boxShadow: "none",
        backgroundColor: "#063d63",
        height: 40
      }}
      vertical
      inverted
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          height: "100%",
          width: "100%",
          fontFamily: "Open Sans",
          fontSize: "1.1em"
        }}
      >
        <a
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.google.com/maps/dir//27315+Jefferson+Ave+STE+G2,+Temecula,+CA+92590/@33.5211109,-117.2015588,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x80db7e23edb56767:0xe61832ef47773847!2m2!1d-117.1664536!2d33.5211159!3e0"
        >
          27315 Jefferson Avenue Suite G2 Temecula, CA 92590
        </a>
      </div>
    </Segment>

    <Segment
      style={{
        padding: 0,
        margin: 0,
        position: "relative",
        border: "none",
        boxShadow: "none"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 0,
          top: 0,
          left: 0,
          height: "100%",
          width: "100%"
        }}
      >
        <div
          style={{
            position: "absolute",
            zIndex: 1,
            height: "100%",
            width: "100%",
            top: 0,
            left: 0,
            backgroundImage: `url(${require("../assets/temecula_valley3.jpg")})`,
            backgroundSize: "cover",
            objectFit: "cover"
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            zIndex: 2,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            height: "100%",
            width: "100%"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
              maxWidth: 800,
              padding: "2em 0 5em 0"
            }}
          >
            <Header
              as="h1"
              style={{
                color: "#0b89c7",
                marginTop: 15,
                fontWeight: 300,
                fontFamily: "Oswald",
                borderBottomColor: "#0b89c7",
                height: 45,
                flexShrink: 0,
                textAlign: "center"
              }}
              dividing
            >
              Welcome to Our Practice
            </Header>
            <Container
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.35em",
                marginTop: 15
              }}
              fluid
              text
            >
              <Header
                as="h1"
                style={{
                  color: "#063d63",
                  fontWeight: 700,
                  fontFamily: "Oswald",
                  textAlign: "center",
                  marginBottom: 20
                }}
              >
                Dr. Riku Mukherjee, DDS
              </Header>
              <Image
                style={{ maxWidth: 300 }}
                src={require("../assets/other/our_team.png")}
              />
              <br />
              <p>
                Dr. Riku Mukherjee established Temecula Valley Dentistry in 2019
                when he took over the practice after he and his family decided
                to move to Southern California from the east coast. He is the
                owner and the primary dentist. Dr. Alvina Padua is an associate
                dentist that works at the practice as well. Dr. Mukherjee and
                Dr. Padua are working with patients to provide the very best
                dental care for patients in the Temecula area.
              </p>
              <p>
                Call us today to schedule an appointment or consultation at{" "}
                <strong>+95 1 296 9661</strong>
              </p>
            </Container>
          </div>
        </div>
      </div>
    </Segment>

    <Segment
      inverted
      style={{
        padding: "5em 0em",
        background: "linear-gradient(-90deg, #999, #ccc 50%, #999)",
        height: 550,
        border: "none",
        boxShadow: "none"
      }}
      vertical
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: 980,
          height: 400,
          margin: "0 auto",
          padding: "0 3em"
        }}
      >
        <iframe
          title="Temecula Valley Dentistry Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.3208218426727!2d-117.16677657816761!3d33.52097499520005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db7e23edb56767%3A0xe61832ef47773847!2s27315%20Jefferson%20Ave%20STE%20G2%2C%20Temecula%2C%20CA%2092590!5e0!3m2!1sen!2sus!4v1575231084983!5m2!1sen!2sus"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: "none" }}
          allowFullScreen={false}
        />
      </div>
    </Segment>

    {/*<Segment*/}
    {/*inverted*/}
    {/*style={{*/}
    {/*padding: "5em 0em",*/}
    {/*background: "#063d63",*/}
    {/*height: "auto",*/}
    {/*border: "none",*/}
    {/*boxShadow: "none"*/}
    {/*}}*/}
    {/*vertical*/}
    {/*>*/}
    {/*<div*/}
    {/*style={{*/}
    {/*maxWidth: 980,*/}
    {/*height: 400,*/}
    {/*margin: "0 auto"*/}
    {/*}}*/}
    {/*>*/}
    {/*<Slider*/}
    {/*style={{*/}
    {/*height: "100%",*/}
    {/*width: "100%"*/}
    {/*}}*/}
    {/*{...settings}*/}
    {/*>*/}
    {/*<div style={{ margin: 15 }}>*/}
    {/*<Image*/}
    {/*style={{ margin: 15 }}*/}
    {/*size="large"*/}
    {/*src={require("../assets/other/front_desk.jpg")}*/}
    {/*/>*/}
    {/*</div>*/}
    {/*<div>*/}
    {/*<Image*/}
    {/*style={{ margin: 15 }}*/}
    {/*size="large"*/}
    {/*src={require("../assets/other/front_office.jpg")}*/}
    {/*/>*/}
    {/*</div>*/}
    {/*<div>*/}
    {/*<Image*/}
    {/*style={{ margin: 15 }}*/}
    {/*size="large"*/}
    {/*src={require("../assets/other/lobby.jpg")}*/}
    {/*/>*/}
    {/*</div>*/}
    {/*<div>*/}
    {/*<Image*/}
    {/*style={{ margin: 15 }}*/}
    {/*size="large"*/}
    {/*src={require("../assets/other/chair.jpg")}*/}
    {/*/>*/}
    {/*</div>*/}
    {/*<div>*/}
    {/*<Image*/}
    {/*style={{ margin: 15 }}*/}
    {/*size="large"*/}
    {/*src={require("../assets/other/cleaning_station.jpg")}*/}
    {/*/>*/}
    {/*</div>*/}
    {/*</Slider>*/}
    {/*</div>*/}
    {/*</Segment>*/}
  </Fragment>
);

export default Home;

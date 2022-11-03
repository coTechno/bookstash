import "./Carousel.css";
import Carousel from "react-bootstrap/Carousel";

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="banner d-block w-100"
          src="https://images.unsplash.com/photo-1535905748047-14b2415c77d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGJvb2tzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3
          style={{
            top: "-33px",
            position: "relative",
            fontSize: "calc(2.3rem + .6vw)",
          }}
          >“So many books, so little time.”</h3>
          <p
          style={{
            top: "-100px",
            fontSize: "calc(1.3rem + .6vw)",
          }}>― Frank Zappa</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="banner d-block w-100"
          src="https://images.unsplash.com/photo-1513185041617-8ab03f83d6c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGJvb2tzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3
          style={{
            top: "-33px",
            position: "relative",
            fontSize: "calc(2.3rem + .6vw)",
          }}
          >“There is no friend as loyal as a book.”</h3>
          <p
           style={{
            top: "-40px",
            fontSize: "calc(1.3rem + .6vw)",
          }}
          >― Ernest Hemingway.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="banner d-block w-100"
          src="https://images.unsplash.com/photo-1499257398700-43669759a540?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Ym9va3xlbnwwfDB8MHxibGFja3w%3D&auto=format&fit=crop&w=500&q=60"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3
            style={{
              top: "-16px",
              position: "relative",
              fontSize: "calc(2.3rem + .6vw)",
            }}
          >
            “Books are a uniquely portable magic.”
          </h3>
          <p
           style={{
            top: "-100px",
            fontSize: "calc(1.3rem + .6vw)",
          }}
          >― Stephen King</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;

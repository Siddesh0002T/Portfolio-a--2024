import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Siddhesh More </span>
            from <span className="purple"> Nashik, Maharashtra, India.</span>
            <br />
            I am currently student at Mahavir Polytechnic, Nashik.
            <br />
            I have completed Diploma 2nd Year in Computer Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies And Web Series
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Dedicated to creating impactful digital experiences that inspire and innovate!"{" "}
          </p>
          <footer className="blockquote-footer">Siddhesh More</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

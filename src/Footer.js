import React, { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";

function Footer() {
  const calculateTimeLeft = () => {
    var todaysDate = [0, 0, 0, 0];

    var date = new Date().getDate();
    var year = new Date().getFullYear();
    var month = new Date().getMonth() + 1;
    var then = +new Date(
      `${year}-${month < 10 ? "0" + month : month}-${date < 10 ? "0" + date : date}T23:59:59`
    );

    var now = new Date().getTime();
    console.log(month);

    var difference = then - now;
    let timeLeft = {};

    timeLeft = {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  console.log(timeLeft);

  return (
    <Navbar
      expand="lg"
      fixed="bottom"
      style={{ backgroundColor: "#96C0DF", maxWidth: "auto" }}
    >
      <footer className="mx-auto">
        <div style={{ textAlign: "center", margin: "0" }}>
          <p style={{ color: "#fff", margin: "0" }}>Dropping at Midnight</p>
          <p style={{ backgroundColor: "#fff", color: "#000" }}>
            {timeLeft.hours < 10 ? "0" + timeLeft.hours : timeLeft.hours}:
            {timeLeft.minutes < 10 ? "0" + timeLeft.minutes : timeLeft.minutes}:
            {timeLeft.seconds < 10 ? "0" + timeLeft.seconds : timeLeft.seconds}
          </p>
          <p style={{ fontSize: "5px", margin: "0" }}>Property of Nike</p>
        </div>
      </footer>
    </Navbar>
  );
}

export default Footer;

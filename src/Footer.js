import React, { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";

function Footer() {
  const calculateTimeLeft = () => {
    var date = new Date().getDate();
    var year = new Date().getFullYear();
    var month = new Date().getMonth() + 1;
    var then = +new Date(
      `${year}-${month < 10 ? "0" + month : month}-${
        date < 10 ? "0" + date : date
      }T23:59:59`
    );

    var now = new Date().getTime();
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

  console.log(timeLeft);

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <Navbar
      expand="lg"
      fixed="bottom"
      style={{
        backgroundColor: "#000",
        maxWidth: "2000px",
        padding: "0",
        margin: "auto",
      }}
    >
      <footer className="mx-auto">
        <div style={{ textAlign: "center", margin: "0" }}>
          <p style={{ color: "#fff", margin: "0" }}>Dropping at Midnight</p>
          <p style={{ color: "#fff" }}>
            {Object.values(timeLeft).map((time, idx) => {
              return (
                <span
                  key={idx}
                  style={{
                    backgroundColor: "white",
                    color: "#000",
                    margin: "0px 2px",
                    padding: "3.5px",
                  }}
                >
                  {time < 10 ? "0" + time : time}
                </span>
              );
            })}
          </p>
          <p style={{ fontSize: "5px", margin: "0" }}>Property of Nike</p>
        </div>
      </footer>
    </Navbar>
  );
}

export default Footer;

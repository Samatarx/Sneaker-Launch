import React, { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import "../Styling/Footer.css";

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

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <Navbar expand="lg" fixed="bottom" className="custom-footer">
      <footer className="mx-auto">
        <section className="section-footer">
          <p className="footer-para">Dropping at Midnight</p>
          <p className="footer-para">
            {Object.values(timeLeft).map((time, idx) => {
              return (
                <span className="footer-time" key={idx}>
                  {time < 10 ? "0" + time : time}
                </span>
              );
            })}
          </p>
        </section>
      </footer>
    </Navbar>
  );
}

export default Footer;

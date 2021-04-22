import React, { useState, useEffect } from "react";
import "./Styling/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Preorder from "./Components/Preorder";
import Heritage from "./Components/Heritage";
import Footer from "./Components/Footer";
import Landing from "./Components/Landing";
import MyVerticallyCenteredModal from "./Components/Modal";

function App() {
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setModalShow(true);
    }, 3000);
  }, []);

  return (
    <main>
      <Router>
        <Header />
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <Switch>
          <Route path="/Preorder">
            <Preorder />
          </Route>
          <Route path="/Heritage">
            <Heritage />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </main>
  );
}

export default App;

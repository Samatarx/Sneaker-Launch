import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Preorder from "./Preorder";
import Inspiration from "./Inspiration";
import Footer from "./Footer";
import Landing from "./Landing";
import { Container } from "react-bootstrap";

function App() {
  return (
    <main >
    <Router>
      <Header />
      <Switch>
        <Route path="/preorder">
          <Preorder />
        </Route>
        <Route path="/inspiration">
          <Inspiration />
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

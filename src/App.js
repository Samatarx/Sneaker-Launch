import "./Styling/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Preorder from "./Preorder";
import Heritage from "./Heritage";
import Footer from "./Footer";
import Landing from "./Landing";

function App() {
  return (
    <main style={{ maxWidth: "2000px", margin: "auto" }}>
      <Router>
        <Header />
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

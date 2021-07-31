import classNames from "classnames";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Card, CardLink, CardWithBadge } from "./components/composite-module/card";
import { Media, ReverseMedia, HalfMedia } from "./components/composite-module/media";

import cardModuleCss from "./components/composite-module/card/card.module.css";
import { Table } from "./components/composite-module/table";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/media">Media</Link>
            </li>
            <li>
              <Link to="/card">Card</Link>
            </li>
            <li>
              <Link to="/table">Table</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact>
            Home
          </Route>
          <Route path="/media" exact>
            <Media />
            <ReverseMedia />
            <HalfMedia />
          </Route>
          <Route path="/card" exact>
            <div className={classNames(cardModuleCss["cards"], cardModuleCss["cards--col3"])}>
              <CardLink className={cardModuleCss["cards__item"]} />
              <CardLink className={cardModuleCss["cards__item"]} />
              <CardLink className={cardModuleCss["cards__item"]} />
            </div>
            <br />
            <div className={classNames(cardModuleCss["cards"], cardModuleCss["cards--col4"])}>
              <Card className={cardModuleCss["cards__item"]} />
              <CardWithBadge className={cardModuleCss["cards__item"]} />
              <Card className={cardModuleCss["cards__item"]} />
              <CardWithBadge className={cardModuleCss["cards__item"]} />
            </div>
          </Route>
          <Route path="/table" exact>
            <Table />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

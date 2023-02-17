import Header from "./componets/header";
import Productcomponet from "./componets/productcomponets";
import Productdeetails from "./componets/productsdeetails";
import Productslisting from "./componets/productslisting";
import { BrowserRouter as Router, swtich, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact component={Productslisting}></Route>
        <Route path="/product/:productId" component={Productdeetails}></Route>
        <Route>404 Nor Found!</Route>
      </Router>
    </div>
  );
}

export default App;

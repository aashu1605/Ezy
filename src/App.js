import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Homepage from "./components/Homepage";
import ItemDetails from "./components/ItemDetails";

function App(props) {
    return (
        <div className="App">
            <Router>
                {console.log(props.match)}
                <Route exact path="/" component={Homepage} />
                <Route exact path="/posts/:id" component={ItemDetails} />
            </Router>
        </div>
    );
}

export default App;

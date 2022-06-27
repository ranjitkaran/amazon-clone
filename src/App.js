import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home"; 
import Header from "./Header";
import Login from "./Login";
import Orders from "./Orders";
import { auth } from "./firebase";
import  Checkout from "./Checkout";
import  Payment from "./Payment";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51LATbnSC8aNhqC9ymQmM6h9vnxMXGAXvudPpQ3EMo180zBrvA9c2FTfmdLjFKM0X3AHf9qEP7JNtsOOJVaD2UmFo00m5wQFQsH"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...
  
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);
  
      if (authUser) {
        // the user just logged in / the user was logged in
  
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
return (
  <div className="app">
    <Router>
      <Switch>
       <Route path="/orders">
         <Header />
          <Orders />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/Checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/Payment">
          <Header />
          <Elements stripe={promise}>
          <Payment />
          </Elements>
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  </div>
);
}
export default App;

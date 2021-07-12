import React, { useState } from "react";
import "./App.css";
// Components
import Balance from "./components/Balance";
import IncomeBal from "./components/IncomeBal";
import ExpenseBal from "./components/ExpenseBal";
import Dashboard from "./components/Dashboard";
import InputForm from "./components/InputForm";

const App = () => {

    return (
        <body>
            <h1>SmartMoney</h1>
            <Balance/>
            <IncomeBal/>
            <ExpenseBal/>
            {/* <Dashboard/> */}
            {/* <InputForm/> */}
        </body>
    )
}

export default App;
import react from "react";
import ReactDOM from "react-dom";
import heading from "./heading";
import footer from "./footer";
import note from"./note";
ReactDOM.render(
  <div>
    <heading/>
    <note/>
    <note/>
    <note/>
    <footer/>,
    document.getElementById("root");
)

import React from "react";
import List from "./List";
import Create from "./Todo/create";

import axios from "axios";
axios.defaults.baseURL = 'https://candidate.neversitup.com/todo';
axios.defaults.headers.common['Authorization'] = localStorage.getItem("header");
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

function Main() {
  return (
    <div className="main">
      <List />
      <Create />
    </div>
  );
}

export default Main;

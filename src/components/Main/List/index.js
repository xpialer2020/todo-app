import React, { useState } from "react";
import axios from "axios";
import '../../style.css'
import Edit from "../Todo/edit.js";

axios.defaults.baseURL = 'https://candidate.neversitup.com/todo';
axios.defaults.headers.common['Authorization'] = localStorage.getItem("header");
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

function List() {
  const [todolist, setTodoList] = useState("");
  axios
    .get("/todos/")
    .then(function (response) {
      // handle success
      setTodoList(listItem(response.data));
      // console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

  const listItem = (item) => {
    const list = item.map((i) => (
      <Edit item={i}/>
    ));
    return list;
  };
  return <div className="todo-list">{todolist}</div>;
}

export default List;

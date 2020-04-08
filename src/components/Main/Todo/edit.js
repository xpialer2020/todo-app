import React, { useState } from "react";
import axios from "axios";
import "../../style.css";
import Delete from "../Todo/delete.js";

function Edit(props) {
  const [title, setTitle] = useState(props.item.title);
  const [description, setDescription] = useState(props.item.description);
  //   console.log(props);

  const [showModal, setShowModal] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (title.match(/^[a-zA-Z0-9]+$/) == null) {
      alert("Title empty");
      return false;
    } else if (description.match(/^[a-zA-Z0-9]+$/) == null) {
      alert("Description empty");
      return false;
    } else {
      axios
        .put("/todos/" + props.item._id, {
          title: title,
          description: description,
        })
        .then(function (response) {
          console.log(response);
          setShowModal(false);
        });
    }
  };

  const DateTime = (getDate) => {
    var date = new Date(getDate);
    var dateString = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
      .toISOString()
      .split("T")[0];
    return dateString;
  };

  return (
    <React.Fragment>
      <div className="todo-list-box">
        <Delete item={props.item} />
        <div
          onClick={(e) => {
            setShowModal(true);
          }}
        >
          <div className="todo-list-box-title">{props.item.title}</div>
          <div className="todo-list-box-description">
            {props.item.description}
          </div>
          <div className="todo-list-box-date">
            {DateTime(props.item.updatedAt)}
          </div>
        </div>
      </div>
      {showModal ? (
        <div className="bg">
          <form className="todo-modal" onSubmit={(e) => onSubmit(e)}>
            <label>TITLE</label>
            <br />
            <input
              className="title"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <br />
            <label>DESCRIPTION</label>
            <br />
            <textarea
              className="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></textarea>
            <br />
            <button
              className="btn"
              type="reset"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            <button className="btn" type="submit">
              Edit
            </button>
          </form>
        </div>
      ) : null}
    </React.Fragment>
  );
}

export default Edit;

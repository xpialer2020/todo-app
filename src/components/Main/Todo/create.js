import React, { useState } from "react";
import axios from "axios";
import "../../style.css";

function Create(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
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
        .post("/todos", {
          title: title,
          description: description,
        })
        .then(function (response) {
          console.log(response);
          setShowModal(false);
        });
    }
  };

  return (
    <React.Fragment>
      <div className="crate-todo-list">
        <button
          onClick={(e) => {
            setShowModal(true);
          }}
        >
          Create
        </button>
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
              onClick={() => {
                setTitle("");
                setDescription("");
                setShowModal(false);
              }}
            >
              Cancel
            </button>
            <button className="btn" type="submit">
              Create
            </button>
          </form>
        </div>
      ) : null}
    </React.Fragment>
  );
}

export default Create;

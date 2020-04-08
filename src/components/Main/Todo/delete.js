import React, { useState } from "react";
import axios from "axios";
import "../../style.css";

function Delete(props) {
  const [title] = useState(props.item.title);
  //   console.log(props);

  const [showModal, setShowModal] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    axios.delete("/todos/" + props.item._id).then(function (response) {
      console.log(response);
      setShowModal(false);
    });
  };

  return (
    <React.Fragment>
      <div className="todo-list-delete">
        <button
          className="btn-delete"
          onClick={(e) => {
            setShowModal(true);
          }}
        >
          x
        </button>
      </div>
      {showModal ? (
        <div className="bg">
          <form className="todo-modal" onSubmit={(e) => onSubmit(e)}>
            Want delete {title} ?
            <br />
            <button className="btn" onClick={() => setShowModal(false)}>
              Cancel
            </button>
            <button className="btn" type="submit">
              Confirm
            </button>
          </form>
        </div>
      ) : null}
    </React.Fragment>
  );
}

export default Delete;

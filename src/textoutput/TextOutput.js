import React from "react";
import "./TextOutput.scss";

export default function TextOutput(props) {
  return (
    <div className="TextOutput">
      <ul>
        {props.inputData?.map((item, id) => (
          <li key={id}>
            <h4>{item.name}</h4>
            <h4>{item.number}</h4>
            <h4>{item.email}</h4>
            <h4>{item.country}</h4>
            <h4>{item.sex}</h4>

            <h4
              className="editcontact"
              onClick={() => {
                props.onEditContact(item);
              }}
            >
              <span>&#9998;</span>
            </h4>

            <h4
              className="deletecontact"
              onClick={() => {
                props.deleteContact(item);
              }}
            >
              <span>&#10006;</span>
            </h4>
          </li>
        ))}
      </ul>
    </div>
  );
}

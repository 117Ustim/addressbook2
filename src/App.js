import React, { useState } from "react";
import EnterContact from "./entercontact/EnterContact";
import TextOutput from "./textoutput/TextOutput";

export default function App() {
  const localContacts = JSON.parse(localStorage.getItem("inputData"));
  const [inputData, setInputData] = useState(localContacts || []);
  const [editContact, setEditContact] = useState({
    id: 0,
    sex: "",
    name: "",
    number: "",
    email: "",
    country: "",
  });

  const updateContacts = (updatedContacts) => {
    setInputData(updatedContacts);
    localStorage.setItem("inputData", JSON.stringify(updatedContacts));
  };

  const addContactButton = (sex, name, number, email, country, id) => {
    const searchIndex = inputData.findIndex((item) => item.id === id);

    if (searchIndex !== -1) {
      const updatedContacts = [...inputData];

      updatedContacts.splice(searchIndex, 1, {
        name,
        number,
        sex,
        email,
        country,
        id,
      });
      updateContacts(updatedContacts);

      setEditContact({
        name: "",
        number: "",
        sex: "",
        email: "",
        country: "",
        id: "",
      });
    } else {
      let a = { sex, name, number, email, country, id: inputData.length + 1 };
      let b = [...inputData, a];
      updateContacts(b);
    }
  };

  const deleteContact = (item) => {
    updateContacts(inputData.filter((p) => p !== item));
  };

  const onEditContact = (item) => {
    setEditContact(inputData.find((c) => c.id === item.id));
  };

  return (
    <div className="App">
      <EnterContact
        addContactButton={addContactButton}
        editContact={editContact}
      />
      <TextOutput
        inputData={inputData}
        deleteContact={deleteContact}
        onEditContact={onEditContact}
      />
    </div>
  );
}

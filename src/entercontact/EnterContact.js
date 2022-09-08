import React, { useState, useEffect } from "react";
import "./EnterContact.scss";

export default function EnterContact(props) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [sex, setSex] = useState("");

  useEffect(() => {
    setName(props.editContact?.name);
    setNumber(props.editContact?.number);
    setEmail(props.editContact?.email);
    setCountry(props.editContact?.country);
    setSex(props.editContact?.sex);
  }, [props]);

  const submitForm = () => {
    props.addContactButton(
      sex,
      name,
      number,
      email,
      country,
      props.editContact.id
    );

    setName("");
    setNumber("");
    setEmail("");
    setCountry("");
    setSex("");
  };

  return (
    <div>
      <form method="post">
        <div className="form-wrap">
          <div className="profile">
            <img src="https://html5book.ru/wp-content/uploads/2016/10/profile-image.png" />
            <h1>Регiстрацiя</h1>
          </div>
        </div>

        <div
          className="radio"
          value={sex}
          onChange={(event) => {
            setSex(event.target.value);
          }}
        >
          <span>Стать</span>
          <label>
            <input type="radio" name="sex" value="чоловiча" />
            Чоловiча
            <div className="radio-control male " value={sex}></div>
          </label>
          <label>
            <input type="radio" name="sex" value="жiноча" />
            Жiноча
            <div className="radio-control female"></div>
          </label>
        </div>

        <div className="block-inter">
          <div>
            <label name="name">Призвiще Iмя </label>
            <input
              type="name"
              name="name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div>
            <label name="number">Телефон </label>
            <input
              type="email"
              name="number"
              required
              value={number}
              onChange={(event) => {
                setNumber(event.target.value);
              }}
            />
          </div>
          <div>
            <label name="email">E-mail</label>
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div>
            <label name="country">Країна</label>
            <select
              name="country"
              value={country}
              onChange={(event) => {
                setCountry(event.target.value);
              }}
            >
              <option>Країна проживання</option>
              <option value="Україна">Украiна</option>
              <option value="Англiя">Англiя</option>
              <option value="США">США</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          onClick={() => {
            submitForm();
          }}
        >
          Вiдiслати
        </button>
      </form>
    </div>
  );
}

import { useState } from "react";

export default function Person() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  function handleFirstName(e) {
    setFirstName(e.target.value);
  }
  function handleLastName(e) {
    setLastName(e.target.value);
  }
  return (
    <div>
      <h1>Person</h1>
      <br />
      <Input label={"First Name"} name={firstName} onChange={handleFirstName} />
      <br />
      <br />
      <Input label={"Last Name"} name={lastName} onChange={handleLastName} />
      <br />
      <br />
      <h3>Full Name:</h3>
      <p className="text-xl font-bold">
        {firstName} {lastName}
      </p>
    </div>
  );
}

function Input({ label, name, onChange }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <br />
      <input type="text" value={name} onChange={onChange} />
    </>
  );
}

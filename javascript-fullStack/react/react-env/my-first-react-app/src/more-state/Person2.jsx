import { useState } from "react";

export default function Person2() {
  const [person, setPerson] = useState({ firstName: "", lastName: "" });
  function handleFirstName(e) {
    const newFirstName = { ...person, firstName: e.target.value };
    setPerson(newFirstName);
  }
  function handleLastName(e) {
    const newLastName = { ...person, lastName: e.target.value };
    setPerson(newLastName);
  }

  return (
    <div>
      <h1>Person Object State</h1>
      <div className="flex flex-col gap-2">
        <Input label={"First Name"} onChange={handleFirstName} />
        <Input label={"Last Name"} onChange={handleLastName} />
      </div>
      <br />
      <h3>Full Name:</h3>
      <p className="text-xl font-bold mt-2">
        {person.firstName} {person.lastName}
      </p>
    </div>
  );
}
function Input({ label, name, onChange }) {
  return (
    <>
      <label htmlFor={label}>{name}</label>
      <br />
      <input
        type="text"
        id={label}
        className="border rounded p-2 max-w-xs"
        onChange={onChange}
      />
    </>
  );
}

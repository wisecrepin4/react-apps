import { useState } from "react";
export default function Change() {
  const [name, setName] = useState("Guest");
  const changeName = (newName) => {
    setName(newName);
  };
  const [status, setStatus] = useState(false);
  const changeStatus = () => {
    setStatus(!status);
  };

  return (
    <>
      <h2>User your name is {name}</h2>
      <button onClick={() => changeName("Crepin")}>change Name </button>

      <h2>Is he employed?:{status ? "yes" : "No"}</h2>
      <button onClick={() => changeStatus()}>Change Status</button>
    </>
  );
}

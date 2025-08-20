import { useState } from "react";
export default function Carlist() {
  const [carList, setCarList] = useState([]);
  const [date, setDate] = useState(new Date().getFullYear());
  const [make, setMake] = useState("");
  const [company, setCompany] = useState("");

  const handleCarAdd = () => {
    setCarList([...carList, { date: date, make: make, company: company }]);
    setDate(new Date().getFullYear());
    setMake("");
    setCompany("");
    // const newCar = {
    //   date: date,
    //   make: make,
    //   company: company,
    // };
    // setCarList([...carList, newCar]);
  };

  const handleCarRemove = (index) => {
    setCarList(carList.filter((_, i) => i !== index));
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleMakeChange = (e) => {
    setMake(e.target.value);
  };
  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };
  return (
    <>
      <h1>List of Car Objects</h1>
      <ul>
        {carList.map((car, index) => (
          <li key={index} onClick={() => handleCarRemove(index)}>
            {car.date} {car.make} {car.company}
          </li>
        ))}
      </ul>
      <input type="number" value={date} onChange={handleDateChange} />
      <input type="text" value={make} onChange={handleMakeChange} />
      <input type="text" value={company} onChange={handleCompanyChange} />
      <br />
      <button onClick={handleCarAdd}>Add Car</button>
    </>
  );
}

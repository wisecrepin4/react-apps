import React, { useState } from "react";
export default function Carmake() {
  const [car, setCar] = useState({
    year: 2024,
    make: "urus",
    company: "lamborghini",
  });
  const handleYearChange = (e) => {
    setCar((c) => ({ ...c, year: e.target.value }));
  };
  const handleMakeChange = (e) => {
    setCar((c) => ({ ...c, make: e.target.value }));
  };
  const handleCompanyChange = (e) => {
    setCar((c) => ({ ...c, company: e.target.value }));
  };
  return (
    <>
      <p>
        use your favorite Car is: {car.year} {car.make} {car.company}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} />
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <input type="text" value={car.company} onChange={handleCompanyChange} />
    </>
  );
}

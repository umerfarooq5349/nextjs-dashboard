import React from "react";

function Customers() {
  return (
    <div>
      Customers
      <p className="text-red-500 bg-black">{process.env.PGDATABASE}</p>
    </div>
  );
}

export default Customers;

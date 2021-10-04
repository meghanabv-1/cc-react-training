import React from "react";
import Car from "./Car";

const car = {
  engine: "Flat",
  gearBox: "Automated",
  type: "Auto",
  spareWheel: "blowout",
  seatingCapacity: "7",
  bhp: "98.6%",
  torque: "drive shaft ",
};
const ignoredProperties = ["spareWheel", "seatingCapacity"];
console.log(ignoredProperties);

const CarParts = (props) => {
  return (
    <Car
      engine={car.engine}
      gearBox={car.gearBox}
      type={car.type}
      spareWheel={car.spareWheel}
      seatingCapacity={car.seatingCapacity}
      ignoredProperties={ignoredProperties}
      bhp={car.bhp}
      torque={car.torque}
    />
  );
};

export default CarParts;

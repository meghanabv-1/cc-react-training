const Car = (props) => {
  return (
    <div>
      <h1>
        <u>Parts of Car</u>
      </h1>
      <ol>
        <li>
          <b>Engine: </b> {props.engine}
        </li>
        <li>
          <b>GearBox: </b>
          {props.gearBox}
        </li>
        <li>
          <b>Type: </b>
          {props.type}
        </li>
        <li>
          <b>BHP: </b>
          {props.bhp}
        </li>
        <li>
          <b>Torque: </b>
          {props.torque}
        </li>
      </ol>
    </div>
  );
};

Car.defaultProps = {
  engine: "engine",
  gearBox: "gearBox",
};

export default Car;

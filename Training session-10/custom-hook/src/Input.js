function Input(props) {
  return (
    <>
      <label>{props.name}</label>
      <input type={props.type} name={props.name} value={props.value} />
    </>
  );
}

export default Input;

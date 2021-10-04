import { useState } from "react";

const initialState = {
    name: '',
    email: '',
    phone: ''
}
const UserForm = () => {
    const [input, setInput] = useState(initialState);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(input);
    }

    const handleInput = (event) => {
        const {name, value} = event.target
        const updateInput = {...input, [name]: value}
        setInput(updateInput)
    }

    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit} autoComplete="off">
                <div>
                    <label>Name: </label>
                    <input type="text" name="name" onChange={handleInput} minLength={3}/>
                </div>
                <div>
                    <label>Email: <input type="email" name="email" onChange={handleInput}/></label>
                </div>
                <div>
                    <label>Phone: <input type="tel" name="phone" onChange={handleInput} minLength={10}/></label>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>

            <div>
                <p>Name: {input.name}</p>
                <p>Email: {input.email}</p>
                <p>Phone: {input.phone}</p>
            </div>
        </div>
    )
}

export default UserForm;
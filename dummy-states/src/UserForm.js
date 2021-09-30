import {useState} from 'react';


const initialState = {
    phone: '',
    pack: ''
}
function UserForm (){
    const [input, setInput] = useState(initialState);

    const validatePhone = (inputtxt) => {
        const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        console.log(inputtxt.match(regex))
        if(inputtxt.match(regex)) {
            return true;
        } else {
            return false;
        }
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(input);
        const {phone} = input;
        const validPhone = validatePhone(phone);
        if (!validPhone) {
            alert('Enter valid phone number')
        }
        alert(input.pack + input.phone)
    }

    
    const handleInput = (event) => {
        const {name, value} = event.target
        const updateInput = {...input, [name]: value}
        setInput(updateInput)
        
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div>
              <label>Phone number: <input type="tel" name="phone" onChange={handleInput} minLength={10}/></label>
            </div>
            <div>
            <label>Has Data Pack:<input type = "radio" name = "pack" value = "yes" onChange={handleInput} />Yes
            <input type = "radio" name = "pack" value = "no" onChange={handleInput} />No
            </label>
            </div>
            
            <div>
            <button type="submit">Submit</button>
            </div>
            </form>

            <div>
                <p>Phone number:{input.phone}</p>
                <p>Has Data Pack: {input.pack}</p>
            </div>
        </div>
    )
}

export default UserForm;
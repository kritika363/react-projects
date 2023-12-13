import { useState } from "react";
import Button from "../Button";
import { MdMessage, MdCall } from "react-icons/md";
const ContactForm = () => {
    const [name, setName] = useState('kritika');
    const [email, setEmail] = useState('k@gmail.com');
    const [number, setNUmber] = useState('9090909090');
    const [location, setLocation] = useState('himachal');
    const [message, setMessage] = useState('testing');

    const onSubmit = (Event) => {
        Event.preventDefault();

        setName(Event.target[0].value);
        setEmail(Event.target[1].value);
        setNUmber(Event.target[2].value);
        setLocation(Event.target[3].value);
        setMessage(Event.target[4].value);

      
    }
    const callAcion = () => {
        console.log('hello call me on 9999999999')
    }
    return(
        <div className="Contact_form">
            <div className="btns">
               <Button onClick={callAcion} text = "call us" icon={ <MdMessage fontSize="25px" marginRight="5px"/> }/>
               <Button text = "contact us" icon={ <MdCall fontSize="25px" marginRight="5px"/> }/>
            </div>
            <Button 
             isOutline = {true}
            text = "Email Us"/>
            <div className="contactscetion">
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <lable>Full Name</lable>
                    <input type="text" name="name"/>
                </div>
                <div className="form-control">
                    <lable>Email</lable>
                    <input type="email" name="email"/>
                </div>
                <div className="form-control">
                    <lable>Phone Number</lable>
                    <input type="text" name="number"/>
                </div>
                <div className="form-control">
                    <lable>Location</lable>
                    <input type="text" name="location"/>
                </div>
                <div className="form-control">
                    <lable>Message</lable>
                    <textarea rows="4" name="message"/>
                </div>
                <button >Submit</button>
                <div>
                    {
                        name + " " + email + " " + number + " " + location + " " +message + ""
                    }
                </div>
            </form>
            <img alt="png" src="./././operator-work_118813-7250.jpg"/>
            </div>
            
        </div>
    )
}
export default ContactForm;
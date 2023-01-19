import {Component} from "react"
import NavBar from '../NavBar'
import FooterPage from "../FooterPage"
import "./index.css"

class Contactus extends Component{
    render(){
        return(
            <>
            <NavBar/>
            <div className="Contact_Page">
                <h1 className="contact_heading">Contact Form</h1>
                <form className="form">
                    <div className="name_card">
                    <div className="firstName_card">
                        <label htmlFor="firstName" className="firstName">First Name</label>
                        <input id = "firstName" className="firstNameInput" type="text"/>
                    </div>
                    <div className="LastName_card firstName_card">
                        <label htmlFor="LastNameInput" className="firstName">Last Name</label>
                        <input id = "LastNameInput" className="LastNameInput"  type="text"/>
                    </div>
                    </div>
                    <label htmlFor="Email" className="email">Email</label>
                    <input id = "Email" className="emailInput"/>
                    <label htmlFor="Query"  className="email">What can we help you with?</label>
                    <input id = "Query"  className="emailInput"/>
                    <button type="submit" className="submit_btn">Submit</button>
                </form>
                <FooterPage/>
                </div>
            </>

        )
    }
}

export default Contactus
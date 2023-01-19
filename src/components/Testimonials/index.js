import {Component} from "react"
import NavBar from '../NavBar'
import FooterPage from "../FooterPage"
import "./index.css"

class Testimonials extends Component{
    render(){
        return(
            <div className="TestimonialPage">
            <NavBar/>
            <center className="Testimonials">Testimonials Page</center>
            <FooterPage className="FooterPage"/>
            </div>

        )
    }
}

export default Testimonials
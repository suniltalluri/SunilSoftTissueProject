import {Component} from "react"
import { FaFacebookSquare } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { FiYoutube } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import "./index.css"

class FooterPage extends Component{
    render(){
        return(
            <div className="footerPage">
                <p className="CopyRIght">@copyright SOFTICLOUD</p>
                <div className="socialMediaCard">
                    <h className="Follow_us_heading">Follow Us</h>
                    <div className="socialAppsCard">
                    <FaFacebookSquare className="faceBook"/>
                    <FiTwitter className="FiTwitter"/>
                    <FiYoutube className="FiYoutube"/>
                    <FiInstagram className="FiInstagram"/>
                    </div>
                </div>
                    <h1 className="Company_name">Developed By - PRODIGIT</h1>
            </div>
        )
    }
}

export default FooterPage
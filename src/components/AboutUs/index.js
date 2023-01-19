import { Component } from "react";
import "./index.css"
import NavBar from '../NavBar'
import FooterPage from "../FooterPage"
class AboutUs extends Component {
  render() {
    return (
      <div className="About_page">
        <NavBar />
        <div className="about_card">
        <img
          src="https://thumbs.dreamstime.com/b/two-elderly-men-stand-near-one-pensioner-greeting-raised-his-hand-other-senior-standing-akimbo-pose-illustration-two-138633974.jpg"
          alt="About_img"
          className="About_img"
        />
        <div className="About_desc_card">
          {/* <hr className="hori_line"/> */}
          <h1 className="About_heading">We make best tissues</h1>
          <p className="About_desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
      <FooterPage/>
      </div>
    );
  }
}

export default AboutUs;

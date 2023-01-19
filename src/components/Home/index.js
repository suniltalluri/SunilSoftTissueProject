import {Component} from 'react'
import NavBar from '../NavBar'
import FooterPage from "../FooterPage"
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className='home_page'>
        <NavBar />
        <div className="Landing_container">
          <div className="Landing_text_card">
            <h3 className="Home_Heading">Top deals on Tissues</h3>
            <h1 className="Home_Discount">Get Upto 40% Off </h1>
            <p className="Home_desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <img
            src="https://4.imimg.com/data4/HP/PF/MY-1509567/tissue-box-500x500.jpg"
            alt="Home_img"
            className="Home_img"
          />
        </div>
        <FooterPage/>
      </div>
    )
  }
}

export default Home

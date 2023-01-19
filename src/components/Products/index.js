import { Component } from "react";
import NavBar from "../NavBar";
import FooterPage from "../FooterPage"
import "./index.css";
class Products extends Component {
  render() {
    return (
      <div>
        <NavBar className="nav_bar"/>
        <div className="product_container">
          <h1 className="Producat_heading">Our Awesome tissues</h1>
          <ul className="product_list">
            <div className="product_card">
              <img
                src="https://img.freepik.com/premium-psd/facial-tissue-box-packaging-mockup_439185-7559.jpg?w=2000"
                alt="product_img"
                className="product_img"
              />
              <h1 className="product_name">Single color Single Embossing</h1>
              <div className="product_rating_card">
                <p className="product_rating">4.6</p>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/003/355/389/original/five-5-star-rank-sign-illustration-free-vector.jpg"
                  alt="product_rating"
                  className="product_ratting_star"
                />
              </div>
                <p className="product-desc">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since{" "}
                </p>
            </div>
            <div className="product_card">
              <img
                src="https://img.freepik.com/premium-psd/facial-tissue-box-packaging-mockup_439185-7559.jpg?w=2000"
                alt="product_img"
                className="product_img"
              />
              <h1 className="product_name">Single color Single Embossing</h1>
              <div className="product_rating_card">
                <p className="product_rating">4.6</p>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/003/355/389/original/five-5-star-rank-sign-illustration-free-vector.jpg"
                  alt="product_rating"
                  className="product_ratting_star"
                />
              </div>
                <p className="product-desc">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since{" "}
                </p>
            </div>
            <div className="product_card">
              <img
                src="https://img.freepik.com/premium-psd/facial-tissue-box-packaging-mockup_439185-7559.jpg?w=2000"
                alt="product_img"
                className="product_img"
              />
              <h1 className="product_name">Single color Double Embossing</h1>
              <div className="product_rating_card">
                <p className="product_rating">4.6</p>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/003/355/389/original/five-5-star-rank-sign-illustration-free-vector.jpg"
                  alt="product_rating"
                  className="product_ratting_star"
                />
              </div>
                <p className="product-desc">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since{" "}
                </p>
            </div>
          </ul>
        </div>
        <FooterPage/>
      </div>
    );
  }
}

export default Products;

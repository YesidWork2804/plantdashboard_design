import React from "react";
import "./Listing.css";

//imported Images =========>
import img from "../../../Assets/image(1).png";
import img2 from "../../../Assets/image(2).png";
import img3 from "../../../Assets/image(3).png";
import user1 from "../../../Assets/ueser(1).jpg";
import user2 from "../../../Assets/user(4).jpg";
import user3 from "../../../Assets/user(5).jpg";
import user4 from "../../../Assets/user(6).jpg";

//imported Icons =========>
import { AiFillHeart } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

const Listing = () => {
  return (
    <div className="lisitingSection">
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="Image Name1" />
          <h3>Annual Vince</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img2} alt="Image Name2" />
          <h3>Cofee Plant</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img3} alt="Image Name3" />
          <h3>Button Fern</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="Image Name4" />
          <h3>Annual Vince</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user1} alt="User Image1" />
              <img src={user3} alt="User Image2" />
              <img src={user4} alt="User Image3" />
              <img src={user2} alt="User Image4" />
            </div>

            <div className="cardText">
              <span>
                14.556 Plant sold <br />
                <small>
                  21 Sellers
                  <span className="date"> 7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="feacturedSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user2} alt="User Image1" />
              <img src={user3} alt="User Image2" />
              <img src={user4} alt="User Image3" />
              <img src={user1} alt="User Image4" />
            </div>

            <div className="cardText">
              <span>
                27.556 Plant sold <br />
                <small>
                  21 Sellers
                  <span className="date"> 19 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;

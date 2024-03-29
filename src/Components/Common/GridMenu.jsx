import React from "react";
import { Link } from "react-router-dom";
import "./GridMenu.css";
//import SVGIcon from "../Icons/Icons";

const GridMenu = () => {
  return (
    <div className="Container">
       <div className="Block">
        <p className="Block-text">
          <Link to="/account">Account</Link>
        </p>
      </div>
      <div className="Block">
        <p className="Block-text">
          <Link to="/billing">Billing</Link>
        </p>
      </div>
      <div className="Block">
        <p className="Block-text">
          <Link to="/order_status">Order status</Link>
        </p>
      </div>
      <div className="Block">
        <p className="Block-text">
          <Link to="/services">Services</Link>
        </p>
      </div>
      <div className="Block">
         {/* <div className="Icon">
           <SVGIcon name="envelope" width={100} />
         </div> */}
        <p className="Block-text">
          <Link to="/contact_us">Contact Us & Feedback</Link>
        </p>
      </div>
    </div>
  );
}

export default GridMenu;

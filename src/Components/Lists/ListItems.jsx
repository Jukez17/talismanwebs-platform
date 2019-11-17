import React from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PaymentIcon from "@material-ui/icons/Payment";
import ListAltIcon from "@material-ui/icons/ListAlt";
import RoomServiceIcon from "@material-ui/icons/RoomService";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import './ListItems.css';

export const mainListItems = (
  <div>
    <Link className="Link-text" to="/dashboard">
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    </Link>
    <Link className="Link-text" to="/account">
      <ListItem button>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Profile Account" />
      </ListItem>
    </Link>
    <Link className="Link-text" to="/order_status">
      <ListItem button>
        <ListItemIcon>
          <ListAltIcon />
        </ListItemIcon>
        <ListItemText primary="Orders Status" />
      </ListItem>
    </Link>
    <Link className="Link-text" to="/billing">
      <ListItem button>
        <ListItemIcon>
          <PaymentIcon />
        </ListItemIcon>
        <ListItemText primary="Billing" />
      </ListItem>
    </Link>
    <Link className="Link-text" to="/services">
      <ListItem button>
        <ListItemIcon>
          <RoomServiceIcon />
        </ListItemIcon>
        <ListItemText primary="Services" />
      </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Reach Us</ListSubheader>
    <Link className="Link-text" to="/contact_us">
      <ListItem button>
        <ListItemIcon>
          <ContactSupportIcon />
        </ListItemIcon>
        <ListItemText primary="Contact Us" />
      </ListItem>
    </Link>
  </div>
);

export const thirdListItems = (
  <div>
    <ListSubheader inset>Social media</ListSubheader>
    <a className="Link-text" href="https://www.facebook.com/TalismanWebs/">
      <ListItem button>
        <ListItemIcon>
          <FacebookIcon />
        </ListItemIcon>
        <ListItemText primary="Facebook" />
      </ListItem>
    </a>
    <a className="Link-text" href="https://www.instagram.com/talismanwebs/">
      <ListItem button>
        <ListItemIcon>
          <InstagramIcon />
        </ListItemIcon>
        <ListItemText primary="Instagram" />
      </ListItem>
    </a>
  </div>
);

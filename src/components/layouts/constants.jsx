import { Link } from "react-router-dom";
import { Button } from "antd";

export const MENU_ITEM = [
  {
    label: <Link to="/home">home</Link>,
    key: "/home",
  },
  {
    label: <Link to="/form">Form</Link>,
    key: "/form",
  },
  {
    label: <Link to="/portfolio">Portfolio</Link>,
    key: "/portfolio",
  },
  {
    label: <Link to="/create-product">Create Product</Link>,
    key: "/create-product",
  },
  {
    label: <Link to="/crud">CRUD</Link>,
    key: "/crud",
  },
  {
    label: <Link to="/swiper">Swiper</Link>,
    key: "/swiper",
  },
  {
    label: <Link to="/portfolio">Portfolio</Link>,
    key: "/portfolio",
  },
  {
    label: (
      <Link to="/">
        <Button
          type="primary"
          onClick={() => {
            localStorage.removeItem("token");
          }}
          danger
        >
          Logout
        </Button>
      </Link>
    ),
    key: "3",
  },
];

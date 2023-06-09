import React from "react";

import "./homePage.css";
import "../aboutMe/aboutMe.css";
import { Button, Space } from "antd";
import {
  CancelButton,
  OkayButton,
} from "../../components/buttonComponent/ButtonComponent";

const HomePage = () => {
  const user = {
    name: "Dengklek",
    avatarURL:
      "https://akcdn.detik.net.id/visual/2019/05/10/7ac541ac-2c34-46b3-a999-70d2251648ea_43.jpeg?w=900&q=90",
    aboutMe: "lorem ipsum",
    imageLocal: reactLogo,
  };

  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="homepage">Home Page</div>
      <div className="about-me">About Me Page</div>

      <div className="card">
        {/* <img src={DesignerImage} alt="" /> */}
        <div>{user.name}</div>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <br />
      <br />

     
      <br />
      <Space wrap>
        <Button type="primary">Submit</Button>
        <CancelButton text="Cancel" />
      </Space>
    </div>
  );
};

export default HomePage;

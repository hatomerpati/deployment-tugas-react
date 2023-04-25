import React, { useState, } from "react";
import { ButtonComponent } from "../../components/buttonComponent/ButtonComponent";
import "../homePage/homePage.css";
import "./aboutMe.css";

import { useNavigate, useParams } from "react-router-dom";
import { useGetUsers } from "./Hooks/useUsersData";
import LoadingComponent from "../../components/loadingComponent/loadingComponent";
import { useEffect } from "react";
import { Card } from "antd";

const AboutMe = () => {
  const isLogedIn = true;
  const numbers = [1, 2, 3, 4, 5];
  const { id } = useParams();
  
  const [isLoadingUsersData, usersData, getUsersData] = useGetUsers();
  console.log([{usersData}])

  useEffect(() => {
    getUsersData();
  }, []);

return (
    <div>
     <h1>About Me</h1>
  { isLoadingUsersData ? <LoadingComponent/> : usersData?.map ((user) => 
    <Card title={user.firstName + lastName} key={user.id} style={{
      width: "500px",
    }}  >
      <div>{user.Hobby}</div>
      <div>{user.Age}</div>

    </Card>
  
  ) };
 </div>
 
       
     
    
  );
};

export default AboutMe;

import React from "react";
import CapacityBuilding from "./CapacityBuilding";
import Footer from "../Footer";
import "./Interns.css";
import Dlearn from "../Interns/Dlearn";
import Optics from "../Interns/Optics";
import AppDevelopment from "../Interns/AppDevelopment" 
import DataScience from "../Interns/DataSceince";
import CompVision from "../Interns/CompVision"

function Interns() {
  return (
    <>
      <div className="interns-page">
        <CapacityBuilding />
      </div>

      <div className=" flex justify-center">
      <h1 className="text-2xl font-semibold  title text-center">
        SPRING 2022 INTERNS
      </h1>
        </div>

      <Dlearn/>
      <Optics/>
      <AppDevelopment/>
      <DataScience/>
      <CompVision/>
      <Footer />
    </>
  );
}

export default Interns;

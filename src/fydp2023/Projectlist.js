import "../fydp2023/details.css";
import { ReactDOM } from "react-dom";
import {Link} from "react-router-dom";
const Projectlist = () => {
  return (
    <>
      <div class="-screen flex flex-row gap-0 lg:gap-[10rem] justify-center items-center mx-5  mt-6">
        <div class="h-[4px] w-[8rem] md:w-[30em] bg-[#162E45]"></div>
        <p class="text-[20px] md:text-[30px] font-['Montserrat'] text-center font-extrabold mx-auto w-[20rem] text-[#162E45] md:w-[12rem]">
          FYDP 2023
        </p>
        <div class="h-[4px] w-[8rem] md:w-[30rem] bg-[#162E45]"></div>
      </div>
      <div className="flex flex-col mx-[4.25rem]  gap-2 px-5 text-[#1b354e] font-['Montserrat'] py-5 pb-5 mb-[8rem] mt-5 border-[#061A2D]">
        <div className="text-[29px] font-semibold font-['Montserrat'] text-[#061A2]">
          PROJECTS LIST
        </div>
        <div>
          <li className="text-[#7D7D7D]">
            <a href="#project1" className="text-[#7D7D7D] hover:text-[#00B4E8] hover:cursor-pointer">
              {" "}
              Revolutionizing Quality Control in Automotive Manufacturing:
              Computer Vision Inspection for Precision Component Defect
              Detection
            </a>
          </li>
        </div>
        <div>
          <li className="text-[#7D7D7D]">
            <a href="#project2" className="text-[#7D7D7D]  hover:text-[#00B4E8] hover:cursor-pointer">
              {" "}
              Predictive Maintenance Solution for Industrial Motors
            </a>
          </li>
        </div>
        <div>
          <li className="text-[#7D7D7D]">
            <a href="#project3" className="text-[#7D7D7D]  hover:text-[#00B4E8] hover:cursor-pointer">
              {" "}
              Urdu to Braille: Bridging Literacy and Access for the Blind
            </a>
          </li>
        </div>
        <div>
          <li className="text-[#7D7D7D]">
            <a href="#project4" className="text-[#7D7D7D]  hover:text-[#00B4E8] hover:cursor-pointer">
              DeepWriter: Enhancing Integrity in Industrial Handwritten Document
              Recognition
            </a>
          </li>
        </div>
        <div>
          <li className="text-[#7D7D7D]">
            <a href="#project5" className="text-[#7D7D7D]  hover:text-[#00B4E8] hover:cursor-pointer">
              Deep learning-based Voice Cloning for Local Languages with a Focus
              on Urdu
            </a>
          </li>
        </div>
        <div>
          <li className="text-[#7D7D7D]">
            <a href="#project6" className="text-[#7D7D7D]  hover:text-[#00B4E8] hover:cursor-pointer">
              Automated Number Plate Recognition For Intelligent Transportation
              System
            </a>
          </li>
        </div>
      </div>
    </>
  );
};
export default Projectlist;

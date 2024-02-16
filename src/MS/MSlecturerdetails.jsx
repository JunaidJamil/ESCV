import React from "react";

const MSlecturerdetails = (props) => {
  const { id, images, name, batch, department, expertise, overview } = props;
  const className= id === 1 ? " ml-[1rem]" : "";

  return (
    <div
      className={`flex flex-col md:flex-row gap-[5rem] px-10 py-10 pb-5 border-black border-t border-b`} style={{ fontFamily: "Montserrat" }}>
      <div className={`${className} flex items-center justify-center `}>
        <img className="w-[15rem] " src={images} />
      </div>
      <div className="flex flex-col font-['Montserrat']">
        <div className="text-[24px]">
          <span className="font-bold  text-[#162E45] underline">{name}</span>
        </div>
        <br />
        <div className="text-[16px]">
          <span className="text-[#162E45] font-bold ">Batch: </span>
          <span className="text-[#162E45] text-[16px]">{batch}</span>
        </div>
        <div className="text-[16px]">
          <span className="text-[#162E45] font-bold ">
            Department:
          </span>
          <span className="text-[#162E45] text-[16px]">{department}</span>
        </div><br />
        <div className="text-[16px]">
          <span className="text-[#162E45] font-bold ">
            Expertise: <br />
          </span>
          <span className="text-[#162E45] text-[16px]">{expertise}</span>
        </div>
        <div className="text-[16px]">
          <span className="text-[#162E45] font-bold ">
            Overview: <br />
          </span>
          <span className="text-[#162E45] text-[16px]">{overview}</span>
        </div>
      </div>
    </div>
  );
};

export default MSlecturerdetails;

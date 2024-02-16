import React from "react";

const Lecturerdetails = (props) => {
  const { images, name, researcharea, overview, contact } = props;
  return (
    <div className="flex flex-col md:flex-row gap-[5rem] px-10 py-10 pb-5 border-black border-t border-b" style={{fontFamily: "Montserrat"}}>
      <div className="flex items-center justify-center m-auto">
        <img className="w-[15rem] " src={images} />
      </div>
      <div className="flex flex-col font-['Montserrat']">
        <div className="text-[20px]">
          <span className="font-bold  text-[#162E45]">{name}</span>
          <span className=" text-[#162E45]  font-[400]">,<i> Lecturer</i></span>
        </div>
        <br />
        <div className="text-[16px]">
          <span className="text-[#162E45] font-bold ">
            Research Area:
            <br />{" "}
          </span>
          <span className="text-[#162E45] text-[16px]">{researcharea}</span>
        </div>
        <br />
        <div className="text-[16px]">
          <span className="text-[#162E45] font-bold ">
            Overview: <br />
          </span>
          <span className="text-[#162E45] text-[16px]">{overview}</span>
        </div>
        <div className="text-[16px]">
          <br />
          <span className="text-[#162E45] font-bold ">
            Contact: <br />
          </span>
        </div>
        <div className="  p-[10px]">
          {
            contact.map((item) => (
              <div key={contact.id} className="flex flex-row gap-[6rem] text-[#162E45]">
                <div className="gap-5"><i class='bx bxs-phone'></i> {item.phone}</div>
                <div><i class='bx bxs-envelope'></i> {item.email}</div>
                
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Lecturerdetails;

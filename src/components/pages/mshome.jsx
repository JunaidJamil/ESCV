import MSdetailscontainer from "../../MS/MSdetailscontainer";
import Lecturerdetails from "../../PHD/Lecturerdetails";
import PhdDetailsContainer from "../../PHD/Phd-details-container";
import MSlecturerdetails from "../../MS/MSlecturerdetails";

const phdlecturers = [
    {
        id: 0,
        images:"./Assests/image 85.png",
        name: "Sharjeel Javed",
        batch : "2022",
        department: "CISE",
        expertise:"  AI Accelerators, FPGA, Approximate Computing",
        overview:"Sharjeel Javed is a versatile Electrical Engineer with 6 years of experience in space communication and embedded system design, specializing in FPGA and DSP architectures. Proficient in Verilog, VHDL, C/C++, Python, and Matlab, he’s skilled in tools like Vivado, Quartus, and Cadence. With a deep understanding of embedded interfaces and applications, he constantly explore new technologies, utilizing tools ranging from oscilloscopes to emulators. HIs strong project management background, system-level knowledge, and effective English communication makes him a valuable asset. ",
       
    },
    {
        id: 1,
        images:"./Assests/image 86.png",
        name: "Rafay Mustafa",
        batch:"2020-21",
        department:"Mechanical Engineering (Mechatronics)",
        expertise:"Development & Performance Analysis of Writer Recognition Model using Computer Vision Techniques",
        overview:"--"
    }
]
    
const MSHome = () => {
    return (
        <MSdetailscontainer>
             {phdlecturers.map((lecturer) => (
                <MSlecturerdetails key={lecturer.id} id={lecturer.id} images={lecturer.images} name={lecturer.name} batch={lecturer.batch} department={lecturer.department} expertise={lecturer.expertise} overview={lecturer.overview} />
            ))}
        </MSdetailscontainer>
    )
}

export default MSHome;
import Lecturerdetails from "../../PHD/Lecturerdetails";
import PhdDetailsContainer from "../../PHD/Phd-details-container";
const phdlecturers = [
    {
        id: 0,
        images:"./Assests/rectangle 229.png",
        name: "Fauzia Yasir",
        researcharea: "Enhancing Urdu OCR Performance on FPGA Devices through Model Optimization and Resource Mapping Techniques",
        overview: "This research will mainly focus on the efficient implementation of computationally expensive DL models on FPGA for OCR applications. It will target reduced power consumption, memory requirements, cost, and latency, while increasing privacy, reliability, and accessibility through real-time processing of natural language data. The study will explore trade-offs between resource utilization, performance, accuracy, and network architecture and optimize hardware resources for low-latency applications. The results of this research could contribute to the development of OCR systems for low-resource languages and other real-time natural language processing applications.",
        contact: [
            {
                id: 0,
               
                phone:"+92 300 7002560",
                email:"fyasir@cloud.neduet.edu.pk"
            }           
        ]
    },
    {
        id: 1,
        images:"./Assests/rectangle 32.png",
        name: "Fakhra Aftab",
        researcharea: "Deep Learning Accelerators for Real-Time Product Quality Inspection in the Manufacturing Industry",
        overview: "This research will mainly focus on the efficient implementation of computationally expensive DL models on FPGA for OCR applications. It will target reduced power consumption, memory requirements, cost, and latency, while increasing privacy, reliability, and accessibility through real-time processing of natural language data. The study will explore trade-offs between resource utilization, performance, accuracy, and network architecture and optimize hardware resources for low-latency applications. The results of this research could contribute to the development of OCR systems for low-resource languages and other real-time natural language processing applications.",
        contact: [
            {
                id: 0,             
                phone:"+92 300 2071866",
                email:"fakhraaftab@neduet.edu.pk"
            }           
        ]
    },
    {
        id: 2,
        images:"./Assests/rectangle 229@2x.png",
        name: "Mehwish Raza",
        researcharea: "Device level Approximate Computing for energy efficient Deep Neural Networks on FPGAs",
        overview: "The primary objective of this Ph.D. research project is to develop energy-efficient approximate Deep Neural Networks (DNNs) specifically optimized for Field-Programmable Gate Arrays (FPGAs). These FPGA-accelerated DNNs are designed to cater to the unique requirements of embedded edge systems, characterized by their strict power constraints and limited computational resources. In a world increasingly reliant on edge computing, the demand for efficient and compact neural networks is paramount. This research delves into the realm of approximation techniques, seeking to strike a delicate balance between computational accuracy and energy efficiency. By leveraging the inherent reconfigurability of FPGAs, this work aims to harness the full potential of these hardware platforms while minimizing power consumption. The outcomes of this Ph.D. research hold great promise for a wide range of applications, from IoT devices to autonomous systems, where energy efficiency and real-time processing are critical. The development of energy-efficient approximate DNNs on FPGA promises to usher in a new era of high-performance, low-power edge computing, unlocking innovative possibilities in various domains.",
        contact: [
            {
                id: 0,
                phone:"+92 334 3401842",
                email:"mehwishraza@neduet.edu.pk"
            }           
        ]
    },
]
const PhdHome = () => {
    return (
        <PhdDetailsContainer>
          
             {phdlecturers.map((lecturer) => (
                <Lecturerdetails key={lecturer.id} images={lecturer.images} name={lecturer.name} researcharea={lecturer.researcharea} overview={lecturer.overview} contact={lecturer.contact} />
            ))}
        </PhdDetailsContainer>
    )
}

export default PhdHome;
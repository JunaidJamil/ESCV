import style from "./Project2.module.css";
import React from "react";
import img3 from "./Assests/image 46.png";
import img2 from "./Assests/image 56.png";
import img1 from "./Assests/image 59.png";
import img4 from "./Assests/image 51.png";

const Project3 = () => {
  return (
    <>
      <div id="project3" className={style.maindiv} style={{ marginTop: "15rem" }}>
        <div className={style.div2}>
          <span className={style.title}>Title: </span>
          <span className={style.title}>
            Urdu to Braille: Bridging Literacy and Access for the Blind
          </span>
          <br />
          <br />
          <span className={style.subtitle}>Supervisor:</span>
          <span className={style.subtitlechild}> Dr. Majida Kazmi</span>
          <br />
          <br />
          <span className={style.subtitle}>Team:</span>{" "}
          <span className={style.subtitlechild}>
            Hiba Khan (CS-20018), Syed Aali (CS-20053), Nizana Khan (CS-20035),
            Hafsa Azhar (CS-20081)
          </span>
          <br />
          <br />
          <span className={style.subtitle}>Domain:</span>
          <span className={style.subtitlechild}>
            {" "}
            Learning for blind people, Data Management, Artificial Intelligence
            , Deep Learning and Web Application.
          </span>
          <br />
          <br />
          <span className={style.subtitle}>Description:</span>
          <span className={style.subtitlechild}>
            {" "}
            The project aims to address the critical issue of low Braille
            literacy rates among the visually impaired, specifically focusing on
            Urdu-speaking individuals in Pakistan. Despite Braille being a vital
            communication method for the blind, variations in Braille systems
            across different countries have hindered its universal
            effectiveness. The project's primary goal is to create an
            Intelligent Urdu to Braille Converter, incorporating Grade 1 and
            Grade 2 Braille, making it concise and efficient for blind
            individuals to read.
          </span>
          <br />
          <span className={style.subtitlechild}>
            {" "}
            The objective is to develop a Grade 2 Urdu-to-Braille text
            converter, integrating contractions and short forms for readability,
            enhancing the speed of Braille reading, and establishing a
            comprehensive database solution for effective conversion. The
            ultimate aim is to promote Braille literacy, providing blind
            individuals with a tool to access written information in Urdu and
            enabling them to write in Braille from Urdu.
          </span>
          <br />
          <span className={style.subtitlechild}>
            {" "}
            This involves thorough research, including studying relevant papers,
            to guide the development process. We plan to create an interactive
            user interface, implement an AI algorithm using NMT Models to
            translate Urdu to Braille effectively, and conduct rigorous testing,
            including usability tests with blind individuals. Overall, the
            project aims to empower the visually impaired community in Pakistan
            by providing them with a valuable tool for education and information
            access in their native language, Urdu.
          </span>
          <br />
          <br />
          <span className={style.subtitle}>Partners:</span>
          <span className={style.subtitlechild}>
            {" "}
            Idarieu School for Blinds and Deaf
          </span>
          <br />
          <br />
          <span className={style.subtitle}>SDGs: </span>
          <br />
        </div>
        <div className={style.div3}>
          <img src={img1} className={style.img} />
          <img src={img2} className={style.img} />
          <img src={img3} className={style.img} />
          <img src={img4} className={style.img} />
        </div>
      </div>
    </>
  );
};

export default Project3;

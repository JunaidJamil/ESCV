import style from "./Project2.module.css";
import React from "react";
import img1 from "./Assests/image 46.png";
import img2 from "./Assests/image 50.png";
import img3 from "./Assests/image 47.png";

const Project6 = () => {
  return (
    <>
      <div id="project6" className={style.maindiv} style={{ marginTop: "15rem" }}>
        <div className={style.div2}>
          <span className={style.title}>Title: </span>
          <span className={style.title}>
            Automated Number Plate Recognition For Intelligent Transportation
            System
          </span>
          <br />
          <br />
          <span className={style.subtitle}>Supervisor:</span>
          <span className={style.subtitlechild}> Ms. Fauzia Yasir</span>
          <br />
          <br />
          <span className={style.subtitle}>Co-supervisor:</span>
          <span className={style.subtitlechild}> Dr. Majida</span>
          <br />
          <br />
          <span className={style.subtitle}>Team:</span>{" "}
          <span className={style.subtitlechild}>
            Zain Siddiqui (CS-20062), Syed Mohammad Usama (CS-20066) , Syed
            Mohammad Arham Tahir (CS-20068), Mohammad Hamza Malik (CS-20138)
          </span>
          <br />
          <br />
          <span className={style.subtitle}>Domain:</span>
          <span className={style.subtitlechild}> </span>
          <br />
          <br />
          <span className={style.subtitle}>Description:</span>
          <span className={style.subtitlechild}>
            {" "}
            This project's goal is to design and implement a resource-efficient
            accelerated solution for ANPR using deep learning algorithms while
            focusing on overcoming these challenges. By doing so, it aims to
            unlock the transformative potential of ANPR technology in developing
            countries. This includes revolutionizing traffic management,
            enhancing security, promoting economic growth, and bolstering
            emergency response systems in regions that would benefit most from
            these advances.
          </span>
          <br />
          <br />
          <span className={style.subtitle}>Partners:</span>
          <span className={style.subtitlechild}>
            {" "}
            Anjuman Taraqqi e Urdu Pakistan
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
        </div>
      </div>
    </>
  );
};

export default Project6;

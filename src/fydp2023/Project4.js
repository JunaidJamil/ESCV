import style from "./Project2.module.css";
import React from "react";
import img2 from "./Assests/image 46.png";
import img1 from "./Assests/image 48.png";
import img3 from "./Assests/image 51.png";

const Project4 = () => {
  return (
    <>
      <div id="project4" className={style.maindiv} style={{ marginTop: "15rem" }}>
        <div className={style.div2}>
          <span className={style.title}>Title: </span>
          <span className={style.title}>
            DeepWriter: Enhancing Integrity in Industrial Handwritten Document
            Recognition
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
            Aaminah Qaiser (CS-20004), Ushna Hamza (CS-20016) , Mashal Abbas
            (CS-20032)
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
            The "DeepWriter: Enhancing Integrity in Industrial Handwritten
            Document Recognition" project addresses a pressing need in both the
            industrial and societal domains. In an era where document
            authenticity is paramount, the ability to accurately identify the
            writer of handwritten documents has significant implications. This
            project's salient features lie in its potential to revolutionize
            document integrity within industries, exemplified by Lucky Motors
            Company. By leveraging advanced machine learning techniques and a
            user-friendly mobile application, DeepWriter streamlines the
            authentication of handwritten records, reducing operational overhead
            and enhancing overall document integrity. Beyond its industrial
            applications, DeepWriter offers broader societal benefits by
            facilitating historical document verification, authorship analysis,
            and forgery detection. With the provision of confidence scores, it
            empowers users to gauge the reliability of each identification,
            promoting trust and accuracy in a range of professional and
            historical contexts. This project embodies innovation at the
            intersection of technology and document forensics, addressing
            real-world challenges while fostering greater confidence in
            handwritten records' authenticity.
          </span>
          <br />
          <br />
          <span className={style.subtitle}>Partners:</span>
          <span className={style.subtitlechild}>
            {" "}
            Lucky Motor Corporation (LMC), a subsidiary of Kia Motors
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

export default Project4;

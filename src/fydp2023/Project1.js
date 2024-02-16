import style from "../fydp2023/Project2.module.css";
import img1 from "./Assests/image 65.png";
import img2 from "./Assests/image 66.png";
import img3 from "./Assests/image 69.png";
import img4 from "./Assests/image 70.png";
const Project1 = () => {
  return (
      <div id="project1" className={style.maindiv}>
        <div className={style.div2}>
          <span className={style.title}>
            Title:{" "}
          </span>
          <span className={style.title}>
            Revolutionizing Quality Control in Automotive Manufacturing:
            Computer Vision Inspection for Precision Component Defect Detection
          </span>
          <br /><br/>
          <span className={style.subtitle}>
            Supervisor:
          </span>
          <span className={style.subtitlechild}>
            {" "}
            Dr. Majida Kazmi
          </span>
          <br /><br/>
          <span className={style.subtitle}>
            Co-supervisor:{" "}
          </span>
          <span className={style.subtitlechild}>
            Dr. Saad Qazi
          </span>
          <br /><br/>
          <span className={style.subtitle}>
            Team:
          </span>{" "}
          <span className={style.subtitlechild}>
            Aayaat Ali ( CS-20042), Warisha Sajjad ( CS-20078), Tehreem Fatima (
            CS-20079), Musfirah ( CS-20080)
          </span>
          <br /><br/>
          <span className={style.subtitle}>
            Domain:
          </span>
          <span className={style.subtitlechild}>
            {" "}
            Computer Vision ,Data Acquisition and Management, System
            Integration, Defect detection and localization, Dashboard
            Development, Industry 4.0
          </span>
          <br /><br/>
          <span className={style.subtitle}>
            Description:
          </span>
          <span className={style.subtitlechild}>
            {" "}
            In manufacturing, it is important to accurately and efficiently
            detect and classify surface defects on piston rods and pipe forks.
            If surface defects are not detected, they can lead to problems in
            the use of piston rods and pipe forks, potentially resulting in
            costly replacement and repair work.
          </span>
          <br />
          <span className={style.subtitlechild}>
            Currently, the detection and classification of these defects is done
            manually by human inspectors. However, these manual methods are
            considered inefficient because they can be time consuming and labour
            intensive. They are also considered unreliable because human
            inspectors can miss or misclassify defects.
          </span>
          <br />
          <span className={style.subtitlechild}>
            Given the drawbacks of manual inspection, there is a strong
            motivation to automate this process using advanced technologies such
            as Deep Learning. The goal is to develop a system that can
            efficiently detect and locate defects on piston rods and pipe forks
            with high reliability, reducing the risk of costly replacements and
            improving overall manufacturing quality.
          </span>
          <br /><br />
          <span className={style.subtitle}>
            Partners:
          </span>
          <span className={style.subtitlechild}>
            {" "}
            Agriauto industrial limited{" "}
          </span>
          <br /><br />
          <span className={style.subtitle}>
            SDGs:{" "}
          </span>
          <br />
          </div>
          <div className={style.div3}>
              <img src={img1} className={style.img} />
              <img src={img2} className={style.img} />
              <img src={img3} className={style.img} />
              <img src={img4} className={style.img} />
          </div>
        </div>
       
  );
};
export default Project1;

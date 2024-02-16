import style from "./Project2.module.css";
import img1 from "./Assests/image 59.png";
import img2 from "./Assests/image 76.png";
import img3 from "./Assests/image 56.png";
import img4 from "./Assests/image 51.png";
import img5 from "./Assests/image 46.png";
const Project2 = () => {
  return (
    <>
    <div id="project2" className={style.maindiv} style={{marginTop:"15rem"}}>
      <div className={style.div2}>
        <span className={style.title}>Title: </span>
        <span className={style.title}>
        Predictive Maintenance Solution for Industrial Motors
        </span>
        <br /><br />
        <span className={style.subtitle}>Supervisor:</span>
        <span className={style.subtitlechild}> Dr. Majida Kazmi</span>
        <br /><br />
        <span className={style.subtitle}>Team:</span>{" "}
        <span className={style.subtitlechild}>
        Farah Hussain CS-003, Syed Muhammad CS-015, Malaika Ali CS-019, Gorve Kumar CS-125
        </span>
        <br /><br />
        <span className={style.subtitle}>Domain:</span>
        <span className={style.subtitlechild}>Industry 4.0, Signal Processing, Machine Learning, Database Management, Portal Application Development </span>
        <br /><br />
        <span className={style.subtitle}>Description:</span>
        <span className={style.subtitlechild}>
          {" "}
          Predictive maintenance system consists of the combination of various sensors which are attached to the induction motor. They measure vibrations, temperature and some other electrical parameters of the motor. The incoming data from these sensors is transferred to the cloud for storage and machine learning based data analytics. The scope of this project is to build an approach for processing and analyzing the data which is acquired from the motor in radial and axial axes. For efficient model development, the data needs to be converted to the frequency domain. This involves incorporating some signal processing techniques, like Fast Fourier Transform (FFT). The next step is performing data analytics and applying ML techniques on the transformed data. ML models are trained for the fault prediction of the induction motor. The last stage involves designing and developing a dashboard that aims to show the details of all the motors being monitored, along with the detailed reports on their performance. To take the preventive actions on the fault occurrences in the motors, the system provides automated alerts for the better performance. Different motor faults can be organized into groups based on specific patterns in the frequency spectrum, which allows us to quickly identify the type of fault. The frequency spectrum of a faulty motor typically includes dominant peaks, which are high in amplitude. There are five main groups of faults: the synchronous group, the harmonic group, the subharmonic/sub-synchronous group, the non-synchronous group, and the modulation/sidebands group. This project aims to consider these faults for applying appropriate ML techniques.
        </span>
        <br /><br />
        <span className={style.subtitle}>Partners:</span>
        <span className={style.subtitlechild}>
          {" "}
          Agriauto industrial limited 
        </span>
        <br /><br />
        <span className={style.subtitle}>SDGs: </span>
        <br /><br />
      </div>
      <div className={style.div3}>
          <img src={img1} className={style.img} />
        
          <img src={img2} className={style.img} />
        
        
          <img src={img3} className={style.img} />
        
       
          <img src={img4} className={style.img} />
        
       
          <img src={img5} className={style.img} />
        
      </div>
    </div>
    </>
  );
};
export default Project2;
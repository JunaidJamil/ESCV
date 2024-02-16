import style from "./Project2.module.css";
import img1 from "./Assests/image 46.png";
import img2 from "./Assests/image 48.png";
import img3 from "./Assests/image 50.png";
import img4 from "./Assests/image 51.png";
import img5 from "./Assests/image 55.png";
import img6 from "./Assests/image 56.png";
import img7 from "./Assests/image 59.png";
import img8 from "./Assests/image 60.png";
const Project5 = () => {
  return (
      <div id="project5" className={style.maindiv} style={{marginTop:"15rem"}}>
        <div className={style.div2}>
          <span className={style.title}>
            Title:{" "}
          </span>
          <span className={style.title}>
            Deep learning-based Voice Cloning for Local Languages with a
            Focus on Urdu
          </span>
          <br /><br />
          <span className={style.subtitle}>
            Supervisor:
          </span>
          <span className={style.subtitlechild}>
            {" "}
            Ms. Fauzia Yasir
          </span>
          <br /><br />
          <span className={style.subtitle}>
            Co-supervisor:{" "}
          </span>
          <span className={style.subtitlechild}>
          Dr. Majida
          </span>
          <br /><br />
          <span className={style.subtitle}>
            Team:
          </span>{" "}
          <span className={style.subtitlechild}>
          Hunzala Mushtaq (CS-20052), Mujtaba Mateen (CS-20105) , M Usama
            Shahid (CS-20107), Muneeb Ullah Khan (CS-20301)
          </span>
          <br /><br />
          <span className={style.subtitle}>
            Domain:
          </span>
          <span className={style.subtitlechild}>
            {" "}
            
          </span>
          <br /><br />
          <span className={style.subtitle}>
            Description:
          </span>
          <span className={style.subtitlechild}>
            {" "}
            Voice synthesis and preservation for underrepresented languages is a
            critical challenge, especially for languages like Urdu. Urdu is a
            widely spoken language with over 100 million speakers worldwide, but
            it is underrepresented in the digital world. There is a scarcity of
            high-quality, natural-sounding voice synthesis tools and models for
            Urdu, which limits accessibility and personalization of technology
            for Urdu-speaking communities. This project aims to address this
            challenge by developing high-quality, natural-sounding voice
            synthesis model for Urdu. This will be done by leveraging deep
            learning and generative model techniques. The trained model will be
            able to generate realistic-sounding Urdu speech from text. In
            addition to its practical benefits, this project also has
            significant cultural significance. Urdu is a rich and vibrant
            language with a long history and tradition. By developing this
            project, it will help to preserve the language and culture for
            future generations. The project will employ a multiple data
            collection approach, using native speakers, open-source speech
            datasets, and extracting audio samples from social media videos.
          </span>
          <br /><br />
          <span className={style.subtitle}>
            Partners:
          </span>
          <span className={style.subtitlechild}>
            {" "}
            Anjuman Taraqqi e Urdu Pakistan
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
           
              <img src={img5} className={style.img} />
           
              <img src={img6} className={style.img} />
           
              <img src={img7} className={style.img} />
            
              <img src={img8} className={style.img} />
            
        </div>
        </div>
  );
};
export default Project5;

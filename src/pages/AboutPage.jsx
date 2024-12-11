import Andrea from "../assets/Andrea.png";
import Marta from "../assets/Marta.png";
import Airam from "../assets/Airam.png"

import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="aboutpage">
      <section className="introduction">
        <h2> More about us</h2>
        <h4>Welcome to our Recipe App!</h4>
        <p className="description">
          {" "}
          Hover Horizons is a website designed for travel enthusiasts. Here, you
          can explore incredible destinations, manage your personal travel list,
          interact with a travel community, and customize your profile. This
          project was developed by Airam Santos, Andrea Bronzoni, and Marta
          Gómez as part of a class project.
        </p>
        <p>
          Developed using React, this project is a collaboration between three
          passionate web developers who share a love for coding and travel. We
          hope you enjoy using our app as much as we enjoyed building it!
        </p>
      </section>

      <div className="coworkers">
        <div className="coworker">
          <section className="coworkerTitle">
            <img src={Airam} className="facePicture" alt="Airam's image" />
            <h2>Airam Santos</h2>
          </section>

          <p>
            Airam Santos, a native of Tenerife in the Canary Islands, is a web
            developer with a deep passion for travel and video games. His
            adventurous spirit drives him to explore new destinations and
            cultures, and he often draws inspiration from his travels for his
            projects. Whether it&apos;s discovering new landscapes or exploring
            virtual worlds, Airam approaches both development and travel with
            the same enthusiasm and curiosity, always looking for new ways to
            expand his horizons.
          </p>
        </div>

        <div className="coworker">
          <section className="coworkerTitle">
            <img src={Andrea} className="facePicture" alt="Andrea's image" />
            <h2>Andrea Bronzoni</h2>
          </section>

          <p>
            Andrea Bronzoni, originally from the Emilia Romagna and Sicily
            regions of Italy, was born in Switzerland. A passionate web
            developer, Andrea is deeply fascinated by languages and cultures.
            His love for learning new languages aligns perfectly with his work
            as a developer, as he continuously seeks to connect with different
            perspectives and approaches. Combining his technical expertise with
            a broad cultural understanding, Andrea brings a unique and global
            approach to web development.
          </p>
        </div>

        <div className="coworker">
          <section className="coworkerTitle">
            <img src={Marta} className="facePicture" alt="Marta's image" />
            <h2>Marta Gómez</h2>
          </section>
          <p>
            Marta Gómez, from the vibrant region of Andalusia and born in Cádiz,
            is a web developer with a love for discovering different cultures
            and their cuisines. She finds joy in learning about the diverse
            traditions and flavors from around the world, which fuels her
            creativity and problem-solving skills as a developer. Marta combines
            her passion for cultural exploration with her work, ensuring that
            every project is infused with a unique and open-minded approach.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

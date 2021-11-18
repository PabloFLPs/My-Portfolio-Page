import "./styles/App.scss"

import Nav from "./components/NavBar";
import MyPortfolio from "./components/MyPortfolio";
import MyResume from "./components/MyResume";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <body>
      <section className="home" id="home">
        <Nav/>
        <div className="presentation">
          <h1>Hello, I'm <p><strong className="my-name">Pablo Felipe</strong></p></h1>
          <strong className="my-page">and this is my page</strong>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <h2>Featured <strong>Portfolio</strong></h2>
        <MyPortfolio/>
      </section>

      <section className="resume" id="resume">
        <h2>My <strong>Resume</strong></h2>
        <MyResume/>
      </section>

      <section className="about" id="about">
        <h2>About <strong>Me</strong></h2>
        <AboutMe/>
      </section>

      <section className="contact-section" id="contact">
        <h3>Get <strong>In Touch</strong></h3>
        <Contact/>
      </section>

      <section className="footer-section">
        <Footer/>
      </section>
    </body>
  )
}

export default App;

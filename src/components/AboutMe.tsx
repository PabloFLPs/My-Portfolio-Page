export default function AboutMe() {
  return (
    <div className="about-me">
      <div className="my-profile">
        <div className="my-image">
          {/*<img src="../assets/home_image_me.jpg" alt="My Profile Pic" />*/}
        </div>
        <p>Pablo Felipe</p>
      </div>

      <div className="who-am-i">
        <h3>Who am I?</h3>
        <p>I'm a Back-end Developer and I am on the way to specialize myself in Web Development, which is an area that I am loving a lot. Currently I'm also studying Front-end, developing React applications.</p>
        <div className="line"></div>
        <h3>Services</h3>
        <p>My first back-end application is the "Diversight Platform", deployed on Heroku and made utilizing JavaScript as language, Sequelize as ORM, and Postgres as database dialect; this project was made to the second phase of the ioasys CAMP 2021. You can check more about it in my <a href="#portfolio">portfolio</a> that have the repository with a more detailed description linked in it.</p>
        <p>Also, you can take a look at my Free Sending Email API, it is being utilized in the <a href="#contact">Get in Touch </a>section below. You can check its repository <a href="https://github.com/PabloFLPs/Send-Email-API" target="#">here</a>.</p>
      </div>
    </div>
  )
}

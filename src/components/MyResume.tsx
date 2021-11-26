export default function MyResume() {
  const Educations = [
    {
      title: "Bachelor of Computer Science (BCompSc) - Computer Engineering | CEFET-MG",
      period: "August 2018 - July 2023 (Pretended)",
      description: "With an emphasis in computer engineering learning about the low level processing conceits of a computer, I also have learned programming with bases in languages as Java, C, Assembly, Python and Haskell"
    },
    {
      title: "Graduation Degree - Energy Engineering | Pontifical Catholic University PUC-MG",
      period: "February 2018 - August 2018",
      description: "In the short period that I kept in this course, I was part of the Baja PUC team; it's a competitive academic group in the off-road automobile modality with many subareas os studying, as mechanical, electrical and etc. It was the most important experience in this period and you can check more in their ",
      link: {
        url: "https://sites.google.com/view/bajapucminas/página-inicial",
        text: "site"
      }
    },
    {
      title: "Technician Degree - Electrical Engineering | CEFET-MG",
      period: "February 2014 - December 2017",
      description: "I studied introduction and basics disciplines of electrical education, and also have learned to program in MATLAB language. In the period above 2016 to 2017, I was part of a robotic group that has surged from mine and some friends idea, and we studied residential automation and conceits of robotics utilizing Arduino IDE with C language"
    }
  ]

  const Experiences = [
    {
      title: "Backend Developer | LeCode",
      period: "September 2021 - Present",
      description: "I work with React/NextJS in some front-end applications as this page itself and NodeJS to develop back-end applications, as APIs or CRUDs. Also, I am studying TypeScript."
    },
    {
      title: "Marketing | Commit Jr.",
      period: "March 2021 - Present",
      description: "I am part of the Marketing team of Commit Jr. We manage the social medias of the company and work on projects to rise the networking, engagement and active prospection."
    },
    {
      title: "IT Support Analist | Federal Center of Technologial Education of Minas Gerais (CEFET-MG)",
      period: "November 2019 - October 2020",
      description: "I worked with Java and Python languages, with addition of Git and databases conceits. I also learned a little about CSS, HTML and SQL."
    },
    {
      title: "Client Support Analist | SKILL Informática",
      period: "January 2016 - December 2016",
      description: "I worked specifically with client support, realizing database backups remotely and problem solutions also remotely. I also worked with bug analysis and correction on the company's developed systems."
    }
  ]

  return (
    <div className="my-resume">
      <div className="left">
        <h2>Education</h2>
        {
          Educations.map((education) => (
            <div className="education-item">
              <h3>{education.title}</h3>
              <p>{education.period}</p>
              <span>
                {education.description}
                {education.link && (<a href={education.link.url} target="#">{education.link.text}</a>)}
                .
              </span>
              <div className="line"></div>
            </div>
          ))
        }

        <h2>Curriculum</h2>
        <div className="my-curriculum">
          <span>You can check my CV document in PDF with more details about me <a href="https://drive.google.com/file/d/1xfGA2qK1cKEhXdBXHRW__4QisQDe2LKm/view?usp=sharing" target="#">here</a>.</span>
        </div>
      </div>

      <div className="right">
        <h2>Experience</h2>
        {
          Experiences.map((experience) => (
            <div className="education-item">
              <h3>{experience.title}</h3>
              <p>{experience.period}</p>
              <span>
                {experience.description}
              </span>
                {
                  //Veryfing if is the last element of "Experiences". If true, then we don't have a last line separating the items.
                  (Experiences[Experiences.indexOf(experience) + 1] != null) && (<div className="line"></div>)
                }
            </div>
          ))
        }
      </div>
    </div>
  )
}

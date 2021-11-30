export default function MyPortfolio() {
  const Projects = [
    {
      leftContainer: {
        title: "Podcastr",
        subtitle: "Application - Rocketseat's NLW 5",
        link: "https://github.com/PabloFLPs/Podcastr-NextJS",
        card: "https://gh-card.dev/repos/PabloFLPs/Podcastr-NextJS.svg?fullname=&link_target=_top",
        label: "Podcastr Card"
      },
      rightContainer: {
        title: "Diversight",
        subtitle: "Project - ioasys CAMP 2021",
        link: "https://github.com/PabloFLPs/ioasys-CAMP-2021-diversight",
        card: "https://gh-card.dev/repos/PabloFLPs/ioasys-CAMP-2021-diversight.svg?fullname=&link_target=_top",
        label: "Diversight Card"
      }
    },
    {
      leftContainer: {
        title: "LetMeAsk",
        subtitle: "Application - Rocketseat's NLW 6",
        link: "https://github.com/PabloFLPs/Rocketseat-NLW6-React",
        card: "https://gh-card.dev/repos/PabloFLPs/Rocketseat-NLW6-React.svg?fullname=&link_target=_top",
        label: "LetMeAsk Card"
      },
      rightContainer: {
        title: "Responsive",
        subtitle: "Website - Only HTML and CSS",
        link: "https://github.com/PabloFLPs/responsive-html-css-only",
        card: "https://gh-card.dev/repos/PabloFLPs/responsive-html-css-only.svg?fullname=&link_target=_top",
        label: "Responsive HTML/CSS Only Card"
      }
    }
  ]

  return (
    <>
      <p>Here are some of my recent applications repositories on Github.</p>
      {
        Projects.map((project) => (
          <div className="container">
            <div className="github-card">
              <p><strong>{project.leftContainer.title}</strong> {project.leftContainer.subtitle}</p>
              <div>
                <a href={project.leftContainer.link} target="#">
                  <object type="image/svg+xml" data={project.leftContainer.card} width="400px" height="130" aria-label={project.leftContainer.label}></object>
                </a>
              </div>
            </div>

            <div className="github-card">
              <p><strong>{project.rightContainer.title}</strong> {project.rightContainer.subtitle}</p>
              <div>
                <a href={project.rightContainer.link} target="#">
                  <object type="image/svg+xml" data={project.rightContainer.card} width="400px" height="130" aria-label={project.rightContainer.label}></object>
                </a>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}

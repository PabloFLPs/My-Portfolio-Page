export default function MyPortfolio() {
  return (
    <>
      <p>Here are some of my recent applications repositories on Github.</p>
      <div className="container">
        <div className="github-card">
          <p><strong>Podcastr</strong> Application - Rocketseat's NLW 5</p>
          <div>
            <a href="https://github.com/PabloFLPs/Podcastr-NextJS">
              {/*img src="https://github-link-card.s3.ap-northeast-1.amazonaws.com/PabloFLPs/Podcastr-NextJS.png" width="390px" height="130" alt="Podcastr Card"/></a>*/}
              {/*<img src="https://gh-card.dev/repos/PabloFLPs/Podcastr-NextJS.svg?fullname=" width="400px" height="130" alt="Podcastr Card"/>*/}
              <object type="image/svg+xml" data="https://gh-card.dev/repos/PabloFLPs/Podcastr-NextJS.svg?fullname=&link_target=_top" width="400px" height="130" aria-label="Podcastr Card"></object>
            </a>
          </div>
        </div>

        <div className="github-card">
          <p><strong>Diversight</strong> Backend Project - ioasys CAMP 2021</p>
          <div>
            <a href="https://github.com/PabloFLPs/ioasys-CAMP-2021-diversight">
              {/*<img src="https://github-link-card.s3.ap-northeast-1.amazonaws.com/PabloFLPs/ioasys-CAMP-2021-diversight.png" width="390px" height="130" alt="Diversight Card"/>*/}
              {/*<img src="https://gh-card.dev/repos/PabloFLPs/ioasys-CAMP-2021-diversight.svg?fullname=" width="400px" height="130" alt="Diversight Card"/>*/}
              <object type="image/svg+xml" data="https://gh-card.dev/repos/PabloFLPs/ioasys-CAMP-2021-diversight.svg?fullname=&link_target=_top" width="400px" height="130" aria-label="Diversight Card"></object>
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="github-card">
          <p><strong>LetMeAsk</strong> Application - Rocketseat's NLW 6</p>
          <div>
            <a href="https://github.com/PabloFLPs/Rocketseat-NLW6-React">
              {/*<img src="https://github-link-card.s3.ap-northeast-1.amazonaws.com/PabloFLPs/Rocketseat-NLW6-React.png" width="390px" height="130" alt="LetMeAsk Card"/>*/}
              {/*<img src="https://gh-card.dev/repos/PabloFLPs/Rocketseat-NLW6-React.svg?fullname=" width="400px" height="130" alt="LetMeAsk Card"/>*/}
              <object type="image/svg+xml" data="https://gh-card.dev/repos/PabloFLPs/Rocketseat-NLW6-React.svg?fullname=&link_target=_top" width="400px" height="130" aria-label="LetMeAsk Card"></object>
            </a>
          </div>
        </div>

        <div className="github-card">
          <p><strong>Responsive Website</strong> - Only HTML and CSS</p>
          <div>
            <a href="https://github.com/PabloFLPs/responsive-html-css-only">
              {/*<img src="https://github-link-card.s3.ap-northeast-1.amazonaws.com/PabloFLPs/responsive-html-css-only.png" width="390px" height="130" alt="Responsive HTML/CSS Only Card"/>*/}
              {/*<img src="https://gh-card.dev/repos/PabloFLPs/responsive-html-css-only.svg?fullname=" width="400px" height="130" alt="Responsive HTML/CSS Only Card"/>*/}
              <object type="image/svg+xml" data="https://gh-card.dev/repos/PabloFLPs/responsive-html-css-only.svg?fullname=&link_target=_top" width="400px" height="130" aria-label="Responsive HTML/CSS Only Card"></object>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

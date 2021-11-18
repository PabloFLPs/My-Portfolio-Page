export default function Nav() {
  const navOptions = ["home", "portfolio", "resume", "about", "contact"]
  
  return (
    <nav className="navbar">
      {
        navOptions.map((navOption) => <a className="nav-item" href={`#${navOption}`}>{navOption}</a>)
      }
    </nav>
  )
}

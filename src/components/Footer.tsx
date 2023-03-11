function Footer() {
  return (
    <footer className="container">
      <p>
        <a
          className="text-decoration-none interactive-element"
          href="https://neurothrone.tech/"
          target="_blank"
          rel="noreferrer"
        >Neurothrone</a> &copy; {new Date().getFullYear()}</p>

      <ul
        className="list-inline"
      >
        <li className="list-inline-item">
          <a
            className="text-decoration-none"
            href="https://github.com/neurothrone"
          >
            <i className="fa-brands fa-github-square fs-3 interactive-element"></i>
          </a>
        </li>
        <li className="list-inline-item">
          <a
            className="text-decoration-none"
            href="https://www.linkedin.com/in/neurothrone"
          >
            <i className="fa-brands fa-linkedin fs-3 interactive-element"></i>
          </a>
        </li>
      </ul>

      <hr/>

      <p
        className="text-center"
      >This site is powered by&nbsp;
        <a
          className="interactive-element"
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noreferrer"
        >
          TypeScript
        </a> &amp;&nbsp;
        <a
          className="interactive-element"
          href="https://reactjs.org/"
          target="_blank"
          rel="noreferrer"
        >
          React
        </a>
      </p>
    </footer>
  );
}

export default Footer;
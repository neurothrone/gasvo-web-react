function Footer() {
  return (
    <footer>
      <p>
        <a
          href="https://neurothrone.tech/"
          target="_blank"
          rel="noreferrer"
        >Neurothrone</a> &copy; {new Date().getFullYear()}</p>
      <hr/>
      <p>This site is powered by&nbsp;
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noreferrer"
        >TypeScript</a> &amp;&nbsp;
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noreferrer"
        >React</a>
      </p>
      <ul>
        <li><a href="https://github.com/neurothrone">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/neurothrone">LinkedIn</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
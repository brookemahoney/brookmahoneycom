import './FooterNav.css';

const FooterNav = () => (
  <section className="card footer-nav">
    <h2 className="card--heading">Site Navigation</h2>
    <section className="card--inner">
      <nav className="footer-nav--menu">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
        </ul>
      </nav>
    </section>
  </section>
);

export default FooterNav;

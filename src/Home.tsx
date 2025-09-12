import './Home.css';

export default function Home() {
  return (
    <div className="page--home">
      <h1>Brooke Mahoney</h1>

      <main>

        <p className="home--welcome">Welcome to the fanciest website ever!</p>

        <section className="card">
          <h2 className="card--heading">Coding for the Web Since 1995</h2>

          <h3>Expertise</h3>

          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>PHP</li>
          </ul>

          <h3>Specialties</h3>

          <ul>
            <li>Drupal</li>
            <li>React</li>
          </ul>

          <h3>External Links</h3>

          <ul>
            <li>
              <a href="https://drupal.org/u/loopduplicate">Drupal.org</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/brooke-marie-mahoney/">Linked.in</a>
            </li>
          </ul>

        </section>

        <nav className="menu--footer">
          <ul>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </nav>


      </main>
    </div>
  );
};

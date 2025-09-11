import type { Route } from "./+types/home";

export const meta = ({ }: Route.MetaArgs) => ([
  { title: "Brooke Mahoney" },
  { name: "description", content: "Coding for the Web Since 1995" },
]);

const Home = () => (
  <>
      <h1>Brooke Mahoney</h1>

      <main>

        <section className="card">
          <h2>Coding for the Web Since 1995</h2>

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

      </main>
    </>
);

export default Home;

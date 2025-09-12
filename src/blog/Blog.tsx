import './Blog.css';
import FooterNav from '../components/FooterNav';

export default function Blog() {
  return (
    <div className="page--blog">
      <h1>Brooke Mahoney</h1>

      <main>

        <section className="card card--blog-posts">
          <h2 className="card--heading">Blog Posts</h2>
          <section className="card--inner">
            <ul>
              <li><a href="/blog/20250912">20250912 - Random Things, Catching Up, and AI</a></li>
            </ul>
          </section>
        </section>

        <FooterNav />

      </main>
    </div>
  );
};

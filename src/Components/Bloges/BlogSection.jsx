import './Blogs.css';
import Background1 from '../../assets/background2.webp';
import Background2 from '../../assets/background3.webp';
import Background3 from '../../assets/background3.webp';

const blogPosts = [
  {
    id: 1,
    date: '14 Feb 2024',
    comments: 0,
    category: 'Burger',
    title: 'Quick Cravings: Unraveling Fast zFood Delightss',
    description:
      'There are many variations of passages of Lorem Ipsum available, but majority have suffered alteration.',
    image: Background1,
  },
  {
    id: 2,
    date: '15 Feb 2024',
    comments: 0,
    category: 'Hot Dog',
    title: 'Veggie Vibes: Garden Fresh Delightful Creations',
    description:
      'There are many variations of passages of Lorem Ipsum available, but majority have suffered alteration.',
    image: Background2,
  },
  {
    id: 3,
    date: '15 Feb 2024',
    comments: 0,
    category: 'Pasta',
    title: 'Bold Bite: Exotic Flavors, Global Adventure',
    description:
      'There are many variations of passages of Lorem Ipsum available, but majority have suffered alteration.',
    image: Background3,
  },
];

function NewsBlog() {
  return (
    <section className="news-blog-section">
      <div className="container">
        <p className="subtitle">News & Blog</p>
        <h2 className="title">Update News & Blog</h2>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <div className="image-box">
                <img
                  src={post.image}
                  alt={`Image for ${post.title}`}
                  className="blog-image"
                />
                <p className="image-name">{post.category}</p>
              </div>
              <div className="blog-content">
                <p className="meta ">
                  <span className="meta-underline">
                    {post.date}
                    <span className="span_2">Comments ({post.comments})</span>
                  </span>
                </p>
                <h3 className="blog-title">
                  <a href={`/blog/${post.id}`}>{post.title}</a>
                </h3>
                <p className="blog-description">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsBlog;

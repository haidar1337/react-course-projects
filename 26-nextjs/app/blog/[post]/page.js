export default function BlogPostPage({ params }) {
  return (
    <main>
      <h1>Blog</h1>
      <p>{params.post}</p>
    </main>
  );
}

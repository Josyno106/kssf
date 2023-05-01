// export const getStaticProps = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = await res.json();

//   return {
//     props: {
//       ninjas: posts,
//     },
//   };
// };

// posts will be populated at build time by getStaticProps()
function Blog({ ninjas }) {
  console.log({ ninjas });
  return (
    <h1>Helllo there</h1>
    // <ul>
    //   {ninjas.map((post) => (
    //     <li>{post.title}</li>
    //   ))}
    // </ul>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      ninjas,
    },
  };
}

export default Blog;

import Head from "next/head";
import Image from "next/image";
import Blog from "../components/Blog";
import HomePage from "../components/Home";
import styles from "../styles/Home.module.css";

export default function Home({ posts, users }) {
  return (
    <>
      {/* {users.map((user, index) => (
        <div key={index}>{user.name}</div>
      ))}

      {posts.nodes.map((post) => (
        <div>
          <h1 className="text-3xl font-bold underline font-alkatra ">
            {post.title}
          </h1>
          <div
            dangerouslySetInnerHTML={{
              __html: post.content,
            }}
          />
        </div>
      ))} */}

      <HomePage />
    </>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = await res.json();

//   return {
//     props: {
//       ninjas: posts,
//     },
//   };
// };

export async function getStaticProps() {
  const res = await fetch("https://kssfkenya.org/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query Homapae {
            posts {
                nodes {
                slug
                title
                content
                }
            }
            }
      `,
    }),
  });

  const res_1 = await fetch("https://jsonplaceholder.typicode.com/users");
  const postsData = await res_1.json();
  const json = await res.json();

  return {
    props: {
      posts: json.data.posts,
      users: postsData,
    },
  };
}

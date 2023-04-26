import React from 'react'
import { IPostDTO } from '.';

interface IPostView {
    post:IPostDTO
}

const postview : React.FC<IPostView> = ({ post }) => {
  return (
    <div className="container my-24 px-6 mx-auto">
    <section className="mb-32 text-gray-800">
      <h1 className="font-bold text-3xl mb-4">{post.title}</h1>

      <p className="mb-6">
         {post.body}
      </p>
    </section>
  </div>
  )
}

export async function getStaticPaths() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=20`);
    const posts : Array<IPostDTO> = await res.json();

    const paths = posts.map((post:IPostDTO) => {
        return {
            params: { id: post.id?.toString() }
        }
    });

    return {
      paths: paths,
      fallback: false, // false durumunda oluşturulmayan yollar için 404 hatası oluşturur
    }
}

export async function getStaticProps(context:any) {
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const post = await res.json();
    return {
        props: {
            post
        }
    }
}
  
export default postview;
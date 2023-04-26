import React, { useState } from 'react'
import Head from 'next/head'
import { Card } from '@/src/components/Card'
import { Container } from '@/src/components/Container'

interface IPosts {
    posts: Array<IPostDTO>
}

export class IPostDTO {
    id?: number;
    title?: string;
    body?: string;
    userId?: number;
}

const index: React.FC<IPosts> = ({ posts }) => {

    return (
        <div>
            <Head>
                <title>Posts</title>
            </Head>

            <Container title='Posts' grid col={4}>
                {
                    posts.map((post: any) => (
                        <Card key={post.id} author={post.userId} title={post.title} id={post.id} body={post.body} />
                    ))
                }
            </Container>
        </div>
    )
}

export const getServerSideProps = async (context: any) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=20`);
    const posts: Array<IPostDTO> = await res.json();

    return {
        props: {
            posts
        }
    }
}

export default index;
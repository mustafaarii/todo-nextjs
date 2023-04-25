import React, { useState } from 'react'
import Head from 'next/head'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { Pagination } from '@/components/Pagination'

interface IPosts {
    posts: Array<any>
}

const posts : React.FC<IPosts> = ({posts}) => {

    return (
        <div>
            <Head>
                <title>Posts</title>
            </Head>

            <Container title='Posts' grid col={4}>
                {
                    posts.map((post:any) => (
                        <Card img={post.url} title={post.title} id={post.id} />
                    ))
                }
            </Container>
        </div>
    )
}

export const getServerSideProps = async (context:any) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`);
    const posts = await res.json();

    return {
        props: {
            posts
        }
    }
}

export default posts;
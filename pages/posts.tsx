import React from 'react'
import Head from 'next/head'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'


export default function posts() {
    return (
        <div>
            <Head>
                <title>Posts</title>
            </Head>

            <Container title='Posts' grid col={4}>
                <Card img='https://mdbcdn.b-cdn.net/img/new/standard/city/081.webp' />
                <Card img='https://mdbcdn.b-cdn.net/img/new/standard/city/081.webp' />
                <Card img='https://mdbcdn.b-cdn.net/img/new/standard/city/081.webp' />
                <Card img='https://mdbcdn.b-cdn.net/img/new/standard/city/081.webp' />
                <Card img='https://mdbcdn.b-cdn.net/img/new/standard/city/081.webp' />
            </Container>
        </div>
    )
}

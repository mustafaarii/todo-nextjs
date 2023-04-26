import { Button, ButtonType } from '@/src/components/Button';
import { Container } from '@/src/components/Container';
import { Input } from '@/src/components/form/Input';
import Head from 'next/head';
import React, { useState } from 'react'
import { IPostDTO } from '../posts';

const add = () => {
    const [post, setPost] = useState<any>(new IPostDTO());

    const onChangeInput = (name: string, val: string) => {
        const newPost = post;
        newPost[name] = val;
        console.log(newPost);

        setPost({ ...newPost })
    }

    const save = async () => {
        await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: post.title,
                body: post.body
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

    }

    return (
        <>
            <Head>
                <title>Add Post | Admin Panel</title>
            </Head>
            <Container>
                <Input name='title' placeholder='Title' value={post.title} onChange={(key: string, val: string) => { onChangeInput(key, val) }} />
                <Input name='body' placeholder='Body' value={post.body} onChange={(key: string, val: string) => { onChangeInput(key, val) }} />
                <Button title='Add Post' onClick={save} type={ButtonType.SUCCESS} />
            </Container>
        </>

    )
}

export default add;
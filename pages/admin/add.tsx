import { Button, ButtonType } from '@/src/components/Button';
import { Container } from '@/src/components/Container';
import { Input } from '@/src/components/form/Input';
import Head from 'next/head';
import React, { useState } from 'react'
import { IPostDTO } from '../posts';
import { Alert, AlertType } from '@/src/components/Alert';

const add = () => {
    const [post, setPost] = useState<any>(new IPostDTO());
    const [addPostFlag, setAddPostFlag] = useState<boolean>(false);

    const onChangeInput = (name: string, val: string) => {
        const newPost = post;
        newPost[name] = val;
        setPost({ ...newPost })
    }

    const save = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: post.title,
                body: post.body
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        if(res.status === 201) {
            setAddPostFlag(true);
        }
    }

    return (
        <>
            <Head>
                <title>Add Post | Admin Panel</title>
            </Head>

            <Container className="flex flex-col gap-4">
            {
                addPostFlag && <Alert title='post added successfully.' type={AlertType.SUCCESS} />
            }
                <Input name='title' placeholder='Title' value={post.title} onChange={(key: string, val: string) => { onChangeInput(key, val) }} />
                <Input name='body' placeholder='Body' value={post.body} onChange={(key: string, val: string) => { onChangeInput(key, val) }} />
                <Button title='Add Post' onClick={save} type={ButtonType.SUCCESS} />
            </Container>
        </>

    )
}

export default add;
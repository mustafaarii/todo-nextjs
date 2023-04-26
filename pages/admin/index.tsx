import { Alert, AlertType } from '@/src/components/Alert';
import { Button, ButtonType } from '@/src/components/Button';
import { Container } from '@/src/components/Container';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { IPostDTO } from '../posts';

interface IAdminIndex {
    posts?: Array<any>;
}

const index: React.FC<IAdminIndex> = ({ posts }) => {

    const [postsState, setPostState] = useState<Array<IPostDTO>>([]);
    const [deletePostFlag, setDeletePostFlag] = useState<boolean>(false);

    const router = useRouter();

    useEffect(() => {
        if (posts)
            setPostState(posts)
    }, [])

    const deletePost = async (id: number) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE',
        });

        if (res.status === 200) {
            const posts = postsState.filter((post: any) => post.id !== id);
            setPostState([...posts])
            setDeletePostFlag(true);
        }

    }
    return (
        <>
            <Head>
                <title>Home | Admin Panel</title>
            </Head>

            <Container>
                {
                    deletePostFlag && <Alert title='post deleted successfully.' type={AlertType.SUCCESS} />
                }
                
                <Button title='Create Post' className="mt-8" onClick={()=> router.push("/admin/add")}/>

                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full text-left text-sm font-light">
                                    <thead className="border-b font-medium dark:border-neutral-500">
                                        <tr>
                                            <th scope="col" className="px-6 py-4">#</th>
                                            <th scope="col" className="px-6 py-4">Title</th>
                                            <th scope="col" className="px-6 py-4">Body</th>
                                            <th scope="col" className="px-6 py-4">User Id</th>
                                            <th scope="col" className="px-6 py-4">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            postsState?.map((post: IPostDTO) => (
                                                <tr className="border-b dark:border-neutral-500">
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium">{post.id}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">{post.title}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">{post.body?.slice(0,40) + "..."}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">{post.userId}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        <Button title='Delete' type={ButtonType.ERROR} onClick={() => post.id && deletePost(post.id)} />
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>

    )
}

export const getServerSideProps = async (context: any) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=20`);
    const posts : Array<IPostDTO> = await res.json();

    return {
        props: {
            posts
        }
    }
}

export default index;

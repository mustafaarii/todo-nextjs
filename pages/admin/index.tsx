import { Alert, AlertType } from '@/components/Alert';
import { Container } from '@/components/Container';
import Head from 'next/head';
import React from 'react'

const index = () => {
    return (
        <>
            <Head>
                <title>Home | Admin Panel</title>
            </Head>
            <Container>
                <Alert title='ADMIN INDEX' type={AlertType.SUCCESS} />
            </Container>
        </>

    )
}

export default index;

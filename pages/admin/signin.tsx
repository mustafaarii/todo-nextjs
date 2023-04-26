import { Button, ButtonType } from '@/src/components/Button';
import { Input, InputType } from '@/src/components/form/Input';
import { login } from '@/src/redux/reducers/AuthSlice';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export class AuthDTO {
    email?:string;
    password?:string
}

const signin = () => {

    const [user, setUser] = useState<AuthDTO>({});
    const router = useRouter(); // yönlendirme işlemleri için useRouter metodunu kullanabiliriz.
    const dispatch = useDispatch();

    const {
        authInfos
    } = useSelector((state:any) => {
        return {
            authInfos : state.authReducer
        }
    })

    useEffect(() => {
        if(authInfos.isAuth)
            router.push("/admin")
    }, [])

    const handleLogin = () => {
        dispatch(login({user, userId: 1}))
        router.push("/admin")
    }

    return (
        <>
            <Head>
                <title>Login | Admin Panel</title>
            </Head>

            <section className="h-screen">
                <div className="container h-full px-6 py-24">
                    <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                        {/* Left column container with background*/}
                        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                            <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="w-full" alt="Phone image" />
                        </div>
                        {/* Right column container with form */}
                        <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
                            <form>
                                <Input 
                                    placeholder='E-mail address' 
                                    value={user.email}
                                    name="email"
                                    onChange={(key:string, val:string) => setUser({...user, "email": val})}
                                />
                                <Input 
                                    placeholder="Password" 
                                    type={InputType.PASSWORD} 
                                    value={user.password}
                                    name="password" 
                                    onChange={(key:string, val:string) => setUser({...user, "password": val})}
                                />
                                
                                <Button type={ButtonType.PRIMARY} title="Login" className="w-full" onClick={handleLogin} />

                                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                    <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default signin;

import React, { useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import { NavbarLink } from './NavbarLink'
import { useDispatch, useSelector } from 'react-redux'
import { Button, ButtonType } from './Button'
import { logout } from '../redux/reducers/AuthSlice'
import { useRouter, Router } from 'next/router'
import Loading from './Loading';

interface IWrapper {
  children?: React.ReactNode
}
export const Wrapper: React.FC<IWrapper> = ({ children }) => {

  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", (url)=>{
      setIsLoading(true)
    });

    Router.events.on("routeChangeComplete", (url)=>{
      setIsLoading(false)
    });

    Router.events.on("routeChangeError", (url) =>{
      setIsLoading(false)
    });
  },[Router])

  const {
    authInfos
  } = useSelector((state: any) => {
    return {
      authInfos: state.authReducer
    }
  })

  return (
    <div className='relative'>
      <Navbar>
        <NavbarLink href='/' text='Home' />
        <NavbarLink href='/posts' text='Posts' />
        <NavbarLink href='/admin/signin' text='Admin' />
        <NavbarLink href='#' text={authInfos.email} className='float-right' />
        {
          authInfos.isAuth && <Button title='Logout' type={ButtonType.NORMAL} onClick={() =>{
            dispatch(logout());
            router.push("/")
          }}/>
        }
      </Navbar>
      {isLoading && <Loading/>}
      {children}
    </div>
  )
}

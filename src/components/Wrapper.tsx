import React from 'react'
import { Navbar } from './Navbar'
import { NavbarLink } from './NavbarLink'
import { useDispatch, useSelector } from 'react-redux'
import { Button, ButtonType } from './Button'
import { logout } from '../redux/reducers/AuthSlice'

interface IWrapper {
  children?: React.ReactNode
}
export const Wrapper: React.FC<IWrapper> = ({ children }) => {

  const dispatch = useDispatch();

  const {
    authInfos
  } = useSelector((state: any) => {
    return {
      authInfos: state.authReducer
    }
  })

  return (
    <div>
      <Navbar>
        <NavbarLink href='/' text='Home' />
        <NavbarLink href='/posts' text='Posts' />
        <NavbarLink href='/admin/signin' text='Admin' />
        <NavbarLink href='#' text={authInfos.email} className='float-right' />
        {
          authInfos.isAuth && <Button title='Logout' type={ButtonType.NORMAL} onClick={() => dispatch(logout())}/>
        }
      </Navbar>
      {children}
    </div>
  )
}

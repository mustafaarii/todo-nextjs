import React from 'react'
import { Navbar } from './Navbar'
import { NavbarLink } from './NavbarLink'

interface IWrapper {
    children?:React.ReactNode
}
export const Wrapper : React.FC<IWrapper> = ({children}) => {
  return (
    <div>
        <Navbar>
            <NavbarLink href='/' text='Home'/>
            <NavbarLink href='/posts' text='Posts' />
            <NavbarLink href='/admin/signin' text='Admin'/>
        </Navbar>
        {children}
    </div>
  )
}

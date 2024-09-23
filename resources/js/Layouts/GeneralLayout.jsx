import { Footer } from '@/Components/Footer'
import { Navbar } from '@/Components/Navbar'
import React from 'react'

const GeneralLayout = ({ children, className }) => {
    return (
        <div className={`min-h-screen w-full ${className}`}>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
    )
}

export default GeneralLayout

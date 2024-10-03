import GeneralLayout from '@/Layouts/GeneralLayout'
import { RichTextRenderer } from '@webiny/react-rich-text-renderer';
import React from 'react'

const AboutUs = ({ data }) => {
    console.log(data)

    return (
        <GeneralLayout>
            <div className="w-1/2 mx-auto my-8 min-h-screen">
                <h1 className="text-3xl font-semibold mb-4 text-center">Tentang Kami</h1>
                <div className='' dangerouslySetInnerHTML={{ __html: data.about_us }} />
            </div>
        </GeneralLayout>
    )
}

export default AboutUs

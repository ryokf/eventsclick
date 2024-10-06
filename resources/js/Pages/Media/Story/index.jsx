import GeneralLayout from '@/Layouts/GeneralLayout'
import React from 'react'
import { TikTokEmbed } from 'react-social-media-embed'

const Story = ({ stories }) => {
    console.log(stories)
    return (
        <GeneralLayout>
            <div className="my-8 lg:my-20 lg:mx-auto lg:w-10/12">
                <h1 className="text-xl lg:text-3xl lg:mb-6 font-semibold mb-2 text-center">Stories</h1>

                <div className=" mx-auto gap-y-8 w-full grid grid-cols-1 lg:grid-cols-3">
                    {
                        stories.map((item) => (
                            <div className="w-fit h-fit flex justify-center" key={item.id}>
                                <div style={{ display: 'flex ', justifyContent: 'center' }}>
                                    <TikTokEmbed url={item.url_video} width={315} />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </GeneralLayout>
    )
}

export default Story

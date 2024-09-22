import GeneralLayout from '@/Layouts/GeneralLayout'
import React from 'react'
import { TextInput } from 'flowbite-react';
import ContentTile from '@/Components/ContentTile';

const Content = () => {
    return (
        <GeneralLayout>
            <Header></Header>
            <ContentSection></ContentSection>
            <CommentSection></CommentSection>
            <RelatedContent></RelatedContent>
        </GeneralLayout>
    )
}

const Header = () => {
    return (
        <div className="w-full p-4 my-4">
            <p className="text-sm text-primary leading-none">Category</p>
            <h1 className="text-2xl font-semibold my-1">Lorem ipsum dolor sit amet.</h1>
            <div className="rounded-lg overflow-hidden mt-4">
                <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
            </div>
            <div className="text-gray-400 text-xs mt-2 flex gap-3">
                <span>903 suka</span>
                <span> 903 komentar </span>
                <span>5 hari lalu</span>
            </div>
        </div>
    )
}

const ContentSection = () => {
    return (
        <div className="w-full p-4 my-4 flex flex-col gap-8 leading-relaxed text-justify">
            <p className="leading-relaxed text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum totam at nam voluptates accusamus obcaecati dignissimos minus ab consectetur repellendus quidem tempore ullam aliquid praesentium iusto rerum repudiandae sapiente esse, eveniet est dolores atque distinctio, deleniti labore. Praesentium, laborum? Temporibus quos sequi in et, sit modi cum quia unde! Cumque aut maxime maiores, atque necessitatibus dolorem explicabo vitae recusandae eius voluptatem quidem incidunt consequatur laudantium, doloribus doloremque aliquam harum quas quibusdam, odio fugit nobis! Modi natus vel voluptatem fugiat sint delectus alias excepturi non provident sit, nesciunt, ratione, debitis laboriosam velit porro praesentium ea doloremque voluptates? Quas minus aperiam placeat!
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum totam at nam voluptates accusamus obcaecati dignissimos minus ab consectetur repellendus quidem tempore ullam aliquid praesentium iusto rerum repudiandae sapiente esse, eveniet est dolores atque distinctio, deleniti labore. Praesentium, laborum? Temporibus quos sequi in et, sit modi cum quia unde! Cumque aut maxime maiores, atque necessitatibus dolorem explicabo vitae recusandae eius voluptatem quidem incidunt consequatur laudantium, doloribus doloremque aliquam harum quas quibusdam, odio fugit nobis! Modi natus vel voluptatem fugiat sint delectus alias excepturi non provident sit, nesciunt, ratione, debitis laboriosam velit porro praesentium ea doloremque voluptates? Quas minus aperiam placeat!
            </p>
        </div>
    )
}

const CommentSection = () => {
    const CommentCard = () => {
        return (
            <div className="flex justify-start gap-4 w-full my-4">
                <div className="aspect-square w-1/6 justify-center items-center object-cover rounded-full overflow-hidden">
                    <img className="object-cover w-full h-full" src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
                </div>
                <div className="w-10/12">
                    <h1 className="">Lorem_ipsum</h1>
                    <p className="text-xs text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ipsum sunt saepe.</p>
                </div>
            </div>
        )

    }

    return (
        <div className="w-full p-4 my-4">
            <h1 className="text-xl font-semibold mb-2">Komentar</h1>
            {
                [1, 2, 3, 4, 5].map((i) => <CommentCard key={i} />)
            }
            <TextInput placeholder="Tulis komentar..." className="mt-6"></TextInput>
        </div>
    )
}

const RelatedContent = () => {
    return (
        <div className="w-full p-4 my-4">
            <h1 className="text-xl font-semibold mb-4">Mungkin anda ingin lihat</h1>
            <div className="grid grid-cols-2 gap-3 w-full">
                {
                    [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <ContentTile key={item}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Content

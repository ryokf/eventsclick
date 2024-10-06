import GeneralLayout from '@/Layouts/GeneralLayout'
import React, { useState } from 'react'
import { Button, TextInput } from 'flowbite-react';
import ContentTile from '@/Components/ContentTile';
import dateFormat from '@/helpers/dateFormat';
import { Link, router, usePage } from '@inertiajs/react';
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import imageToken from '@/helpers/imageToken';

const Content = ({ contents, userComments, likeCount, isLiked, relatedContents}) => {
    return (
        <GeneralLayout>
            <div className="lg:w-1/2 mx-auto">
                <Header id={contents.id} title={contents.title} category={contents.category.title} created_at={contents.created_at} comments={contents.comments} url_video={contents.url_video} likeCount={likeCount} isLiked={isLiked}></Header>
                <ContentSection content={contents.content}></ContentSection>
                <CommentSection comments={contents.comments} userComments={userComments} content_id={contents.id}></CommentSection>
                <RelatedContent relatedContents={relatedContents}></RelatedContent>
            </div>
        </GeneralLayout>
    )
}

const Header = ({id, title, category, created_at, comments, url_video, likeCount , isLiked}) => {
    console.log(likeCount)
    const { auth } = usePage().props;

    let image_id = imageToken(url_video);

    return (
        <div className="w-full p-4 my-4">
            <p className="text-sm lg:text-base text-primary leading-none">{category}</p>
            <h1 className="text-2xl lg:text-4xl font-semibold my-1">{title}</h1>
            <p className="text-xs lg:text-base text-gray-400 leading-none">{dateFormat(created_at)}</p>
            <div className="rounded-lg overflow-hidden mt-4">
                <img src={`https://i.ytimg.com/vi/${ image_id }/maxresdefault.jpg`} alt="" />
            </div>
            <div className="text-gray-400 text-xs lg:text-base mt-2 flex gap-3">
                <span> 
                    <Link 
                        href={`/media/like/content`} 
                        method={isLiked ? 'delete' : 'post'} 
                        data={{ user_id : auth.user.id, content_id : id }} 
                        className="transition hover:text-red-500"
                        only={["isLiked", "likeCount"]}
                        preserveScroll
                    >
                        { isLiked ? <MdFavorite className="text-red-500 inline text-xl" /> : <MdFavoriteBorder className="text-red-500 inline text-xl" /> }
                    </Link>
                    <span className="text-gray-400 text-xs lg:text-base">
                        {likeCount} suka
                    </span>
                </span>
                <span> {Object.keys(comments).length} komentar </span>
            </div>
        </div>
    )
}

const ContentSection = ({ content }) => {
    return (
        <div className="w-full p-4 my-4 flex flex-col gap-8 leading-relaxed text-justify">
            <p className="leading-relaxed text-justify">
                {content}
            </p>
        </div>
    )
}

const CommentSection = ({ comments, userComments, content_id }) => {
    const [newComment, setNewComment] = useState("");
    const { auth } = usePage().props;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        router.post('/media/comment', {
            comment: newComment,
            user_id: auth.user.id,
            content_id: content_id
        })
    }

    const CommentCard = ({ username, comment }) => {
        return (
            <div className="flex justify-start gap-4 w-full my-4">
                <div className="aspect-square w-1/6 lg:w-16 justify-center items-center object-cover rounded-full overflow-hidden">
                    <img className="object-cover w-full h-full" src={`https://ui-avatars.com/api/?name=${ username }&background=random&color=random`} alt="" />
                </div>
                <div className="w-10/12">
                    <h1 className="lg:text-lg">{username}</h1>
                    <p className="text-xs lg:text-base text-gray-400">{comment}</p>
                </div>
            </div>
        )

    }

    return (
        <div className="w-full p-4 my-4">
            <h1 className="text-xl lg:text-2xl font-semibold mb-2">Komentar</h1>
            {
                comments.map((i, k) => <CommentCard key={i} username={userComments[k].name} comment={i.comment} />)
            }
            <div className="flex w-full items-baseline gap-2">
                <TextInput placeholder="Tulis komentar..." className="mt-6 w-full" onChange={(e) => setNewComment(e.target.value)} value={newComment}></TextInput>
                <Button type="submit" onClick={handleSubmit} className="bg-primary">Kirim</Button>
            </div>
        </div>
    )
}

const RelatedContent = ({ relatedContents }) => {
    console.log(relatedContents)
    return (
        <div className="w-full p-4 my-4">
            <h1 className="text-xl lg:text-2xl font-semibold mb-2 lg:mb-4">Mungkin anda ingin lihat</h1>
            <div className="grid grid-cols-2 gap-3 lg:gap-5 lg:grid-cols-3 w-full">
                {
                    relatedContents.map((item) => (
                        <ContentTile href={`/media/program/content?id=${item.id}`} id={item.id} title={item.title} category={item.category} created_at={item.created_at} image={item.image} url_video={item.url_video} key={item.id}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Content

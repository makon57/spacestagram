
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { oneLikeHeart } from "../store/posts";
import './Home.css'


const Home = () => {

    const dispatch = useDispatch()
    const [showMore, setShowMore] = useState(false)
    const [heart, setHeart] = useState(false)
    const [showHeart, setShowHeart] = useState(false)

    useEffect(() => {
        console.log(heart)
    },[heart])

    const largeHeart = () => {
        setShowHeart(true)
    }

    const likeHeart = async (post) => {
        const res = await dispatch(oneLikeHeart(post, allPosts))
        if (res.like) {
            setHeart(false)
        } else {
            setHeart(true)
        }
    }

    const allPosts = Object.values(useSelector((state) => state.posts))
    allPosts.forEach(post => allPosts.indexOf(post) % 2 === 0 ? post.like = false : post.like = true)
    console.log(allPosts)

    return (
        <>
            <div>
                <ul className='posts-container'>
                    {allPosts?.map((post, i) => (
                        <li key={i} className='post-container' onDoubleClick={largeHeart}>
                            <>
                                <img src={post.url} alt='' className='image'/>
                                <div className='info-container'>
                                    <button onClick={() => likeHeart(post)} className='like'>{post.like ? <img src="https://i.imgur.com/NsLkntP.png" alt='heart' /> : <img src="https://i.imgur.com/pa47Jev.png" alt='empty-heart' />}</button>
                                    <>
                                        {showMore && post.explanation ?
                                        <>
                                            <p className="explanation">{post.explanation}</p>
                                            { post.copyright ? <p className='copyright'>{post.copyright}</p> : <p>Anonymous</p> }
                                        </>
                                        :
                                        <>
                                            <p className="explanation">{(post.explanation).substring(0, 250)}</p>
                                        </>
                                        }
                                        <span onClick={() => setShowMore(!showMore)} className='more-less'>{ showMore ? 'Show less' : 'Show more' }</span>
                                    </>
                                    <p className='date'>{post.date}</p>
                                </div>
                            </>
                            { showHeart ? <div id='heart'><img src="https://i.imgur.com/NsLkntP.png" alt='heart' className='bottom'/></div>
                            : null }
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Home;

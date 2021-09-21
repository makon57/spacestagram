
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import './Home.css'


const Home = () => {

    const [showMore, setShowMore] = useState(false)
    const [heart, setHeart] = useState(false)
    const [icon, setIcon] = useState(<img src="https://i.imgur.com/pa47Jev.png" alt='empty-heart' />)
    const [showHeart, setShowHeart] = useState(false)

    useEffect(() => {
        if (heart  !== true) {
            setIcon(<img src="https://i.imgur.com/pa47Jev.png" alt='empty-heart' />)
        } else {
            setIcon(<img src="https://i.imgur.com/NsLkntP.png" alt='heart' />)
        }
    },[heart])

    const largeHeart = () => {
        setShowHeart(true)
    }


    const posts = Object.values(useSelector((state) => state.posts))

    return (
        <>
            <div>
                <ul className='posts-container'>
                    {posts?.map((post, i) => (
                        <li key={i} className='post-container' onDoubleClick={largeHeart}>
                            <>
                                <img src={post.url} alt='' className='image'/>
                                <div className='info-container'>
                                    <button onClick={() => setHeart(!heart)} className='like'>{icon}</button>
                                    { post.copyright ? <p className='copyright'>{post.copyright}</p> : <p>Anonymous</p> }
                                    <>
                                        {showMore ? <p className="explanation">{post.explanation}</p> : <p className="explanation">{(post.explanation).substring(0, 250)}</p>}
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

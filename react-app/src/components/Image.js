import { useState } from "react"


const Image = ({post}) => {

    const [showMore, setShowMore] = useState(false)
    const [heart, setHeart] = useState(false)

    const likeHeart = (post) => {

        if (post['like'] === false) {
            post.like = true
        } else {
            post.like = false;
        }

        setHeart(!heart)
        return
    }

    return (
        <>
            <img src={post.url} alt='' className='image'/>
            <div className='info-container'>
                <button onClick={() => likeHeart(post)} className='like'>{ post.like ? <img src="https://i.imgur.com/NsLkntP.png" alt='heart' /> : <img src="https://i.imgur.com/pa47Jev.png" alt='empty-heart' />}</button>
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
    )
}

export default Image

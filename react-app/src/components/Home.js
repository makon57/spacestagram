
import { useSelector } from "react-redux";
import './Home.css'
import Image from "./Image";

const Home = () => {

    const allPosts = Object.values(useSelector((state) => state.posts))
    allPosts.forEach(post => allPosts.indexOf(post) % 2 === 0 ? post.like = false : post.like = true)


    return (
        <>
            <div>
                <ul className='posts-container'>
                    {allPosts?.map((post, i) => (
                        <li key={i} className='post-container' >
                            <Image post={post} />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Home;

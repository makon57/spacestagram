// import { useEffect } from "react";
import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchAllPosts } from "../store/posts";
import './Home.css'

const Home = () => {
    const [icon, setIcon] = useState(<i className="far fa-heart"></i>)

    const updateLike = () => {
        if (icon === <i class="far fa-heart"></i>) {
            setIcon(<i class="fas fa-heart"></i>)
        } else {
            setIcon(<i className="far fa-heart"></i>)
        }
    }

    // const posts = Object.values(useSelector((state) => state.posts))
    const allPosts = {
        0: {url: "https://assets-global.website-files.com/6005fac27a49a9cd477afb63/60576840e7d265198541a372_bavassano_homepage_gp.jpg", description: "Lorem ipsum cum loaude of trheyrin grifhy.", date: "date-date-date"},
        1: {url: "https://assets-global.website-files.com/6005fac27a49a9cd477afb63/60576840e7d265198541a372_bavassano_homepage_gp.jpg", description: "Lorem ipsum cum loaude of trheyrin grifhy.", date: "date-date-date"},
        2: {url: "https://assets-global.website-files.com/6005fac27a49a9cd477afb63/60576840e7d265198541a372_bavassano_homepage_gp.jpg", description: "Lorem ipsum cum loaude of trheyrin grifhy.", date: "date-date-date"},
        3: {url: "https://assets-global.website-files.com/6005fac27a49a9cd477afb63/60576840e7d265198541a372_bavassano_homepage_gp.jpg", description: "Lorem ipsum cum loaude of trheyrin grifhy.", date: "date-date-date"},
        4: {url: "https://assets-global.website-files.com/6005fac27a49a9cd477afb63/60576840e7d265198541a372_bavassano_homepage_gp.jpg", description: "Lorem ipsum cum loaude of trheyrin grifhy.", date: "date-date-date"},
    }
    const posts = Object.values(allPosts)

    return (
        <>
            <div>
                <ul className='posts-container'>
                    {posts?.map((post, i) => (
                        <li key={i} className='post-container'>
                            <img src={post.url} alt='' className='image'/>
                            <div className='info-container'>
                                <p className="description">{post.description}</p>
                                <p className='date'>{post.date}</p>
                                <button onClick={() => updateLike()} className='like'>{icon}</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Home;

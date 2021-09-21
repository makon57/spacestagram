
const ALL_POSTS = 'posts/ALL_POSTS';
const LIKE_POST = 'posts/LIKE_POST';


const getAllPosts = (posts) => ({
    type: ALL_POSTS,
    posts,
})

const likeOne = (id, post) => ({
    type: LIKE_POST,
    id,
    post,
})


export const fetchAllPosts = () => async (dispatch) => {

    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=kZyLA5auBO1bQRcfqA2lh6o0TnuN7XZuZI6hbwH8&count=5`);

    const data = await res.json();
    if (res.ok) {
        if (data.errors) {
            return;
        } else {
            dispatch(getAllPosts(data))
        }
    }
    return data
}

export const oneLikeHeart = (post, allPosts) => async (dispatch) => {

    let theOne = allPosts.filter(p => allPosts.indexOf(p) === allPosts.indexOf(post))
    if (post.like) {
        theOne.like = false
    } else {
        theOne.like = true
    }
    dispatch(likeOne(allPosts.indexOf(theOne), theOne))
    return theOne
}

export default function reducer(state = [], action) {
    switch (action.type) {
        case ALL_POSTS:
            return [...state, ...action.posts];
        case LIKE_POST:
            return [...state.splice((item, index) => action.id, 1, action.post)];
        default:
            return state;
    }
}

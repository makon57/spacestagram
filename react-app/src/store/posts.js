
const ALL_POSTS = 'posts/ALL_POSTS';

const getAllPosts = (posts) => ({
    type: ALL_POSTS,
    posts,
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

export default function reducer(state = [], action) {
    switch (action.type) {
        case ALL_POSTS:
            return [...state, ...action.posts];
        default:
            return state;
    }
}

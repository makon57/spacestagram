

const ALL_POSTS = 'posts/ALL_POSTS';

const getAllPosts = (posts) => ({
    type: ALL_POSTS,
    posts,
})

export const fetchAllPosts = () => async (dispatch) => {
    let total = 0;
    let posts = {}

    while (total < 2) {
        const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`);
        if (res.ok) {
            const data = await res.json();
            if (data.errors) {
                return;
            } else {
                posts[total] = data;
            }
        }
        total++
    }
    dispatch(getAllPosts(posts))
    return posts
}

export default function reducer(state = [], action) {
    switch (action.type) {
        case ALL_POSTS:
            return {...state, ...action.posts};
        default:
            return state;
    }
}

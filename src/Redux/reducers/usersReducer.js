const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
    users: [
        // {id: 1, photoUrl: "https://s7.cdn.eg.ru/wp-content/uploads/2020/05/nag-pre022109.jpg", followed: false, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 2, photoUrl: "https://s7.cdn.eg.ru/wp-content/uploads/2020/05/nag-pre022109.jpg", followed: true, fullName: 'Sasha', status: 'I am a boss too', location: {city: 'Moscow', country: 'Russia'}},
        // {id: 3, photoUrl: "https://s7.cdn.eg.ru/wp-content/uploads/2020/05/nag-pre022109.jpg", followed: false, fullName: 'Andrew', status: 'I am a boss too', location: {city: 'Kiev', country: 'Ukrain'}},
    ]
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW : {
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                }),
            }
        }
        case UNFOLLOW : {
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                }),
            }

        }
        case SET_USERS: {
            return {
                ...state, 
                users: [...action.users]
            }
        }
    default: return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const serUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;
import { IPost } from '../../interfaces/interfaces';
import { Action, ActionType } from '../actionTypes';

const initialState: State = {
posts: null,
};

interface State {
posts: IPost[] | null;
}

export const postsReducer = (
state: State = initialState,
action: Action
): State => {
switch (action.type) {
case ActionType.CREATE_POSTS_BY_ARTICLE:
return {
...state,
posts: action.payload,
};
case ActionType.DELETE_POST:
return {
...state,
posts: state.posts?.filter(
(post: IPost) => post.id !== action.payload
) || null,
};
case ActionType.ADD_FAVOURITES_POST:
return {
...state,
posts: state.posts?.map((post: IPost) => {
if (post.id === action.payload) {
return { ...post, like: !post.like };
}
return post;
}) || null,
};
case ActionType.UPDATE_POST:
return {
...state,
posts: state.posts?.map((post: IPost) => {
if (post.id === action.payload.id) {
return action.payload;
}
return post;
}) || null,
};
default:
return state;
}
};
import { getInitialData } from '../utils/api'
import { receiveTweets } from './tweets'
import { receiveUsers } from "./users";
import { setAuthedId } from "./authedUser";

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData(){
    return (dispatch) => {
        return getInitialData().then(({users,tweets}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveTweets(tweets))
            dispatch(setAuthedId(AUTHED_ID))
        })
    }
}
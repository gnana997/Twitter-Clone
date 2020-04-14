import logger from './loggers'
import {applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

export default applyMiddleware(
    thunk,
    logger
)

import { combineReducers } from 'redux'
import {reducers as listsReducers } from './lists'
import { reducers as taskReducers } from './task'
import { reducers as taskListReducers } from './taskList'
import { reducers as stepReducers } from './step'
import { reducers as menuReducers } from './menu'
import { reducers as activeReducers } from './active'

const reducers = combineReducers({
    listsReducers,
    taskReducers,
    taskListReducers,
    stepReducers,
    menuReducers,
    activeReducers,
})

export {reducers}
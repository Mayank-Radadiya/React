import {configureStore} from '@reduxjs/toolkit'
import todoreducer from '../Features/Todo/TodoSlice'

export const Store = configureStore({
    reducer:todoreducer
})
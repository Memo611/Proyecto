
import { configureStore } from '@reduxjs/toolkit'
import { getUserReducer } from './reducer'

export default configureStore({
    reducer: {
        getUsers: getUserReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})
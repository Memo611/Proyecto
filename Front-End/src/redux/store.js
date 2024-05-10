
import { configureStore } from '@reduxjs/toolkit'
import { getUserReducer } from './usersSlice'
import {getRoleReducer} from  './RolesSlice'

export default configureStore({
    reducer: {
        getUsers: getUserReducer,
        getRole: getRoleReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});
import { configureStore } from '@reduxjs/toolkit'
import CategorySlice from './reducers/CategorySlice'
import ContentSlice from './reducers/ContentSlice'

export const store = configureStore({
  reducer: {
    content: ContentSlice,
    category: CategorySlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
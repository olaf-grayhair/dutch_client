import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { createWord, fetchCategory, fetchContent } from "../actions/ContentAction";

interface IContent {
    _id: string,
    dutchWord: string,
    englishWord: string,
    transcription: string,
    category: string,
    subCategory: string,
    imgUrl: string,
}

interface PostState {
    isLoading: boolean;
    error: string;
    content: IContent[];
}

const initialState: PostState = {
    content: [],
    isLoading: false,
    error: '',
}

const ContentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {},
    extraReducers: {
        ///FETCH CONTENT!
        [fetchContent.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchContent.fulfilled.type]: (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.error = ''
            state.content = action.payload

        },
        [fetchContent.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
        ///CREATE WORD
        [createWord.pending.type]: (state) => {
            state.isLoading = true
        },
        [createWord.fulfilled.type]: (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.error = ''
            state.content.push(action.payload);

        },
        [createWord.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
    }

})

// export const { increment } = ContentSlice.actions
export default ContentSlice.reducer
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { createCategory, fetchCategory } from "../actions/ContentAction";

interface ICategory {
    _id: string,
    category: string,
    subCategory: string[],
    bool: boolean,
    __v: number
}

interface State {
    isLoading: boolean;
    error: string;
    category: ICategory[];
    categoryValue: string;
}

const initialState: State = {
    category: [],
    isLoading: false,
    error: '',
    categoryValue: '',

}

const CategorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        openSubCategory(state, action: PayloadAction<string>) {
            state.category = state.category.map(el => el.category === action.payload
                ? { ...el, bool: !el.bool }
                : el
            )
        },
        saveCategory(state, action: PayloadAction<string>) {
            state.categoryValue = action.payload
        },
    },
    extraReducers: {
        ///FETCH CATEGORY!
        [fetchCategory.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchCategory.fulfilled.type]: (state, action: PayloadAction<ICategory[]>) => {
            state.isLoading = false;
            state.error = ''
            // debugger
            state.category = action.payload

        },
        [fetchCategory.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
        ///CREATE CATEGORY
        [createCategory.pending.type]: (state) => {
            state.isLoading = true
        },
        [createCategory.fulfilled.type]: (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.error = ''
            state.category.push(action.payload);

        },
        [createCategory.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
    }

})

export const { openSubCategory, saveCategory } = CategorySlice.actions
export default CategorySlice.reducer
import axios from "axios";
import IContent from "../reducers/ContentSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";


interface IContent { 
    _id: string, 
    dutchWord: string, 
    englishWord: string, 
    transcription: string, 
    category: string, 
    subCategory: string, 
    imgUrl: string, 
}

interface Iword { 
    dutchWord: string, 
    englishWord: string, 
    transcription: string, 
    category: string, 
    subCategory: string, 
    imgUrl: string, 
}

interface ICategory { 
    _id: string, 
    category: string,
    subCategory: string[],
    bool: boolean
}

interface ICreateCategory {  
    category: string,
    subCategory: string[],
}

export const fetchContent = createAsyncThunk(
    'content',
    async () => {
        try {
            const response = await axios.get<IContent>(`http://localhost:3003/`)
            // console.log(response.data, 'response.data');
            
            return response.data
        } catch (e) {
            console.log('get error')
        }
    }
)

export const fetchCategory = createAsyncThunk(
    'category',
    async () => {
        try {
            const response = await axios.get<IContent>(`http://localhost:3003/category`)
            
            return response.data
        } catch (e) {
            console.log('get error')
        }
    }
)

export const createWord = createAsyncThunk(
    'word/create',
    async (word: Iword) => {
        console.log(word, 'word');
        
        try {
            const response = await axios.post<Iword>(`http://localhost:3003/pullWord`, word)
            console.log(response.data, 'response.data');
            
            return response.data
        } catch (e) {
            console.log(e,'get error')
        }
    }
)

export const createCategory = createAsyncThunk(
    'category/create',
    async (category: ICreateCategory) => {
        console.log(category, 'category');
        
        try {
            const response = await axios.post<ICreateCategory>(`http://localhost:3003/pullCategory`, category)
            console.log(response.data, 'response.data');
            
            return response.data
        } catch (e) {
            console.log('get error')
        }
    }
)


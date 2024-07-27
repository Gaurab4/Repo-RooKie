// store.ts
'use client' 

import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

interface Label {
    id: number;
    name: string;
    color: string;
  }
  
  interface Issue {
    id: number;
    title: string;
    html_url: string;
    labels: Label[];
  }
  
interface IssuesState {
  issues: Issue[];
}

const initialState: IssuesState = {
  issues: []
};

const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    setIssues: (state, action: PayloadAction<Issue[]>) => {
      state.issues = action.payload;
    }
  }
});

export const { setIssues } = issuesSlice.actions;

const store = configureStore({
  reducer: {
    issues: issuesSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;

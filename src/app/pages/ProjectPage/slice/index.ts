import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { NavigateState } from './types';

export const initialState: NavigateState = {
  navigateTo: '/',
  id: 0,
  section: '',
};

const slice = createSlice({
  name: 'navigate',
  initialState,
  reducers: {
    setNavigate(state, action: PayloadAction<string>) {
      state.section = action.payload;
    },
  },
});

export const { actions: setNavigate, reducer } = slice;

export const useNavigateSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions, reducer };
};

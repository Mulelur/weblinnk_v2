import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { SwipeableState } from './types';

export const initialState: SwipeableState = {
  open: false,
};

const slice = createSlice({
  name: 'swipeable',
  initialState,
  reducers: {
    setOpen(state, action: PayloadAction<boolean>) {
      state.open = action.payload;
    },
  },
});

export const { actions: swipeableActions, reducer } = slice;

export const useSwipeableSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions, reducer };
};

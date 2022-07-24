import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

// import { githubRepoFormSaga } from './saga';
import { UserState } from './types';

export const initialState: UserState = {
  username: '',
  email: '',
  password: '',
  confirmed: false,
  role: '',
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    changeEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;

      return state;
    },
  },
});

export const { actions: githubRepoFormActions, reducer } = slice;

export const useGithubRepoFormSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  // useInjectSaga({ key: slice.name, saga: githubRepoFormSaga });
  return { actions: slice.actions };
};

import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

// First select the relevant part from the state
const selectUser = (state: RootState) => state.user || initialState;

export const selectUsername = createSelector(
  [selectUser],
  user => user.username,
);

// export const selectLoading = createSelector(
//   [selectDomain],
//   githubRepoFormState => githubRepoFormState.loading,
// );

// export const selectError = createSelector(
//   [selectDomain],
//   githubRepoFormState => githubRepoFormState.error,
// );

// export const selectRepos = createSelector(
//   [selectDomain],
//   githubRepoFormState => githubRepoFormState.repositories,
// );

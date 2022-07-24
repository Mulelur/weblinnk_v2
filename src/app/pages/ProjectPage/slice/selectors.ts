import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

// First select the relevant part from the state
const selectNavigate = (state: RootState) => state.navigate || initialState;

export const selectNav = createSelector(
  [selectNavigate],
  navigateState => navigateState,
);

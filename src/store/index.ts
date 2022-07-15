import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import uiSlice from './ui-slice';
import searchSlice from './search-slice';

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    search: searchSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

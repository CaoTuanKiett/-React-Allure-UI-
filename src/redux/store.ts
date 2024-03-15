// store.ts
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import languageReducer from "./languageSlice";

export interface RootState {
  theme: ReturnType<typeof themeReducer>;
  language: ReturnType<typeof languageReducer>;
}

const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import appStateSlice from "./slice/appStateSlice";
// import saga from "./saga/saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    appState: appStateSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

// sagaMiddleware.run(saga);

export default store;
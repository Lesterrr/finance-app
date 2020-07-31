import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { compose, combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import { PersistGate } from "redux-persist/integration/react";
import { createFilter } from "redux-persist-transform-filter";

import authReducer from "./app/store/reducers/auth";
import walletReducer from "./app/store/reducers/wallet";
import categoryReducer from "./app/store/reducers/category";
import RootNavigation from "./app/navigation/RootNavigation";
import { watchAuth } from "./app/store/sagas";

// For redux devtools.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store only a subset of your state of reducer one
const saveSubsetFilter = createFilter("auth", ["token", "userID"]);

const persistConfig = {
  // Root
  key: "root",
  // Storage Method (React Native)
  storage: AsyncStorage,
  whitelist: ["auth", "wallet", "category"], // only auth will be persisted
  transforms: [saveSubsetFilter],
};

// Collections of reducer.
const rootReducer = combineReducers({
  auth: authReducer,
  wallet: walletReducer,
  category: categoryReducer,
});

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Instantiate saga.
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// Middleware: Redux Persist Persistor
let persistor = persistStore(store);

// Run sagas
sagaMiddleware.run(watchAuth);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <RootNavigation />
          <StatusBar style="auto" />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

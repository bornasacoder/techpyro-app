import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import userReducer from "./userRedux";
import productReducer from "./productRedux";
// import userCallReducer from "./usersCallRedux";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
}
const rootReducer = combineReducers({
  
    product: productReducer,
    
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = 
     configureStore({
     reducer: persistedReducer,
     middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware({
        serializableCheck:{
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})

export let persistor = persistStore(store);
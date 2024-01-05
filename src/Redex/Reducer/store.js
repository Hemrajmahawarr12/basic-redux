import { applyMiddleware, createStore } from "redux";
import  ReactDOM  from "react-dom/client";
import {thunk} from "redux-thunk";
import React from "react";
import reducers from './index'

export const store = createStore(reducers, {}, applyMiddleware(thunk))


import {
  ActionCreatorWithoutPayload,
  CaseReducerActions,
  Dispatch,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import { ExtractDispatchExtensions } from "@reduxjs/toolkit/dist/tsHelpers";
import { AppTo1CWindow } from "../react-app-env";
import { increment, selectCount } from "../store/counter";
import { globalDispatch, store } from "../store/store";

export interface AppTo1C {
  setBaseUrl: (url: string) => void;
  close: () => void;
  counter: {
    increment: any;
    get: any;
  };
}

const setBaseUrl = (url: string): void => {
  const elems = document.getElementsByTagName("base");

  if (elems.length > 0) {
    elems[0].href = url;
  }
};

const close = () => {};

export const initAppTo1C = () => {
  window.appTo1C = {
    setBaseUrl,
    close,
    counter: {
      increment: () => {
        globalDispatch(increment());
        return true;
      },
      get: () => selectCount(store.getState()),
    },
  };
};

declare var window: AppTo1CWindow;

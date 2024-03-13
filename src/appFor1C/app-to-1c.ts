import { AppTo1CWindow } from "@/app-env";

export interface AppTo1C {
  setBaseUrl: (url: string) => void;
  close: () => void;
}

const setBaseUrl = (url: string): void => {
  const elems = document.getElementsByTagName("base");

  if (elems.length > 0) {
    elems[0].href = url;
  }
};

const close = () => { };

export const initAppTo1C = () => {
  window.appTo1C = {
    setBaseUrl,
    close,
  };
};

declare var window: AppTo1CWindow;

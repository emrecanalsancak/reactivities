import { UIStore } from "./uiStore";
import { createContext } from "react";

interface Store {
  uiStore: UIStore;
}

export const store: Store = {
  uiStore: new UIStore(),
};

export const StoreContext = createContext(store);

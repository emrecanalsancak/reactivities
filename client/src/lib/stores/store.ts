import { ActivityStore } from "./activityStore";
import { UIStore } from "./uiStore";
import { createContext } from "react";

interface Store {
  uiStore: UIStore;
  activityStore: ActivityStore;
}

export const store: Store = {
  uiStore: new UIStore(),
  activityStore: new ActivityStore(),
};

export const StoreContext = createContext(store);

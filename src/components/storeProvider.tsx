import { Provider } from "react-redux";
import { store } from "../store/store.ts";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const StoreProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;

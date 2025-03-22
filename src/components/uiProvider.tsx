import { ReactNode, useEffect } from "react";
import "preline/preline";
import { IStaticMethods } from "preline/preline";
import { useLocation } from "react-router";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

type Props = {
  children: ReactNode;
};

const UiProvider = ({ children }: Props) => {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return children;
};

export default UiProvider;

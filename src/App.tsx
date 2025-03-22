import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./app/home";
import StoreProvider from "./components/storeProvider.tsx";
import UiProvider from "./components/uiProvider.tsx";
import SignInPage from "./app/signIn";
import { JSX, ReactNode } from "react";

const App = (): JSX.Element => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PageWrapper>
                <HomePage />
              </PageWrapper>
            }
          />
          <Route
            path="/sign-in"
            element={
              <PageWrapper>
                <SignInPage />
              </PageWrapper>
            }
          />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
};

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return <UiProvider>{children}</UiProvider>;
};
export default App;

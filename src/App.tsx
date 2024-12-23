import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/globals";
import Repositories from "./pages/repositories";
import SignIn from "./pages/auth/sign-in";
import { ChildrenProps } from "./types";

type RouteConfig = {
  path: string;
  element: JSX.Element;
};

const LayoutRoute = ({ children }: ChildrenProps) => (
  <Layout>{children}</Layout>
);

const AuthLayoutRoute = ({ children }: ChildrenProps) => <>{children}</>;

const routes: RouteConfig[] = [
  {
    path: "/",
    element: <Navigate to="/sign-in" replace />,
  },
  {
    path: "/sign-in",
    element: (
      <AuthLayoutRoute>
        <SignIn />
      </AuthLayoutRoute>
    ),
  },
  {
    path: "/repositories",
    element: (
      <LayoutRoute>
        <Repositories />
      </LayoutRoute>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/sign-in" replace />,
  },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

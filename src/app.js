import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import OrderSummary from "./components/OrderSummary";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import Login from "./components/login";
import Profile from "./components/Profile";
import UserContext from "./components/utils/Usercontext";
import { Provider } from "react-redux";
import Store from "./components/utils/Store";
import Cart from "./components/Cart";
import { useAuth0 } from "@auth0/auth0-react";
import PaymentPage from "./components/paymentpage";

const Contact = lazy(() => import("./components/Contact"));
const AboutUs = lazy(() => import("./components/Aboutus"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Anubhav ",
    email: "Anubhavbaranwal08@gmail.com",
  });
  return (
    <Auth0Provider
      domain="dev-nw30un4mvx5b7qik.us.auth0.com"
      clientId="of6yU8oGa9U7iafy4fQClWUog7XunUJx"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Provider store={Store}>
        <UserContext.Provider value={{ user: user }}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </Auth0Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/Aboutus",
        element: (
          <Suspense fallback={<h2>loading the page...</h2>}>
            <AboutUs />
          </Suspense>
        ),
        children: [
          {
            path: "Profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/payment",
        element: <PaymentPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/ordersummary",
        element: <OrderSummary />,
      },
      {
        path: "/Contact",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Contact />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

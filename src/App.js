import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body";
import BookingForm from "./Components/BookingForm";
import PriceEstimator from "./Components/PriceEstimator";
import Tracking from "./Components/Tracking";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/book",
      element: <BookingForm />,
    },
    {
      path: "/price",
      element: <PriceEstimator />,
    },
    {
      path: "/track",
      element: <Tracking />,
    },
  ]);

  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;

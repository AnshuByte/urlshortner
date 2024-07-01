import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/app-layout";
import LandingPage from "./pages/landing-page";

const router = createBrowserRouter({
  element: <AppLayout />,
  Children: [
    {
      path: "/",
      element: <LandingPage />,
    },
  ],
});
function App() {
  return (
    <div className="text-2xl">
      hi
      <div>hi</div>
    </div>
  );
}
export default App;

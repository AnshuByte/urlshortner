import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Children } from "react";

const router = createBrowserRouter({
  element: <AppLayout />,
  Children: [],
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

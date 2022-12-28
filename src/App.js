import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes";
import Cursor from "./components/pages/Cursor/Cursor";

function App() {
  return (
    <div>
      <Cursor></Cursor>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;

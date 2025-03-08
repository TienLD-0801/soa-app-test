import { RouterProvider } from "react-router-dom";
import { myRouter } from "../routes";

const App = () => {
  return <RouterProvider router={myRouter} />;
};

export default App;

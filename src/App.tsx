import { Outlet } from "react-router";
import Header from "./layout/Header";

function App() {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
}

export default App;

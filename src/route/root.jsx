import { Outlet } from "react-router-dom";
import Navbar from "./navigation";

function MainRoot() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default MainRoot;

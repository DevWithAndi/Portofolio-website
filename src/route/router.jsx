import { createBrowserRouter } from "react-router-dom";
import MainRoot from "./root";
import AboutPages from "../presentation/pages/about_pages";
import ContactPages from "../presentation/pages/contact_pages";
import WorkPages from "../presentation/pages/work_pages";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        index: true,
        element: <AboutPages />,
      },
      {
        path: "about",
        element: <AboutPages />,
      },
      {
        path: "contact",
        element: <ContactPages />,
      },
      {
        path: "work",
        element: <WorkPages />,
      },
    ],
  },
]);

export default MainRouter;

import { RouterProvider } from "react-router-dom";
import { routes } from "./utils/app.routes";
import { ThemeToggle } from "./components/theme-toggle.component";

export function App() {
    return (
        <>
            <ThemeToggle />
            <RouterProvider router={routes} />
        </>
    );
}

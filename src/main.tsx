import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";

const savedTheme = localStorage.getItem("current-theme") ?? "light";
document.querySelector("html")!.setAttribute("data-bs-theme", savedTheme);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>
);

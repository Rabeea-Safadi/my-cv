import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "./index.css";

const savedTheme = localStorage.getItem("current-theme") ?? "light";
document.querySelector("html")!.setAttribute("data-bs-theme", savedTheme);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </StrictMode>
);

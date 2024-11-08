export function ThemeToggle() {
    function onClick() {
        const currentTheme = localStorage.getItem("current-theme") ?? "light";
        const targetTheme = currentTheme == "light" ? "dark" : "light";

        localStorage.setItem("current-theme", targetTheme);
        document.querySelector("html")!.setAttribute("data-bs-theme", targetTheme);
    }

    return (
        <div className="position-fixed bottom-0 end-0">
            <button onClick={onClick} className="btn btn-secondary rounded-pill m-3">
                Toggle Theme
            </button>
        </div>
    );
}

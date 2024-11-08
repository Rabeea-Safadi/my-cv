import { useState } from "react";
import { RsModal } from "./components/modal.component";

export function App() {
    const [modalShown, SetModalShown] = useState<boolean>(false);

    function onDoSomething() {
        SetModalShown(true);
    }

    function onHideModal() {
        SetModalShown(false);
    }

    function onThemeSwitch() {
        const currentTheme = localStorage.getItem("current-theme") ?? "light";
        const targetTheme = currentTheme == "light" ? "dark" : "light";

        localStorage.setItem("current-theme", targetTheme);
        document.querySelector("html")!.setAttribute("data-bs-theme", targetTheme);
    }

    return (
        <main className="container my-5">
            <div className="vstack align-items-center gap-3">
                <h1 className="fs-2">Hello, World!</h1>
                <button className="btn btn-success" onClick={onDoSomething}>
                    Do Something
                </button>
                <button className="btn btn-secondary" onClick={onThemeSwitch}>
                    Switch Theme
                </button>
            </div>

            <RsModal isShown={modalShown} onHide={onHideModal} title="a title about doing something idk">
                <>
                    You're really doing something <br />
                    Good for you!
                </>
            </RsModal>
        </main>
    );
}

export function App() {
    function onDoSomething() {
        alert("Did something!");
    }

    return (
        <main className="container my-5">
            <div className="vstack align-items-center">
                <h1 className="fs-2">Hello, World!</h1>
                <button className="btn btn-success" onClick={onDoSomething}>
                    Do Something
                </button>
            </div>
        </main>
    );
}

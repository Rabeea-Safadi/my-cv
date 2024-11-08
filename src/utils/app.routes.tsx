import { createBrowserRouter } from "react-router-dom";
import { Posts } from "../pages/posts.page";
import { Post } from "../pages/post.page";

export const routes = createBrowserRouter(
    [
        {
            path: "/",
            element: <Posts />
        },
        {
            path: "/:id",
            element: <Post />
        }
    ],
    { basename: "/my-cv" }
);

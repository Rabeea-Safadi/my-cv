import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../services/api.service";
import { Link } from "react-router-dom";

export function Posts() {
    const { data: posts, isLoading: arePostsLoading } = useQuery({
        refetchOnMount: false,
        staleTime: 1000 * 60 * 5,
        queryKey: ["posts"],
        queryFn: () => {
            return getPosts();
        }
    });

    if (arePostsLoading) {
        return (
            <div className="container my-5">
                <h1 className="fs-2 text-center">Loading Posts...</h1>
            </div>
        );
    }

    return (
        <main className="container-fluid my-5">
            <div className="row row-gap-5">
                {posts?.map((post, index) => (
                    <div key={`post_card_${index}`} className="col-md-12">
                        <Link
                            to={`/${post.id}`}
                            className="vstack text-decoration-none text-body gap-3 shadow justify-content-between rounded-3 p-5"
                        >
                            <div className="fs-5 fw-bold text-truncate">{post.title}</div>
                            <div className="fs-5 text-truncate">{post.body}</div>
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    );
}

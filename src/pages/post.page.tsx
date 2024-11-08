import { useParams } from "react-router-dom";
import { getComments, getPost } from "../services/api.service";
import { useQuery } from "@tanstack/react-query";

export function Post() {
    const { id: postId } = useParams<{ id: string }>();

    const { data: post, isLoading: postsLoading } = useQuery({
        refetchOnMount: false,
        queryKey: [`single_post_${postId}`],
        queryFn: () => {
            return getPost(postId!);
        }
    });

    const { data: comments, isLoading: commentsLoading } = useQuery({
        refetchOnMount: false,
        queryKey: [`single_post_comments_${postId}`],
        queryFn: () => {
            return getComments(postId!);
        }
    });

    if (postsLoading) {
        return (
            <div className="container my-5">
                <h1 className="fs-2 text-center">Loading Post...</h1>
            </div>
        );
    }

    if (commentsLoading) {
        return (
            <div className="container my-5">
                <h1 className="fs-2 text-center">Loading Comments...</h1>
            </div>
        );
    }

    return (
        <div className="container-fluid">
            <div className="vstack gap-3 justify-content-between p-5">
                <div className="fs-5 fw-bold text-truncate">{post!.title}</div>
                <div className="fs-5 text-truncate">{post!.body}</div>
            </div>

            <div className="vstack gap-5">
                {comments?.map((comment, index) => (
                    <div key={`post_comment_${index}`} className="vstack gap-3">
                        <div className="vstack align-items-start justify-content-start gap-1">
                            {comment.name}
                            <a href={`mailto: ${comment.email}`}>{comment.email}</a>
                        </div>

                        {comment.body}
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
}

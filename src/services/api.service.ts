import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
});

axiosClient.interceptors.response.use((response) => {
    // Get response data directly
    return response.data;
});

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export function getPosts() {
    return axiosClient.get<never, Post[]>("posts");
}

export function getPost(id: string) {
    return axiosClient.get<never, Post[]>(`posts?id=${id}`).then((posts) => posts[0]);
}

export function getComments(postId: string) {
    return axiosClient.get<never, Comment[]>(`comments?postId=${postId}`);
}

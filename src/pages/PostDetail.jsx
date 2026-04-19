import { useLoaderData, useParams} from "react-router"

export default function PostDetail() {
    const post = useLoaderData();
    const { id } = useParams();

    return (
        <div style={{ textAlign: "left"}}>
            <h4>{id}</h4>
            <p style={{fontWeight: "bold"}}>{post.title}</p>
            <p>{post.body}</p>
        </div>
    )
}
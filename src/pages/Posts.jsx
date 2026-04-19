import { useLoaderData, Link } from "react-router"

export default function PostsPage() {
    const posts = useLoaderData();
    // console.log(posts);
    // const navigation = useNavigation();
    // console.log(navigation.state);

    return <div style={{textAlign: "left", padding: "20px"}}>
        <h3>รายการ Posts</h3>
        <ul style={{listStyle: "none"}}>
            {posts.map((post)=> (
                <li key={post.id}>
                    <Link to={`/posts/${post.id}`}>{post.id}: {post.title}</Link>
                </li>
            ))}
        </ul>
        
    </div>
}
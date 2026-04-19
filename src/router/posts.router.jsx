import PostsLayout from "../components/PostsLayout";
import Posts from "../pages/Posts";
import PostDetail from "../pages/PostDetail";
import { getPosts, getPostById } from "../api/posts";

export const postRoutes = {
        path: "posts",
        element: <PostsLayout />,
        children: [
          {
             index: true,
             element: <Posts />,
             loader: getPosts
          }, 
          {
            path: ":id",
            element: <PostDetail />,
            loader: getPostById
          }
        ]
      };
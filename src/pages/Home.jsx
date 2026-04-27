import { useUserStore } from "../store/userStore"

export default function HomePage() {

    const user = useUserStore((state) => state.user)

    return <div>
        <h2>Home Page</h2>
        <p>{user?.email}</p>
        </div>
}
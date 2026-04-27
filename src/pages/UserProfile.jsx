import { useUserStore } from "../store/userStore";
import { useEffect } from "react";

export default function UserProfile() {
  const user = useUserStore((state) => state.user);
  const fetchUser = useUserStore((state) => state.fetchUser)

  useEffect(()=> {
    fetchUser();
  }, [])

  console.log(user)

  return (
    <div>
      <h2>User Profile</h2>
      <p>{user ? "มี" : "ยังไม่ข้อมูล"}</p>
      <p>{user?.email}</p>
      <p>{user?.firstName}</p>
    </div>
  );
}

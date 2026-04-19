import { Outlet, useNavigate } from "react-router"


export default function PostsLayout() {

    // const navigation = useNavigation();
    // console.log(navigation.state);
    const navigate = useNavigate();

    return (
        <section>
            <h2>หน้าข้อมูล Posts</h2>
            {navigation.state}
            <Outlet />
            <br/>
            <button class="border-2 p-2 rounded-2xl cursor-pointer hover:bg-amber-100" onClick={()=> navigate('/')}>กลับหน้าแรก</button>
        </section>
    )
}
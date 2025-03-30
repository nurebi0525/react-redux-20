import { Route, Routes } from "react-router";
import { AppLayaut } from "../Layout/AppLayaut";
import { Login } from "../Login";
import { Todo } from "../Todo";




function AppRouter () {
    return (
        <Routes>
            <Route path="/" element={<AppLayaut/>}>
            <Route index element={<Login/>}/>
                <Route path="todo" element={<Todo/>} />
            </Route>
        </Routes>
    )
}

export default AppRouter;
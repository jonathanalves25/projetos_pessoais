import { Routes, Route } from "react-router-dom"
import { Home } from "../Pages/Home"
import { Checkout } from "../Pages/Checkout"
import { Success } from "../Pages/Success"
import { DefaultLayout } from "../layouts/DefaultLayout"

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/checkout" element={<Checkout/>} />
                <Route path="/success" element={<Success/>} />
            </Route>
        </Routes>
    )
}
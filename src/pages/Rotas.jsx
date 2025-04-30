import { Routes, Route } from "react-router-dom"
import { Overview } from "./Overview"
import ComponentDetails from "./ComponentDetails"

export function Rotas() {
    return (
        <Routes>
            <Route path="/"             element={<Overview/>}></Route>
            <Route path="/a"       element={<div>aaa</div>}></Route>
            <Route path="/component/:id" element={<ComponentDetails />} />
        </Routes>
    )
}
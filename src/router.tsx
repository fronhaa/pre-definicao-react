import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home.tsx";
import { History } from "./pages/History/History.tsx";

export function Router() {
    return (
        <Routes>
            <Route>
                <Route path="/" element={<Home />} />
                <Route path="/history" element={<History />} />
            </Route>
        </Routes>
    );
}
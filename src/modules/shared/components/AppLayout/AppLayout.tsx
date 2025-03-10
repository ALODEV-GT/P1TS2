import { Route, Routes } from "react-router-dom";
import SideNav from "../sidenav/Sidenav";
import Intersections from "../../../intersections/Intersections";
import Monitors from "../../../monitors/Monitors";
import Permissions from "../../../permissions/Permissions";
import Home from "../../../home/Home";
import Monitor from "../../../monitor/components/Monitor";

function AppLayout() {
    return (
        <div className="flex flex-row">
            <SideNav />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/intersections" element={<Intersections />} />
                <Route path="/monitors" element={<Monitors />} />
                <Route path="/permissions" element={<Permissions />} />
                <Route path="/monitor" element={<Monitor/>} />
            </Routes>
        </div>
    )
}

export default AppLayout;
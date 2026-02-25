import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout() {
    return (
        <div className="bg-black text-white min-h-screen flex flex-col">
            <Navbar />

            {/* Main content area for all child routes */}
            <main className="flex-grow pt-24 px-6 md:px-12">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}
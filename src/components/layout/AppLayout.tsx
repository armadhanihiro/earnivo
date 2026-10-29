import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import BottomNav from "./BottomNav";

export default function AppLayout() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-zinc-950 dark:text-white md:flex">
            <Sidebar />

            <main className="min-w-0 flex-1 px-5 pt-8 pb-28 sm:px-8 md:h-screen md:overflow-y-auto md:px-10 md:py-10">
                <div className="mx-auto max-w-6xl">
                    <Outlet />
                </div>
            </main>

            <BottomNav />
        </div>
    );
}
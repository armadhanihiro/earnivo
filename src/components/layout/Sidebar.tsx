import {
    LayoutDashboard,
    History,
    PlusCircle,
    ChartNoAxesCombined,
    Settings,
    Wallet,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navigation = [
    { label: "Dashboard", path: "/", icon: LayoutDashboard },
    { label: "Activity", path: "/activity", icon: History },
    { label: "Add Entry", path: "/add", icon: PlusCircle },
    { label: "Analytics", path: "/analytics", icon: ChartNoAxesCombined },
    { label: "Settings", path: "/settings", icon: Settings },
];

export default function Sidebar() {
    return (
        <aside className="hidden h-screen w-64 shrink-0 flex-col border-r border-slate-200 bg-white px-4 py-6 dark:border-zinc-800 dark:bg-zinc-950 md:flex">
            <div className="mb-10 flex items-center gap-3 px-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white">
                    <Wallet size={22} />
                </div>

                <div>
                    <h1 className="text-xl font-bold tracking-tight">Earnivo</h1>
                    <p className="text-xs text-slate-500 dark:text-zinc-400">
                        Earnings Intelligence
                    </p>
                </div>
            </div>

            <nav className="flex flex-col gap-2">
                {navigation.map(({ label, path, icon: Icon }) => (
                    <NavLink
                        key={path}
                        to={path}
                        end={path === "/"}
                        className={({ isActive }) =>
                        `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                            isActive
                            ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
                            : "text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
                        }`}
                    >
                        <Icon size={20} />
                        {label}
                    </NavLink>
                ))}
            </nav>

            <div className="mt-auto px-3 text-xs text-slate-400 dark:text-zinc-600">
                Earnivo © 2026
            </div>
        </aside>
    );
}
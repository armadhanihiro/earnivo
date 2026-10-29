import {
    LayoutDashboard,
    History,
    Plus,
    ChartNoAxesCombined,
    Settings,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navigation = [
    { label: "Home", path: "/", icon: LayoutDashboard },
    { label: "Activity", path: "/activity", icon: History },
    { label: "Add", path: "/add", icon: Plus },
    { label: "Analytics", path: "/analytics", icon: ChartNoAxesCombined },
    { label: "Settings", path: "/settings", icon: Settings },
];

export default function BottomNav() {
    return (
        <nav
            aria-label="Mobile navigation"
            className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-2 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] backdrop-blur-lg dark:border-zinc-800 dark:bg-zinc-950/95 md:hidden"
        >
            <div className="mx-auto flex max-w-lg items-center justify-around">
                {navigation.map(({ label, path, icon: Icon }) => (
                    <NavLink
                        key={path}
                        to={path}
                        end={path === "/"}
                        aria-label={label}
                        className={({ isActive }) =>
                        `flex min-w-0 flex-1 flex-col items-center gap-1 rounded-xl py-2 text-[10px] font-medium transition-colors ${
                            isActive
                            ? "text-emerald-600 dark:text-emerald-400"
                            : "text-slate-400 dark:text-zinc-500"
                        }`}
                    >
                        <Icon size={21} />
                        <span>{label}</span>
                    </NavLink>
                ))}
            </div>
        </nav>
    );
}
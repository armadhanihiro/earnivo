import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const themes = [
    { value: "light", label: "Light", icon: Sun },
    { value: "dark", label: "Dark", icon: Moon },
    { value: "system", label: "System", icon: Monitor },
] as const;

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    return (
        <div role="group" aria-label="Appearance settings" className="inline-flex rounded-xl border border-slate-200 bg-slate-100 p-1 dark:border-zinc-800 dark:bg-zinc-900">
            {themes.map(({ value, label, icon: Icon }) => {
                const isActive = theme === value;

                return (
                    <button
                        key={value}
                        type="button"
                        onClick={() => setTheme(value)}
                        aria-pressed={isActive}
                        className={`
                            flex items-center gap-2 rounded-lg px-3 py-2
                            text-sm font-medium transition-all duration-200
                            ${
                                isActive
                                ? "bg-white text-emerald-600 shadow-sm dark:bg-zinc-800 dark:text-emerald-400"
                                : "text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white"
                            }
                        `}
                    >
                        <Icon size={16} />
                        <span>{label}</span>
                    </button>
                );
            })}
        </div>
    );
}
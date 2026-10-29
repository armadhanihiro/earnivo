import ThemeSwitcher from "../components/ThemeSwitcher";

export default function Settings() {
    return (
        <div>
            <h1 className="mb-6 text-3xl font-bold">Settings</h1>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <h2 className="mb-4 text-lg font-semibold">Appearance</h2>
                <ThemeSwitcher />
            </section>
        </div>
    );
}
import { createEffect, createSignal, onMount, Show } from "solid-js";

const ThemeToggle = () => {
  const [theme, setTheme] = createSignal<string>(
    localStorage.getItem("theme") ?? "light"
  );

  const [mounted, setMounted] = createSignal(false);
  onMount(() => {
    setMounted(true);
  });

  createEffect(() => {
    if (theme() === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme());
  });

  const handleClick = () => {
    setTheme(theme() !== "dark" ? "dark" : "light");
  };

  return (
    <>
      {mounted() && (
        <button
          class="relative flex items-center justify-center w-12 h-12"
          type="button"
          onClick={handleClick}
        >
          <>
            {theme() === "light" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width={2}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
            {theme() === "dark" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width={2}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </>
        </button>
      )}
    </>
  );
};

export default ThemeToggle;

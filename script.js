// 深色/浅色主题切换（记忆用户偏好 + 跟随系统）
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  const KEY = "theme";

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    toggle.textContent = theme === "dark" ? "☀️" : "🌙";
  }

  // 初始化：本地存储优先，否则跟随系统
  const saved = localStorage.getItem(KEY);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  apply(saved || (prefersDark ? "dark" : "light"));

  toggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    localStorage.setItem(KEY, next);
    apply(next);
  });
})();

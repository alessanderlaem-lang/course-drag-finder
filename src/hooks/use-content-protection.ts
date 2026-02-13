import { useEffect } from "react";

export function useContentProtection() {
  useEffect(() => {
    const preventContext = (e: MouseEvent) => e.preventDefault();
    const preventSelect = (e: Event) => e.preventDefault();
    const preventDrag = (e: DragEvent) => e.preventDefault();
    const preventKeys = (e: KeyboardEvent) => {
      // Ctrl+C, Ctrl+U, Ctrl+S
      if (e.ctrlKey && ["c", "u", "s"].includes(e.key.toLowerCase())) {
        e.preventDefault();
      }
      // F12
      if (e.key === "F12") {
        e.preventDefault();
      }
      // Ctrl+Shift+I (DevTools)
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", preventContext);
    document.addEventListener("selectstart", preventSelect);
    document.addEventListener("dragstart", preventDrag);
    document.addEventListener("keydown", preventKeys);

    return () => {
      document.removeEventListener("contextmenu", preventContext);
      document.removeEventListener("selectstart", preventSelect);
      document.removeEventListener("dragstart", preventDrag);
      document.removeEventListener("keydown", preventKeys);
    };
  }, []);
}

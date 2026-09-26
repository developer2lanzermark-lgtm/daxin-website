import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Jumps to the top of the page whenever the route changes, so switching
// menus always starts each page from its beginning instead of keeping
// the scroll position from the page you were on before.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

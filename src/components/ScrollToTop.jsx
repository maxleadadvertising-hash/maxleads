import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly scrolls to the top-left corner
    window.scrollTo(0, 0);
  }, [pathname]); // Runs whenever the route path changes

  return null;
}
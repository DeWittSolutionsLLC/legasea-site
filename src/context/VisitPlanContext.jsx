"use client";

import { createContext, useContext, useEffect, useState } from "react";

const VisitPlanContext = createContext(null);
const STORAGE_KEY = "legasea-visit-plan";

export function VisitPlanProvider({ children }) {
  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Reads localStorage (unavailable during SSR) once on mount.
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setItems(stored);
    } catch {
      // ignore
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, loaded]);

  function isAdded(id) {
    return items.some((i) => i.id === id);
  }

  function toggleItem(item) {
    setItems((prev) =>
      prev.some((i) => i.id === item.id)
        ? prev.filter((i) => i.id !== item.id)
        : [...prev, item],
    );
  }

  function removeItem(id) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  function clear() {
    setItems([]);
  }

  const totalPrice = items.reduce((sum, i) => sum + (Number(i.price) || 0), 0);
  const totalMinutes = items.reduce((sum, i) => {
    const match = /(\d+)/.exec(i.duration ?? "");
    return sum + (match ? Number(match[1]) : 0);
  }, 0);

  return (
    <VisitPlanContext.Provider
      value={{
        items,
        isAdded,
        toggleItem,
        removeItem,
        clear,
        totalPrice,
        totalMinutes,
      }}
    >
      {children}
    </VisitPlanContext.Provider>
  );
}

export function useVisitPlan() {
  const ctx = useContext(VisitPlanContext);
  if (!ctx) {
    throw new Error("useVisitPlan must be used within a VisitPlanProvider");
  }
  return ctx;
}

"use client";

import { useVisitPlan } from "@/context/VisitPlanContext";
import { IconCheck, IconPlus } from "@/components/icons";

export default function AddToVisitButton({ item, className, size = "sm" }) {
  const { isAdded, toggleItem } = useVisitPlan();
  const added = isAdded(item.id);
  return (
    <button
      type="button"
      className={`btn ${added ? "btn-primary" : "btn-outline btn-outline--glass"} btn-${size} ${className ?? ""}`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleItem(item);
      }}
      aria-pressed={added}
    >
      {added ? (
        <>
          <IconCheck size={14} /> Added
        </>
      ) : (
        <>
          <IconPlus size={14} /> Add to My Visit
        </>
      )}
    </button>
  );
}

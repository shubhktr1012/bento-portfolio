"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Category = "All" | "About" | "Projects" | "Media";

interface FilterContextType {
  activeCategory: Category;
  setCategory: (category: Category) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const setCategory = (category: Category) => {
    setActiveCategory(category);
  };

  return (
    <FilterContext.Provider value={{ activeCategory, setCategory }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }

  return context;
};

"use client";

import type { ThemeProviderProps } from "next-themes";

import * as React from "react";
import { HeroUIProvider } from "@heroui/system";
import { ToastProvider } from "@heroui/toast";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { FilterProvider } from "@/context/filter-context";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();
  const [toastPlacement, setToastPlacement] = React.useState<"bottom-right" | "bottom-center">("bottom-right");

  React.useEffect(() => {
    const handleResize = () => {
      setToastPlacement(window.innerWidth < 768 ? "bottom-center" : "bottom-right");
    };

    // Set initial
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        <ToastProvider placement={toastPlacement} toastOffset={10} />
        <FilterProvider>
          {children}
        </FilterProvider>
      </NextThemesProvider>
    </HeroUIProvider>
  );
}

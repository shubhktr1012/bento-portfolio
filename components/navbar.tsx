"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";
import { Tabs, Tab } from "@heroui/tabs";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";

export const Navbar = () => {

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col gap-4">
      <HeroUINavbar maxWidth="2xl" position="static" className="bg-transparent data-[menu-open=true]:border-none border-none backdrop-blur-none backdrop-saturate-100">
        <NavbarContent className="lg:hidden w-full" justify="center">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink className="flex justify-start items-center gap-1" href="/">
              <Logo />
            </NextLink>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden lg:flex" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink className="flex justify-start items-center gap-1" href="/">
              <Logo />
            </NextLink>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden lg:flex flex-wrap gap-4" justify="center">
          <Tabs
            classNames={{
              tabList: "bg-stone-200/50 dark:bg-background dark:border dark:border-default-200/60 rounded-3xl p-1.5",
              tab: "rounded-3xl",
              cursor: "bg-white dark:bg-default-100 rounded-3xl",
            }} className="hidden lg:flex gap-4 justify-start ml-2">
            {siteConfig.navItems.map((item) => (
              <Tab
                key={item.href}
                title={
                  <NextLink
                    className={clsx(
                      linkStyles({ color: "foreground" }),
                      "tracking-wider",
                    )}
                    color="foreground"
                    href={item.href}
                    style={{ fontFamily: "SF Pro Display" }}
                  >
                    {item.label}
                  </NextLink>
                }
              />
            ))}
          </Tabs>
        </NavbarContent>

        <NavbarContent
          className="hidden lg:flex"
          justify="end"
        >
          <NavbarItem className="hidden lg:flex gap-4">
            <ThemeSwitch />
          </NavbarItem>
        </NavbarContent>

        {/* <NavbarContent className="lg:hidden basis-1 pl-4" justify="center">
          <ThemeSwitch />
        </NavbarContent> */}

      </HeroUINavbar>

      <div className="w-full flex justify-center pb-4 lg:hidden">
        <Tabs
          classNames={{
            tabList: "bg-stone-200/50 dark:bg-background dark:border dark:border-default-200/60 rounded-3xl p-1.5",
            tab: "rounded-3xl",
            cursor: "bg-white dark:bg-default-100 rounded-3xl",
          }} className="flex gap-4 justify-start">
          {siteConfig.navItems.map((item) => (
            <Tab
              key={item.href}
              title={
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "tracking-wider",
                  )}
                  color="foreground"
                  href={item.href}
                  style={{ fontFamily: "SF Pro Display" }}
                >
                  {item.label}
                </NextLink>
              }
            />
          ))}
        </Tabs>

      </div>

    </header>
  );
};

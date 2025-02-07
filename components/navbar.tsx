"use client";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, Logo } from "@/components/icons";
import { RemoveCookie } from "@/utils/Cookies"; // Import RemoveCookie
import { useRouter } from "next/navigation"; // Import router

import { useEffect, useState } from "react";

interface User {
  _id: string;
  name: string;
  email: string;
}
import { userInformation } from "@/app/api/UserInformation";

export const Navbar = () => {
  const [user, setUser] = useState<User | null>(null);
  const pathname = usePathname();
  const router = useRouter(); // Initialize router

  // Check if the link is active
  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await userInformation();
        if (userData?.success) {
          setUser(userData?.user);
        } else {
          console.error(
            "Failed to fetch user data:",
            userData?.message || "Unknown error"
          );
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  // Logout handler
  const handleLogout = () => {
    RemoveCookie("accessToken");
    router.push("/login");
  };

  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      className="lg:fixed bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 shadow-lg dark:text-white text-white rounded-br-lg rounded-bl-lg"
    >
      {/* Left Content: Brand and Navigation */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink
            className="flex justify-start items-center gap-2 hover:opacity-90"
            href="/"
          >
            <Logo />
            <p className="font-bold text-xl tracking-wide text-white">
              LEARN QURAN
            </p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-6 ml-4">
          {siteConfig.navItems.map((item) => (
            <NavbarItem className="hover:text-[#fea621]" key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "hover:font-semibold text-white transition-all duration-200",
                  isActive(item.href) &&
                    "font-bold underline bg-[#04ca25] px-4 py-1 rounded-br-2xl rounded-tl-2xl"
                )}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      {/* Right Content: Theme Switch, GitHub Icon, and Logout */}
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="flex gap-4 items-center">
          {user ? (
            <>
              <span className="text-white font-medium">{user.name}</span>
              <button
                onClick={handleLogout}
                className="font-bold hover:bg-[#8bf303a4]  bg-[#8bf303da] px-4 py-1 rounded-br-2xl rounded-tl-2xl"
              >
                Logout
              </button>
            </>
          ) : (
            <NextLink href="/registration">
              <button className="font-bold hover:bg-[#8bf303a4]  bg-[#8bf303da] px-4 py-1 rounded-br-2xl rounded-tl-2xl">
                Apply Now
              </button>
            </NextLink>
          )}
          <Link
            isExternal
            aria-label="Github"
            href={siteConfig.links.github}
            className="hover:opacity-80 transition-opacity duration-200"
          >
            <GithubIcon className="w-6 h-6 text-white" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu Toggle */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link
          isExternal
          aria-label="Github"
          href={siteConfig.links.github}
          className="hover:opacity-80 transition-opacity duration-200"
        >
          <GithubIcon className="w-6 h-6 text-white" />
        </Link>
        <NavbarMenuToggle className="text-white" />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-blue-800">
        <div className="mx-4 mt-6 flex flex-col gap-4">
          {user ? (
            <button
              onClick={handleLogout}
              className="font-bold hover:bg-[#8bf303a4]  bg-[#8bf303da] px-4 py-1 rounded-br-2xl rounded-tl-2xl"
            >
              Logout
            </button>
          ) : (
            <NextLink href="/registration">
              <button className="font-bold hover:bg-[#8bf303a4]  bg-[#8bf303da] px-4 py-1 rounded-br-2xl rounded-tl-2xl">
                Apply Now
              </button>
            </NextLink>
          )}
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem
              key={`${item.label}-${index}`}
              className={clsx(
                "hover:bg-blue-600 hover:shadow-md hover:text-white transition-all duration-200 rounded-lg px-3 py-2",
                isActive(item.href) && "bg-blue-600 text-white font-semibold"
              )}
            >
              <NextLink
                className="w-full block text-lg font-medium text-white"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};

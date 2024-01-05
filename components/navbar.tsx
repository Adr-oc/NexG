"use client";
import {
  Navbar as NavbarUI,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import NexgLogo from "./NexgLogo.jsx";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import navbarStyle from "../styles/navbar.module.css";

export const Navbar = () => {
  const pathname = usePathname();
  const NAV_ITEMS = [
    { name: "Inicio", url: "/" },
    { name: "Recursos", url: "/recursos" },
    { name: "Comunidad", url: "/comunidad" },
    { name: "Becas", url: "/becas" },
    { name: "Sobre nosotros", url: "/sobrenosotros" },
  ];

  return (
    <NavbarUI id="header-nav">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <NexgLogo width="5.4em" height="2.2em" className={""} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-6 justify-center"
        justify="center"
      >
        <NavbarBrand>
          <NexgLogo width="5.4em" height="2.2em" className={""} />
        </NavbarBrand>

        {NAV_ITEMS.map(({ name, url }) => (
          <li key={name}>
            <Link
              href={url}
              key={name}
              className={clsx(
                "transition ease-in-out duration-300 border-b-2 border-transparent",
                pathname === url
                  ? [navbarStyle.neonText]
                  : [navbarStyle.neonUnderline]
              )}
            >
              {name}
            </Link>
          </li>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button variant="light" color="primary" className="bg-primary-800 bg-opacity-10">
            Iniciar sesion
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className={navbarStyle.glassNeonButton}>
            Registrate
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {NAV_ITEMS.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className={clsx(
                "transition duration-400 flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium  hover:bg-primary-900 hover:text-primary-400 md:flex-none md:justify-start md:p-2 md:px-3",
                pathname === item.url
                  ? "bg-primary-700 text-primary400 h-full w-full rounded-md bg-clip-padding "
                  : "text-white"
              )}
              href={item.url}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NavbarUI>
  );
};

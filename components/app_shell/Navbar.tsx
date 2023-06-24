import type { NextPage } from "next";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { NavbarProps, NavItem } from "../../interfaces/navigation";
import { ReactNode } from "react";
import Head from "next/head";

const nav_items: NavItem[] = [
  {
    name: "About The Tool",
    link: "home",
    key: 1,
  },
  {
    name: "Parameters",
    link: "parameters",
    key: 2,
  },
  {
    name: "Decision Tree",
    link: "decision_tree",
    key: 3,
  },
  {
    name: "Results",
    link: "results",
    key: 4,
  },
  {
    name: "FAQ",
    link: "faq",
    key: 5,
  },
];

const Navbar: NextPage<NavbarProps> = ({ active_page }) => {
  const links: ReactNode = nav_items.map((navItem) => {
    return (
      <a
        key={navItem.key}
        href={"/" + navItem.link}
        className={
          active_page == navItem.name
            ? "inline-flex items-center px-1 pt-1 text-base text-honeysuckle md:text-lg lg:text-xl"
            : "inline-flex items-center px-1 pt-1 text-base text-white hover:text-honeysuckle-600 md:text-lg lg:text-xl"
        }
      >
        {navItem.name}
      </a>
    );
  });

  const mobileLinks: ReactNode = nav_items.map((navItem) => {
    return (
      <Disclosure.Button
        as="a"
        href={"/" + navItem.link}
        className={
          active_page == navItem.name
            ? "block border-l-4 border-honeysuckle-500 bg-casal-300 py-2 pl-3 pr-4 text-base font-medium text-honeysuckle-700"
            : "block py-2 pl-3 pr-4 text-base font-medium text-white"
        }
        key={navItem.key}
      >
        {navItem.name}
      </Disclosure.Button>
    );
  });

  return (
    <div>
      <Head>
        <title>EconAnalysis</title>
        <meta property="og:title" content="EconAnalysis" />
        <meta property="og:site_name" content="EconAnalysis" />
        <meta property="og:url" content="https://www.econanalysis.io/" />
        <meta
          property="og:description"
          content="Determine if your clinic is losing money by performing telemedicine instead of seeing patients in person."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.econanalysis.io/static_screenshot.png"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#e3ff88" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <script
          defer
          data-domain="econanalysis.io"
          src="https://plausible.io/js/script.js"
        ></script>
      </Head>
      <Disclosure as="nav" className="bg-white shadow">
        {({ open }) => (
          <>
            <div className="mx-auto bg-casal px-6 py-4 md:px-10">
              <div className="flex h-12 justify-between">
                <div className="flex items-center">
                  <img
                    src="/EconAnalysisFavicon.png"
                    alt="logo"
                    className="mr-2 h-4 w-4"
                  />
                  <a
                    href="/"
                    className="flex flex-shrink-0 items-center text-xl font-medium text-white lg:text-2xl"
                  >
                    <span className="font-extrabold">Econ</span>
                    Analysis
                  </a>
                </div>
                <div className="hidden sm:flex md:space-x-2 lg:space-x-6">
                  {links}
                </div>
                <div className="-mr-2 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-casal-300 hover:text-honeysuckle-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-honeysuckle">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 bg-casal/90 pt-2 pb-3">
                {mobileLinks}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Navbar;

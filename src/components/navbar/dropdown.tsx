import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import Link from "next/link";
import { BiGridAlt } from "react-icons/bi";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
export default function Dropdown() {
  return (
    <Menu as="div" className="relative">
      <div>
        <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white ">
          <BiGridAlt className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg bg-fondo ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link href="/">
                  <a
                    className={classNames(
                      active ? "bg-purple-600 " : "text-white",
                      "block px-4 py-2 text-sm hover:bg-purple-600 font-semibold"
                    )}
                  >
                    Home
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/games">
                  <a
                    className={classNames(
                      active ? "bg-gray-100 " : "text-white",
                      "block px-4 py-2 text-sm hover:bg-purple-600 font-semibold"
                    )}
                  >
                    Games
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/deporte">
                  <a
                    className={classNames(
                      active ? "bg-gray-100 " : "text-white",
                      "block px-4 py-2 text-sm hover:bg-purple-600 font-semibold"
                    )}
                  >
                    Deportes
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/musica">
                  <a
                    className={classNames(
                      active ? "bg-gray-100 text-white" : "text-white",
                      "block px-4 py-2 text-sm hover:bg-purple-600 font-semibold"
                    )}
                  >
                    Music
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/noticias">
                  <a
                    className={classNames(
                      active ? "bg-gray-100 text-white" : "text-white",
                      "block px-4 py-2 text-sm hover:bg-purple-600 font-semibold"
                    )}
                  >
                    Noticias
                  </a>
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

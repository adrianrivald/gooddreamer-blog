import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useWindowDimensions from "../utils/use-window-size";

export const Navbar = () => {
  const router = useRouter();
  const { query } = router;
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [toggleSearchBar, setToggleSearchBar] = React.useState(false);
  const { width } = useWindowDimensions();
  const [initiatePos, setInitiatePos] = React.useState("");

  const onClickLogo = () => {
    router.push("/");
  };

  const onToggleMenu = () => {
    setToggleMenu((prevState) => !prevState);
  };

  const onToggleSearchBar = () => {
    setToggleSearchBar((prevState) => !prevState);
  };

  const onSearch = (e: any, close: () => void) => {
    e.preventDefault();
    const keyword = e.target[0].value;
    router.push({
      pathname: "/search",
      query: {
        q: keyword,
      },
    });
    close();
  };

  useEffect(() => {
    setInitiatePos(`-right-[${width}px]`);
  }, [width, initiatePos]);

  useEffect(() => {
    setToggleMenu(false);
    setToggleSearchBar(false);
  }, [router]);

  if (!initiatePos) return false;

  return (
    <div className="max-w-[120rem] h-[60px] mx-auto flex justify-between items-center py-8 px-8 lg:px-20 w-full fixed z-50 bg-white shadow">
      <Image
        src="/blog/assets/images/gooddreamer-logo.svg"
        width={200}
        height={27}
        alt="gooddreamer-logo"
        onClick={onClickLogo}
        className="cursor-pointer"
      />
      {/* Web menu */}
      <ol className="hidden lg:flex gap-12 justify-between text-purple-primary">
        <li className="cursor-pointer">
          <Link href="/promo">Promo</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/announcement">Pengumuman</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/activity">Aktivitas</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/article">Artikel</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="https://gooddreamer.id/author">Penulis</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/faq">FAQ</Link>
        </li>
        <li className="cursor-pointer">
          <Popover>
            {({ close }) => (
              <>
                <PopoverButton className="focus:outline-none">
                  <Image
                    src="/blog/assets/icons/magnifying-glass-purple.svg"
                    width={23}
                    height={23}
                    alt="magnifying"
                  />
                </PopoverButton>
                {/* <PopoverBackdrop className="fixed inset-0 bg-black/15" /> */}

                <PopoverPanel
                  transition
                  anchor="bottom end"
                  className="z-[99] shadow divide-y divide-white/5 rounded-sm border border-grey-secondary bg-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:10px] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
                >
                  <form
                    onSubmit={(e) => onSearch(e, close)}
                    className="py-2 px-4 flex items-center gap-1 bg-white"
                  >
                    <input
                      type="search"
                      className="w-[280px] flex items-center m-auto p-2 border border-grey-secondary h-[40px] focus:outline-none"
                      name="keyword"
                      defaultValue={query?.q ?? ""}
                    ></input>
                    <button
                      type="submit"
                      className="flex items-center m-auto bg-purple-primary text-white px-4 py-2 h-[40px]"
                    >
                      Cari
                    </button>
                  </form>
                </PopoverPanel>
              </>
            )}
          </Popover>
        </li>
      </ol>

      {/* Mobile menu */}
      <div className="flex lg:hidden items-center gap-8">
        <div
          className="flex lg:hidden flex-col cursor-pointer gap-2"
          onClick={onToggleMenu}
        >
          <div className="bg-purple-primary w-[30px] h-[3px]"></div>
          <div className="bg-purple-primary w-[30px] h-[3px]"></div>
          <div className="bg-purple-primary w-[30px] h-[3px]"></div>
        </div>
        <Image
          src="/blog/assets/icons/magnifying-glass-purple.svg"
          width={23}
          height={23}
          alt="magnifying"
          className="blog lg:hidden w-[30px] h-[30px]"
          onClick={onToggleSearchBar}
        />
      </div>

      <div
        id="backdrop"
        onClick={() => {
          setToggleMenu(false);
          setToggleSearchBar(false);
        }}
        className={`transition-all bg-black opacity-50 fixed top-0 left-0 w-full h-screen ${
          toggleMenu || toggleSearchBar ? "block" : "hidden"
        }`}
      ></div>

      <div
        className={`transition-all fixed top-0 ${
          toggleMenu ? "right-0" : "-right-[300px]"
        } w-[300px] h-screen bg-white px-8 py-5`}
      >
        <div className="flex justify-end">
          <div
            className="flex lg:hidden flex-col cursor-pointer gap-0"
            onClick={onToggleMenu}
          >
            <div className="relative px-8 py-5">
              <div className="absolute top-4 bg-purple-primary w-[30px] h-[3px] rotate-[45deg]"></div>
              <div className="absolute top-4 bg-purple-primary w-[30px] h-[3px] rotate-[135deg]"></div>
            </div>
          </div>
        </div>
        <ul className="mt-8 flex flex-col gap-4 text-purple-primary font-bold">
          <li>
            <Link href="/">Beranda</Link>
          </li>
          <li>
            <Link href="/promo">Promo</Link>
          </li>
          <li>
            <Link href="/announcement">Pengumuman</Link>
          </li>
          <li>
            <Link href="/activity">Aktivitas</Link>
          </li>
          <li>
            <Link href="/article">Artikel</Link>
          </li>
          <li>
            <Link href="https://gooddreamer.id/author">Penulis</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
        </ul>
      </div>

      <div
        className={`transition-all fixed top-0 w-full h-screen bg-purple-primary opacity-[85%] px-8 py-5`}
        style={{
          right: toggleSearchBar ? 0 : `-${width}px`,
        }}
      >
        <div className="flex justify-end">
          <div
            className="flex lg:hidden flex-col cursor-pointer gap-0"
            onClick={onToggleSearchBar}
          >
            <div className="relative px-8 py-5">
              <div className="absolute top-4 bg-white w-[30px] h-[3px] rotate-[45deg]"></div>
              <div className="absolute top-4 bg-white w-[30px] h-[3px] rotate-[135deg]"></div>
            </div>
          </div>
        </div>
        <form
          onSubmit={(e) => onSearch(e, close)}
          className="py-2 px-4 flex flex-col items-center gap-3"
        >
          <input
            type="text"
            className="w-full text-center border-b bg-transparent border-white mt-4 flex items-center m-auto p-2 text-white h-[40px] focus:outline-none"
            name="keyword"
            style={{
              fontSize: "30px",
            }}
            defaultValue={query?.q ?? ""}
          ></input>
          <button
            type="submit"
            className="font-bold flex bg-yellow-primary items-center m-auto bg-purple-primary text-purple-primary px-4 py-2 h-[40px] w-[100px] text-center justify-center"
          >
            Cari
          </button>
        </form>
      </div>
      {/* )} */}
    </div>
  );
};

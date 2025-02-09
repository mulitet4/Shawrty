"use client";
import { Link2Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import Outpost from "../../public/outpost.png";
import Image from "next/image";
import { useState } from "react";

const iconSize = 18;

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="relative flex flex-row justify-between py-4 px-4 md:px-0 md:max-w-[80vw] mx-auto">
        <div className="flex flex-row items-center space-x-2">
          <Link2Icon height={iconSize + 2} width={iconSize + 2} />
          <h1 className="text-lg font-bold">Shawrty</h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-row space-x-5 items-center">
          <Link href={"#features"}>Features</Link>
          <Link href={"#pricing"}>Pricing</Link>
          <Link href={"#features"}>About</Link>
        </div>
        <div className="hidden md:block">
          <a href="/login" className="px-5 py-1 rounded-3xl bg-primary">
            Login
          </a>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-foreground/10 p-4 flex flex-col space-y-4 md:hidden">
            <Link href={"#features"}>Features</Link>
            <Link href={"#pricing"}>Pricing</Link>
            <Link href={"#features"}>About</Link>
            <a
              href="/login"
              className="px-5 py-1 rounded-3xl bg-primary text-center"
            >
              Login
            </a>
          </div>
        )}
      </nav>

      <hr className="border-foreground/10" />

      <main className="flex flex-col space-y-16 md:space-y-32 py-12 md:py-24">
        {/* Hero Section */}
        <section
          className="flex flex-col md:flex-row max-w-[90vw] md:max-w-[80vw] m-auto md:space-x-5 space-y-8 md:space-y-0 px-4 md:px-0"
          id="hero"
        >
          <div className="flex flex-col flex-1 justify-center items-center">
            <h2 className="max-w-48 font-bold text-2xl md:text-3xl text-center">
              Shorten URLs and Share them with Ease
            </h2>
          </div>
          <div className="flex-1 flex items-center justify-center md:justify-start">
            <Image
              className="max-w-[90%] md:max-w-[80%]"
              width={500}
              height={500}
              src={Outpost}
              alt="alt"
            />
          </div>
        </section>

        {/* Features Section */}
        <section
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-[90vw] md:max-w-[60vw] m-auto gap-8 px-4 md:px-0"
          id="features"
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex flex-col space-y-1">
              <Link2Icon width={iconSize} height={iconSize} />
              <h4 className="font-bold">Shorten</h4>
              <p>Shorten URLs easily using our webapp</p>
            </div>
          ))}
        </section>

        {/* Pricing */}
        <section
          className="flex flex-col md:flex-row max-w-[90vw] md:max-w-[60vw] m-auto space-y-4 md:space-y-0 md:space-x-3 px-4 md:px-0"
          id="pricing"
        >
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="rounded-xl bg-primary/30 flex flex-col p-4 flex-1"
            >
              <h4 className="text-2xl font-bold text-center">Basic</h4>
              <p className="text-lg text-center">Free</p>
              <ul className="mt-4 space-y-2">
                <li>Shorten URLs</li>
                <li>Upto 200 URLs</li>
                <li>Expiry upto 20 days</li>
              </ul>
              <button className="bg-primary rounded-xl py-1 mx-4 mt-12">
                Get Started
              </button>
            </div>
          ))}
        </section>
      </main>

      <hr className="border-foreground/10" />

      <div
        id="footer"
        className="max-w-[90vw] md:max-w-[70vw] m-auto py-4 px-4 md:px-0"
      >
        <p>Made by Aaryan Dongre / Mulitet4</p>
      </div>
    </div>
  );
};

export default Home;

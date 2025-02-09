"use client";
import React, { useState } from "react";
import { Link2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useDispatch } from "react-redux";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Settings, LogOut } from "lucide-react";
import { authActions } from "@/lib/slices/authSlice";
import { useRouter } from "next/navigation";
import { handleLogout } from "./actions";

const iconSize = 18;

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex flex-row items-center justify-between px-4 md:px-5 bg-primary-foreground w-full py-4 shadow-black/20 shadow-xl">
        <Link href={"/"}>
          <div className="flex flex-row items-center space-x-1 text-muted">
            <Link2Icon height={22} width={22} />
            <h1 className="text-xl font-semibold">Shawrty</h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-row space-x-4">
          <Link
            href={"/dashboard"}
            className="text-muted hover:text-muted-foreground transition-all"
          >
            <div className="flex flex-row space-x-1 items-center">
              <Link2Icon height={iconSize} width={iconSize} />
              <p>Dashboard</p>
            </div>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                href={"/dashboard"}
                className="text-muted hover:text-muted-foreground transition-all"
              >
                <div className="flex flex-row space-x-1 items-center">
                  <Settings className="h-5 w-5" />
                  <p>Settings</p>
                </div>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {/* <DropdownMenuItem asChild>
                <Link href="/settings" className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem> */}
              <DropdownMenuItem
                onClick={async () => {
                  try {
                    await handleLogout();
                  } catch (error) {
                    console.error("Logout failed:", error);
                  }
                }}
                className="text-red-600 cursor-pointer"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-muted"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <HamburgerMenuIcon className="h-5 w-5" />
        </Button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary-foreground border-b border-border">
          <div className="px-4 py-2 space-y-2">
            <Link
              href={"/dashboard"}
              className="flex items-center space-x-2 p-2 hover:bg-accent rounded-md text-muted hover:text-muted-foreground"
            >
              <Link2Icon height={iconSize} width={iconSize} />
              <span>Dashboard</span>
            </Link>
            <Link
              href={"/settings"}
              className="flex items-center space-x-2 p-2 hover:bg-accent rounded-md text-muted hover:text-muted-foreground"
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 p-2 hover:bg-accent rounded-md w-full text-red-600"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}

      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Layout;

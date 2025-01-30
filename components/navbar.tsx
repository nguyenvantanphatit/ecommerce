"use client"
import { useEffect, useState } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronDown,
    Cpu,
    Globe,
    Eye,
    Shield,
    Rocket,
    Box,
    Search,
    Palette,
    BookOpen,
    FileText,
    Newspaper,
    Menu,
    Phone, Mail, MapPin,
    Download
} from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "./ui/button";
const NavBarHomne = () => {
    const [openMenu, setOpenMenu] = React.useState<string | null>(null);
    const [isHover, setIsHover] = useState<number | null>(null);
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const [isAddressVisible, setIsAddressVisible] = useState(true);
    const handleHover = (menuLabel: string | null) => {
        setOpenMenu(prev => (prev === menuLabel ? null : menuLabel));
    };
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsAddressVisible(false);
            } else {
                setIsAddressVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <header className="flex items-center justify-between py-4 px-6 bg-[#0A0A0A]  sticky top-0 z-40">
                <Link href="/">
                    <div className="flex items-center space-x-2">
                        <span className="text-white text-lg font-bold">TP</span>
                    </div>
                </Link>
                <ul className="relative items-center space-x-0 hidden md:flex">
                    {NAV_ITEMS.map((navItem) => (
                        <li
                            key={navItem.label}
                            className="relative"
                            onMouseEnter={() => handleHover(navItem.label)}
                            onMouseLeave={() => handleHover(null)}
                        >
                            <button
                                className="text-sm py-1.5 px-4 flex cursor-pointer group transition-colors duration-300 items-center justify-center gap-1 text-white relative"
                                onMouseEnter={() => setIsHover(navItem.id)}
                                onMouseLeave={() => setIsHover(null)}
                            >
                                <span>{navItem.label}</span>
                                {navItem.subMenus && (
                                    <ChevronDown
                                        className={`h-4 w-4 mt-1 group-hover:rotate-180 duration-300 transition-transform
                         ${openMenu === navItem.label ? "rotate-180" : ""}
                         `}
                                    />
                                )}
                                {(isHover === navItem.id || openMenu === navItem.label) && (
                                    <motion.div
                                        layoutId="hover-bg"
                                        className="absolute inset-0 size-full bg-white/10"
                                        style={{
                                            borderRadius: 99,
                                        }}
                                    />
                                )}
                            </button>

                            <AnimatePresence>
                                {openMenu === navItem.label && navItem.subMenus && (
                                    <div className="w-auto absolute left-0 top-full pt-2">
                                        <motion.div
                                            className="bg-[#0A0A0A] border border-white/10 p-4 w-max"
                                            style={{
                                                borderRadius: 16,
                                            }}
                                            layoutId="menu"
                                        >
                                            <div className="w-fit shrink-0 flex space-x-9 overflow-hidden">
                                                {navItem.subMenus.map((sub) => (
                                                    <motion.div layout className="w-full" key={sub.title}>
                                                        <h3 className="mb-4 text-sm font-medium capitalize text-white/50">
                                                            {sub.title}
                                                        </h3>
                                                        <ul className="space-y-6">
                                                            {sub.items.map((item) => {
                                                                const Icon = item.icon;
                                                                return (
                                                                    <li key={item.label}>
                                                                        <a
                                                                            href="#"
                                                                            className="flex items-start space-x-3 group"
                                                                        >
                                                                            <div className="border border-white/30 text-white rounded-md flex items-center justify-center size-9 shrink-0 group-hover:bg-white group-hover:text-[#0A0A0A] transition-colors duration-300">
                                                                                <Icon className="h-5 w-5 flex-none" />
                                                                            </div>
                                                                            <div className="leading-5 w-max">
                                                                                <p className="text-sm font-medium text-white shrink-0">
                                                                                    {item.label}
                                                                                </p>
                                                                                <p className="text-xs text-white/50 shrink-0 group-hover:text-white transition-colors duration-300">
                                                                                    {item.description}
                                                                                </p>
                                                                            </div>
                                                                        </a>
                                                                    </li>
                                                                );
                                                            })}
                                                        </ul>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>
                                )}
                            </AnimatePresence>
                        </li>
                    ))}
                </ul>
                <Link href="/signin" >
                    <div className="flex items-center space-x-2">
                        <span className="text-white">Sign in</span>
                    </div>
                </Link>
                <div className="md:hidden">
                    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-white">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-full bg-[#0A0A0A]">
                            <nav className="flex flex-col space-y-1">
                                {NAV_ITEMS.map((navItem) => (
                                    <div key={navItem.label} className="py-1">
                                        <button
                                            className="text-sm py-2 pr-4 pl-1 flex w-full cursor-pointer group transition-colors duration-300 items-center justify-between text-white"
                                            onClick={() => handleHover(navItem.label)}
                                        >
                                            <span>{navItem.label}</span>
                                            {navItem.subMenus && (
                                                <ChevronDown
                                                    className={`h-4 w-4 transition-transform duration-300 ${openMenu === navItem.label ? "rotate-180" : ""
                                                        }`}
                                                />
                                            )}
                                        </button>
                                        {openMenu === navItem.label && navItem.subMenus && (
                                            <div className="pl-1 mt-2">
                                                {navItem.subMenus.map((sub) => (
                                                    <div key={sub.title} className="mb-4">
                                                        <h3 className="mb-2 text-sm font-medium capitalize text-white/50">{sub.title}</h3>
                                                        <ul className="space-y-2">
                                                            {sub.items.map((item) => {
                                                                const Icon = item.icon
                                                                return (
                                                                    <li key={item.label}>
                                                                        <a href="#" className="flex items-start space-x-3 group py-2">
                                                                            <div className="border border-white/30 text-white rounded-md flex items-center justify-center size-9 shrink-0 group-hover:bg-white group-hover:text-[#0A0A0A] transition-colors duration-300">
                                                                                <Icon className="h-5 w-5 flex-none" />
                                                                            </div>
                                                                            <div className="leading-5">
                                                                                <p className="text-sm font-medium text-white">{item.label}</p>
                                                                                <p className="text-xs text-white/50 group-hover:text-white transition-colors duration-300">
                                                                                    {item.description}
                                                                                </p>
                                                                            </div>
                                                                        </a>
                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </header>
        </>
    );
};

export default NavBarHomne;
type Props = {
    id: number;
    label: string;
    subMenus?: {
        title: string;
        items: {
            label: string;
            description: string;
            icon: React.ElementType;
        }[];
    }[];
    link?: string;
};
const NAV_ITEMS: Props[] = [
    {
        id: 1,
        label: "Products",
        subMenus: [
            {
                title: "DX Platform",
                items: [
                    {
                        label: "Previews",
                        description: "Helping teams ship 6× faster",
                        icon: Cpu,
                    },
                    {
                        label: "AI",
                        description: "Powering breakthroughs",
                        icon: Search,
                    },
                ],
            },
            {
                title: "Managed Infrastructure",
                items: [
                    {
                        label: "Rendering",
                        description: "Fast, scalable, and reliable",
                        icon: Globe,
                    },
                    {
                        label: "Observability",
                        description: "Trace every step",
                        icon: Eye,
                    },
                    {
                        label: "Security",
                        description: "Scale without compromising",
                        icon: Shield,
                    },
                ],
            },
            {
                title: "Open Source",
                items: [
                    {
                        label: "Next.js",
                        description: "The native Next.js platform",
                        icon: Rocket,
                    },
                    {
                        label: "Turborepo",
                        description: "Speed with Enterprise scale",
                        icon: Box,
                    },
                    {
                        label: "AI SDK",
                        description: "The AI Toolkit for TypeScript",
                        icon: Palette,
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        label: "Solutions",
        subMenus: [
            {
                title: "Use Cases",
                items: [
                    {
                        label: "AI Apps",
                        description: "Deploy at the speed of AI",
                        icon: Cpu,
                    },
                    {
                        label: "Composable Commerce",
                        description: "Power storefronts that convert",
                        icon: Box,
                    },
                    {
                        label: "Marketing Sites",
                        description: "Launch campaigns fast",
                        icon: Rocket,
                    },
                    {
                        label: "Multi-tenant Platforms",
                        description: "Scale apps with one codebase",
                        icon: Globe,
                    },
                    {
                        label: "Web Apps",
                        description: "Ship features, not infrastructure",
                        icon: Search,
                    },
                    {
                        label: "Platform Engineers",
                        description: "Automate away repetition",
                        icon: Cpu,
                    },
                    {
                        label: "Design Engineers",
                        description: "Deploy for every idea",
                        icon: Palette,
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        label: "Resources",
        subMenus: [
            {
                title: "Tools",
                items: [
                    {
                        label: "Resource Center",
                        description: "Today's best practices",
                        icon: BookOpen,
                    },
                    {
                        label: "Marketplace",
                        description: "Extend and automate workflows",
                        icon: Search,
                    },
                    {
                        label: "Templates",
                        description: "Jumpstart app development",
                        icon: FileText,
                    },
                    {
                        label: "Guides",
                        description: "Find help quickly",
                        icon: BookOpen,
                    },
                    {
                        label: "Partner Finder",
                        description: "Get help from solution partners",
                        icon: Search,
                    },
                ],
            },
            {
                title: "Company",
                items: [
                    {
                        label: "Customers",
                        description: "Trusted by the best teams",
                        icon: Newspaper,
                    },
                    {
                        label: "Blog",
                        description: "The latest posts and changes",
                        icon: FileText,
                    },
                    {
                        label: "Changelog",
                        description: "See what shipped",
                        icon: BookOpen,
                    },
                    {
                        label: "Press",
                        description: "Read the latest news",
                        icon: Newspaper,
                    },
                ],
            },
        ],
    },
    {
        id: 4,
        label: "Enterprise",
        link: "#",
    },
    {
        id: 5,
        label: "Docs",
        link: "#",
    },
    {
        id: 6,
        label: "Pricing",
        link: "#",
    },
];
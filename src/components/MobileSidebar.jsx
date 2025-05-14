import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { ChevronDown, Home, Users, Grid, DollarSign, Tool, FileText, Settings, UserPlus, UserCheck, Activity, Clipboard, AlignJustify, Zap, ArrowUpRight, Plus, Eye } from "react-feather";
import { motion } from "framer-motion";



export const sidebarLinks = [
    {
        id: 1,
        title: "Dashboard",
        icon: Grid,
        path: "/"
    },
    {
        id: 2,
        title: "Tenants",
        icon: Users,
        actions: [
            { id: 1, title: "Add Tenant", path: "/tenants/add", icon: Plus },
            { id: 2, title: "View Tenants", path: "/tenants/view", icon: Eye },

        ]
    },
    {
        id: 3,
        title: "Apartments",
        icon: Home,
        actions: [
            { id: 1, title: "Add Apartment", path: "/apartments/add", icon: Plus },
            { id: 2, title: "My Apartments", path: "/apartments/view", icon: Eye },
            { id: 3, title: "Add Unit", path: "/units/add", icon: Plus },
        ]
    },
    {
        id: 11,
        title: "Units",
        icon: Home,
        actions: [
            { id: 1, title: "Add Unit", path: "/units/add", icon: Plus },
            { id: 2, title: "My Units", path: "/units/view", icon: Eye },
        ]
    },
    {
        id: 4,
        title: "Payments",
        icon: DollarSign,
        actions: [
            { id: 1, title: "View Transactions", path: "/payments/transactions", icon: DollarSign },
            { id: 2, title: "Create Invoice", path: "/payments/record", icon: ArrowUpRight },
            { id: 3, title: "Payment Settings", path: "/payments/settings", icon: Settings },
        ]
    },
    {
        id: 5,
        title: "Maintenance",
        icon: Tool,
        actions: [
            { id: 1, title: "Request Maintenance", path: "/maintenance/request", icon: UserPlus },
            { id: 2, title: "View Requests", path: "/maintenance/requests", icon: UserPlus }
        ]
    },
    {
        id: 6,
        title: "Reports",
        icon: FileText,
        actions: [
            { id: 1, title: "Generate Report", path: "/reports/generate", icon: Zap },
            { id: 2, title: "View Reports", path: "/reports/view", icon: Clipboard }
        ]
    },
    {
        id: 7,
        title: "Settings",
        icon: Settings,
        actions: [
            { id: 1, title: "Profile", path: "/profile", icon: UserPlus },
            { id: 2, title: "System", path: "/system", icon: Activity }
        ]
    }
];

export default function MobileSidebar() {
    const [openSections, setOpenSections] = useState({});
    const location = useLocation();

    const toggleSection = (id) => {
        setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="md:hidden block w-full h-screen z-20 bg-white p-4 space-y-10">
            <div className="w-full py-5 flex flex-row items-end space-x-4 px-4">
                <img src="../apartment.png" className="h-10 w-10" alt="Haus Logo" />
                <h1 className="text-black font-bold tracking-wider text-2xl">Haus</h1>
            </div>
            <ul>
                {sidebarLinks.map((link) => {
                    const isActive = location.pathname === link.path || (link.actions && link.actions.some(action => location.pathname === action.path));

                    return (
                        <li key={link.id} className="mb-2">
                            <button
                                onClick={() => link.actions ? toggleSection(link.id) : null}
                                className={`w-full flex items-center group justify-between p-3 rounded-md transition ${isActive ? "bg-black text-white" : "hover:bg-gray-200"
                                    }`}
                            >
                                <Link to={link.path} className="flex items-center gap-2 w-full text-neutral-500">
                                    <link.icon size={20} />
                                    <span className={`${isActive && "text-white"} text-neutral-700`}>{link.title}</span>
                                </Link>
                                {link.actions && (
                                    <ChevronDown
                                        size={18}
                                        className={`transition-transform ${openSections[link.id] ? "rotate-180" : ""
                                            }`}
                                    />
                                )}
                            </button>
                            {/* {link.actions && openSections[link.id] && (
                                <ul className="ml-6 mt-1 border-l border-gray-300 pl-3">
                                    {link.actions.map((action) => (
                                        <li key={action.id} className="">

                                            <Link
                                                to={action.path}
                                                className={`flex flex-row space-x-3 w-full p-2 rounded-md transition ${location.pathname === action.path ? "bg-indigo-300 text-white" : "hover:bg-gray-200"
                                                    }`}
                                            >
                                                <action.icon size={20} />
                                                <span>{action.title}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )} */}

                            {link.actions && (
                                <motion.ul
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={openSections[link.id] ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="ml-6 mt-1 border-l border-gray-300 pl-3 overflow-hidden"
                                >
                                    {link.actions.map((action) => (
                                        <li key={action.id}>
                                            <Link
                                                to={action.path}
                                                className={`flex flex-row space-x-3 w-full p-2 rounded-md transition ${location.pathname === action.path ? "bg-black text-white" : "hover:bg-gray-200"
                                                    }`}
                                            >
                                                {action.icon && <action.icon className="text-neutral-500" size={20} />}
                                                <span className="text-neutral-500">{action.title}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </motion.ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

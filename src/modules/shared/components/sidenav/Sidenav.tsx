import { useState } from "react";
import { Map, Shield, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const menuItems = [
  { name: "Intersecciones", icon: <Map />, path: "/intersections" },
  { name: "Permisos", icon: <Shield />, path: "/permissions" },
];

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.aside
      initial={{ width: isOpen ? 250 : 80 }}
      animate={{ width: isOpen ? 250 : 80 }}
      transition={{ duration: 0.3 }}
      className="h-screen bg-gray-900 text-white shadow-lg flex flex-col p-4"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mb-6 p-2 rounded bg-gray-800 hover:bg-gray-700 flex items-center justify-center cursor-pointer"
      >
        <Menu />
      </button>
      <nav className="flex flex-col gap-4">
        {menuItems.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{ scale: 1.05 }}
          >
            <Link
              to={item.path}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              {item.icon}
              {isOpen && <span className="text-lg">{item.name}</span>}
            </Link>
          </motion.div>
        ))}
      </nav>
    </motion.aside>
  );
}

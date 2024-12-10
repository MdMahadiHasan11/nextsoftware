"use client";

import { useState, useEffect } from "react";
import { FaHome, FaBox, FaBuilding, FaIndustry, FaBoxes, FaWarehouse, FaCog, FaUsers, FaCaretDown, FaCaretUp } from "react-icons/fa"; // Import relevant icons
import { FC } from "react";
import Link from "next/link"; // Import next/link for routing

const LeftSidebar: FC = () => {
  // State for collapsing menu sections
  const [isBusinessUnitOpen, setIsBusinessUnitOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isConfigurationsOpen, setIsConfigurationsOpen] = useState(false);
  const [isSystemOpen, setIsSystemOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [activePath, setActivePath] = useState("");

  // Toggle functions for each section
  const toggleBusinessUnit = () => setIsBusinessUnitOpen(!isBusinessUnitOpen);
  const toggleCatalog = () => setIsCatalogOpen(!isCatalogOpen);
  const toggleUser = () => setIsUserOpen(!isUserOpen);
  const toggleConfigurations = () => setIsConfigurationsOpen(!isConfigurationsOpen);
  const toggleSystem = () => setIsSystemOpen(!isSystemOpen);

  // Set the client-side flag and the active path after the component mounts
  useEffect(() => {
    setIsClient(true); // Indicate client-side rendering
    setActivePath(window.location.pathname); // Get the current pathname after mounting
  }, []);

  // Determine active route for styling
  const isActive = (route: string) => {
    if (!isClient) return false; // Avoid accessing window on server-side
    return activePath === route; // Compare with client-side path
  };

  return (
    <div className="flex flex-col border w-64 bg-bg text-gray-800 h-screen">
      {/* Sidebar Header */}
      <div className="p-4 text-2xl font-bold">
        GENPOS
      </div>

      {/* Sidebar Navigation */}
      <nav className="flex-1 overflow-y-auto">
        <ul>
          {/* Dashboard */}
          <li>
            <Link href="/dashboard" className={`flex items-center p-4 ${isActive("/dashboard") ? "text-primary" : "hover:text-primary"}`}>
              <FaHome className="mr-3" />
              Dashboard
            </Link>
          </li>

          {/* Purchase */}
          <li>
            <Link href="/purchase" className={`flex items-center p-4 ${isActive("/purchase") ? "text-primary" : "hover:text-primary"}`}>
              <FaBox className="mr-3" />
              Purchase
            </Link>
          </li>

          {/* Business Unit */}
          <li>
            <button
              className={`flex items-center p-4 w-full text-left ${isActive("/business-unit") ? "text-primary" : "hover:text-primary"}`}
              onClick={toggleBusinessUnit}
            >
              <FaBuilding className="mr-3" />
              Business Unit
              {isBusinessUnitOpen ? (
                <FaCaretUp className="ml-auto" />
              ) : (
                <FaCaretDown className="ml-auto" />
              )}
            </button>

            {/* Sub-menu under Business Unit */}
            {isBusinessUnitOpen && (
              <ul className="pl-6">
                <li>
                  <Link href="/groups" className={`flex items-center p-4 ${isActive("/groups") ? "text-primary" : "hover:text-primary"}`}>
                    <FaIndustry className="mr-3" />
                    Groups
                  </Link>
                </li>
                <li>
                  <Link href="/companies" className={`flex items-center p-4 ${isActive("/companies") ? "text-primary" : "hover:text-primary"}`}>
                    <FaBoxes className="mr-3" />
                    Companies
                  </Link>
                </li>
                <li>
                  <Link href="/brands" className={`flex items-center p-4 ${isActive("/brands") ? "text-primary" : "hover:text-primary"}`}>
                    <FaBoxes className="mr-3" />
                    Brands
                  </Link>
                </li>
                <li>
                  <Link href="/outlets" className={`flex items-center p-4 ${isActive("/outlets") ? "text-primary" : "hover:text-primary"}`}>
                    <FaBuilding className="mr-3" />
                    Outlets
                  </Link>
                </li>
                <li>
                  <Link href="/warehouses" className={`flex items-center p-4 ${isActive("/warehouses") ? "text-primary" : "hover:text-primary"}`}>
                    <FaWarehouse className="mr-3" />
                    Warehouses
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Catalog */}
          <li>
            <button
              className={`flex items-center p-4 w-full text-left ${isActive("/catalog") ? "text-primary" : "hover:text-primary"}`}
              onClick={toggleCatalog}
            >
              <FaBox className="mr-3" />
              Catalog
              {isCatalogOpen ? (
                <FaCaretUp className="ml-auto" />
              ) : (
                <FaCaretDown className="ml-auto" />
              )}
            </button>
            {isCatalogOpen && (
              <ul className="pl-6">
                <li>
                  <Link href="/catalog-details" className={`flex items-center p-4 ${isActive("/catalog-details") ? "text-primary" : "hover:text-primary"}`}>
                    <FaBoxes className="mr-3" />
                    Catalog Details
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* User */}
          <li>
            <button
              className={`flex items-center p-4 w-full text-left ${isActive("/user") ? "text-primary" : "hover:text-primary"}`}
              onClick={toggleUser}
            >
              <FaUsers className="mr-3" />
              User
              {isUserOpen ? (
                <FaCaretUp className="ml-auto" />
              ) : (
                <FaCaretDown className="ml-auto" />
              )}
            </button>
            {isUserOpen && (
              <ul className="pl-6">
                <li>
                  <Link href="/user-settings" className={`flex items-center p-4 ${isActive("/user-settings") ? "text-primary" : "hover:text-primary"}`}>
                    <FaUsers className="mr-3" />
                    User Settings
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Configurations */}
          <li>
            <button
              className={`flex items-center p-4 w-full text-left ${isActive("/configurations") ? "text-primary" : "hover:text-primary"}`}
              onClick={toggleConfigurations}
            >
              <FaCog className="mr-3" />
              Configurations
              {isConfigurationsOpen ? (
                <FaCaretUp className="ml-auto" />
              ) : (
                <FaCaretDown className="ml-auto" />
              )}
            </button>
            {isConfigurationsOpen && (
              <ul className="pl-6">
                <li>
                  <Link href="/settings" className={`flex items-center p-4 ${isActive("/settings") ? "text-primary" : "hover:text-primary"}`}>
                    <FaCog className="mr-3" />
                    Settings
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* System */}
          <li>
            <button
              className={`flex items-center p-4 w-full text-left ${isActive("/system") ? "text-primary" : "hover:text-primary"}`}
              onClick={toggleSystem}
            >
              <FaCog className="mr-3" />
              System
              {isSystemOpen ? (
                <FaCaretUp className="ml-auto" />
              ) : (
                <FaCaretDown className="ml-auto" />
              )}
            </button>
            {isSystemOpen && (
              <ul className="pl-6">
                <li>
                  <Link href="/system-settings" className={`flex items-center p-4 ${isActive("/system-settings") ? "text-primary" : "hover:text-primary"}`}>
                    <FaCog className="mr-3" />
                    System Settings
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LeftSidebar;

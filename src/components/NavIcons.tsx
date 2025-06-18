'use client';

import { useState } from "react";
import Button from "./Button";
import CartBadge from "./CartBadge";
import { ShoppingCart, User, Filter } from 'lucide-react';
import { usePathname } from 'next/navigation';

type NavIconsProps = {
  setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavIcons = ({ setIsFilterOpen }: NavIconsProps) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const isLoggedIn = false;
  const pathname = usePathname();
  const showFilter = pathname === '/products';

  const counter = 0;
  return (
    <div className="flex items-center justify-between gap-4">
      {/* MOBILE */}
      {
        showFilter && (
        <Button
          icon={<Filter className="h-5 w-5 text-current" />}
          className="md:hidden text-teal-200 border-teal-400 hover:text-white hover:border-white"
          onClick={() => {setIsFilterOpen( (prev) => !prev)}}
        />
        )
      }

      <div className="md:hidden relative cursor-pointer">
        <Button
          icon={<ShoppingCart className="h-5 w-5 text-current" />}
          className="text-teal-200 border-teal-400 hover:text-white hover:border-white"
        />
        <CartBadge count={counter} />
      </div>

      {/* BIGGER SCREENS */}
      <div className="hidden md:flex items-center gap-8">
        {
          showFilter && (
          <Button
            icon={<Filter className="h-5 w-5 text-current" />}
            className="lg:hidden text-teal-200 border-teal-400 hover:text-white hover:border-white"
            onClick={() => {setIsFilterOpen( (prev) => !prev)}}
          />
          )
        }

        <div className="relative cursor-pointer">
          <Button
            icon={<ShoppingCart className="h-5 w-5 text-current" />}
            className="text-teal-200 border-teal-400 hover:text-white hover:border-white"
          />
          <CartBadge count={counter} />
        </div>

        <Button
          icon={<User className="h-5 w-5 text-current" />}
          className="text-teal-200 border-teal-400 hover:text-white hover:border-white"
        />
      </div>
    </div>
  )
}

export default NavIcons

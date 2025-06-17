'use client';

import { useState } from "react";
import Button from "./Button";
import CartBadge from "./CartBadge";
import { ShoppingCart, User } from 'lucide-react';

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const isLoggedIn = false;
  const counter = 0;
  return (
    <div className="flex items-center justify-between gap-8">
      {/* MOBILE */}
      <div className="md:hidden relative cursor-pointer">
        <Button
          icon={<ShoppingCart className="h-5 w-5 text-current" />}
          className="text-teal-200 border-teal-400 hover:text-white hover:border-white"
        />
        <CartBadge count={counter} />
      </div>

      {/* BIGGER SCREENS */}
      <div className="hidden md:flex items-center gap-8">
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

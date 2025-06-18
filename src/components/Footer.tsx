'use client'

import Link from "next/link"

import { House, ChevronLeft, User } from 'lucide-react';
import Button from "./Button";

import useNavigation from "@/hook/useNavigation";

const Footer = () => {
  const {
    isHomeActive,
    isUserProfileActive
  } = useNavigation();


  return (
    <div className={`fixed bottom-0 w-full py-4 z-10 bg-teal-600 text-white border-t border-zinc-200 shadow-lg md:hidden`}>
      <div className="flex flex-row justify-around items-center bg-transparent w-full">
        {/* Back Button */}
        <Link href="/back" className="flex items-center">
          <Button
            icon={<ChevronLeft  className="h-5 w-5 text-current" />}
            className="text-teal-200 border-teal-300 hover:text-white hover:border-white transition"
          />
        </Link>

        {/* Home Button */}
        <Link href="/" className="flex items-center">
          { isHomeActive ? (
            <Button
              icon={<House className="h-5 w-5 text-current" />}
              className="text-white border-white hover:bg-white hover:text-teal-600 transition"
            />
          ) : (
            <Button
              icon={<House className="h-5 w-5 text-current" />}
              className="text-teal-200 border-teal-300 hover:text-white hover:border-white transition"
            />
          )
          }
        </Link>

        {/* User Profile Button */}
        <Link href="/profile" className="flex items-center">
          { isUserProfileActive ? (
            <Button
              icon={<User className="h-5 w-5 text-current" />}
              className="text-white border-white hover:bg-white hover:text-teal-600 transition"
            />
          ) : (
            <Button
              icon={<User className="h-5 w-5 text-current" />}
              className="text-teal-200 border-teal-300 hover:text-white hover:border-white transition"
            />
          )
          }
        </Link>
      </div>
    </div>
  )
}

export default Footer

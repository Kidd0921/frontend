'use client'

import { useEffect, useState } from "react"

import { usePathname } from "next/navigation"

const useNavigation = () => {
  const pathname = usePathname();
  const [isHomeActive, setIsHomeActive] = useState(false);
  const [isUserProfileActive, setIsUserProfileActive] = useState(false);

  useEffect(() => {
    setIsHomeActive(false);
    setIsUserProfileActive(false);

    switch (pathname) {
      case '/':
        setIsHomeActive(true);
        break;
      case '/profile':
        setIsUserProfileActive(true);
        break;
      default:
        // Handle any other cases here
        break;
    }
  }, [pathname]);

  return {
    isHomeActive,
    isUserProfileActive,
  };
};

export default useNavigation;
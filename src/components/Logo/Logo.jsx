"use client";

import Image from "next/image";
import { useTheme } from "nextra-theme-docs";
import React, { useCallback, useMemo } from "react";

const Logo = () => {
  const { theme, systemTheme } = useTheme();

  const handleLogo = () => {
    if (systemTheme === "light" || theme === "light") {
      return "/dept-logo.svg";
    }
    return "/dept-logo-white.svg";
  };

  const logoSrc = useMemo(() => handleLogo(), [theme, systemTheme]);

  return <Image alt="Dept" height={28} width={111} src={logoSrc} />;
};

export default Logo;

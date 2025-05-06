"use client";

import Image from "next/image";
import { useTheme } from "nextra-theme-docs";
import React, { useCallback, useMemo } from "react";

const Logo = () => {
  const { theme, systemTheme, resolvedTheme } = useTheme();
  const handleLogo = () => {
    return resolvedTheme === "light"
      ? "/dept-logo.svg"
      : "/dept-logo-white.svg";
  };

  const logoSrc = useMemo(() => handleLogo(), [theme, systemTheme]);

  return <img key={logoSrc} alt="Dept" height={28} width={111} src={logoSrc} />;
};

export default Logo;

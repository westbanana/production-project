import React from "react";
import {classNames} from "shared/lib/classNames";
import cls from "./Navbar.module.scss";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavBarProps {
  className?: string
}

export const NavBar = ({className}:NavBarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/' className={cls.mainLink}>
          Головна
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>
          О сайті
        </AppLink>
      </div>
    </div>
  );
};

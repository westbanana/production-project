import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface SidebarItemType {
  path: string
  text: string
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
  authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'Головна сторінка',
        Icon: MainIcon,
    },
    {
        path: RoutePath.about,
        text: 'Про нас',
        Icon: AboutIcon,
    },
    {
        path: RoutePath.profile,
        text: 'Профіль',
        Icon: ProfileIcon,
        authOnly: true,
    },
];

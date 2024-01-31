import { classNames, Mods } from 'shared/lib/classNames';
import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string
  src?: string
  size?: number
  alt?: string
}

export const Avatar = ({
    className, src, size, alt,
}: AvatarProps) => {
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    return (
        <img
            style={styles}
            alt={alt}
            src={src}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
};

import { classNames, Mods } from 'shared/lib/classNames';
import React, {
    InputHTMLAttributes,
    memo, MutableRefObject,
    useEffect,
    useRef,
    useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface InputProps extends HTMLInputProps{
  className?: string
  value?: string | number
  onChange?: (value:string) => void
  autofocus?: boolean
  readonly?: boolean
}

export const Input = memo((props: InputProps) => {
    const {
        value,
        onChange,
        className,
        type = 'text',
        placeholder,
        autoFocus,
        readonly = false,
        ...otherProps
    } = props;
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const ref = useRef() as MutableRefObject<HTMLInputElement>;

    const isCaretVisible = isFocused && !readonly;

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            if (ref.current) {
                ref.current.focus();
            }
        }
    }, [autoFocus]);

    const onFocusHandler = () => {
        setIsFocused(true);
    };

    const onBlurHandler = () => {
        setIsFocused(false);
    };
    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onSelectHandler = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    const mods: Mods = {
        [cls.readOnly]: readonly,
    };

    return (
        <div className={classNames(cls.InputWrapper, mods, [])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    className={cls.input}
                    type={type}
                    onChange={onChangeHandler}
                    value={value}
                    onFocus={onFocusHandler}
                    onBlur={onBlurHandler}
                    onSelect={onSelectHandler}
                    readOnly={readonly}
                    {...otherProps}
                />
                {isCaretVisible && (
                    <span
                        className={cls.caret}
                        style={{
                            left: `${caretPosition * 9}px`,
                        }}
                    />
                )}
            </div>
        </div>
    );
});

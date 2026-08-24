import React, { forwardRef } from 'react';
import { cn } from '../../lib/utils';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export type ButtonAsButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
    isExternal?: undefined;
  };

export type ButtonAsAnchorProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    isExternal?: boolean;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      variant = 'primary',
      size = 'md',
      leftIcon,
      rightIcon,
      isLoading = false,
      className = '',
      ...restProps
    } = props;

    const baseStyles =
      'inline-flex items-center justify-center font-sans font-medium transition-all duration-300 relative select-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-botanical-300';

    const variantStyles: Record<ButtonVariant, string> = {
      primary:
        'bg-botanical-800 hover:bg-botanical-750 text-ivory-100 border border-botanical-600/40 hover:border-earth-gold/60 shadow-lg shadow-botanical-950/50 hover:shadow-botanical-900/60',
      secondary:
        'bg-ivory-100 hover:bg-ivory-200 text-botanical-950 border border-ivory-300 shadow-md',
      outline:
        'bg-transparent hover:bg-botanical-850/60 text-ivory-100 border border-ivory-200/20 hover:border-ivory-200/60',
      ghost:
        'bg-transparent hover:bg-botanical-800/40 text-sand-300 hover:text-ivory-100 border border-transparent',
      gold:
        'bg-earth-gold hover:bg-earth-gold-light text-botanical-950 font-semibold shadow-lg shadow-earth-gold/20',
    };

    const sizeStyles: Record<ButtonSize, string> = {
      sm: 'text-xs tracking-wider uppercase px-4 py-2 gap-2 rounded-sm',
      md: 'text-sm tracking-wide px-6 py-3 gap-2.5 rounded-sm',
      lg: 'text-base tracking-wide px-8 py-4 gap-3 rounded-sm',
    };

    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const content = (
      <>
        {isLoading && (
          <span
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"
            aria-hidden="true"
          />
        )}
        {!isLoading && leftIcon && <span className="inline-flex shrink-0" aria-hidden="true">{leftIcon}</span>}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="inline-flex shrink-0" aria-hidden="true">{rightIcon}</span>}
      </>
    );

    if ('href' in restProps && restProps.href) {
      const { href, isExternal, ...anchorProps } = restProps as ButtonAsAnchorProps;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={combinedClassName}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          {...anchorProps}
        >
          {content}
        </a>
      );
    }

    const { disabled, ...buttonProps } = restProps as ButtonAsButtonProps;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type="button"
        className={combinedClassName}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        {...buttonProps}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

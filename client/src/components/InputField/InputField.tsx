import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Eye, EyeOff, X, Loader2 } from 'lucide-react';

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  clearable?: boolean;
  onClear?: () => void;
  type?: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      value,
      onChange,
      label,
      placeholder,
      helperText,
      errorMessage,
      disabled = false,
      invalid = false,
      variant = 'outlined',
      size = 'md',
      loading = false,
      clearable = false,
      onClear,
      type = 'text',
      className,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [internalValue, setInternalValue] = React.useState(value || '');
    
    const isPassword = type === 'password';
    const inputType = isPassword && showPassword ? 'text' : type;
    
    React.useEffect(() => {
      setInternalValue(value || '');
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInternalValue(e.target.value);
      onChange?.(e);
    };

    const handleClear = () => {
      setInternalValue('');
      onClear?.();
      if (onChange) {
        const syntheticEvent = {
          target: { value: '' },
          currentTarget: { value: '' },
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(syntheticEvent);
      }
    };

    const sizeClasses = {
      sm: 'px-2 py-1 text-sm',
      md: 'px-3 py-2',
      lg: 'px-4 py-3 text-lg',
    };

    const labelSizeClasses = {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    };

    const variantClasses = {
      outlined: cn(
        'border border-border bg-background',
        'focus:ring-2 focus:ring-ring focus:border-ring',
        invalid && 'border-destructive focus:border-destructive focus:ring-destructive',
        disabled && 'bg-muted cursor-not-allowed opacity-50'
      ),
      filled: cn(
        'border-0 bg-muted',
        'focus:ring-2 focus:ring-ring',
        invalid && 'bg-destructive/10 focus:ring-destructive',
        disabled && 'cursor-not-allowed opacity-50'
      ),
      ghost: cn(
        'border-0 border-b-2 border-border rounded-none bg-transparent',
        'focus:border-ring focus:outline-none',
        invalid && 'border-destructive focus:border-destructive',
        disabled && 'cursor-not-allowed opacity-50'
      ),
    };

    const radiusClasses = {
      outlined: 'rounded-md',
      filled: 'rounded-md',
      ghost: 'rounded-none',
    };

    return (
      <div className="space-y-2">
        {label && (
          <label className={cn(
            'block font-medium text-foreground',
            labelSizeClasses[size],
            disabled && 'text-muted-foreground'
          )}>
            {label}
          </label>
        )}
        
        <div className="relative">
          <input
            ref={ref}
            type={inputType}
            value={internalValue}
            onChange={handleChange}
            placeholder={placeholder}
            disabled={disabled || loading}
            className={cn(
              'w-full transition-colors duration-200',
              'text-foreground placeholder:text-muted-foreground',
              'focus:outline-none',
              sizeClasses[size],
              variantClasses[variant],
              radiusClasses[variant],
              (clearable && internalValue) || loading || isPassword ? 'pr-10' : '',
              className
            )}
            data-testid="input-field"
            {...props}
          />
          
          {/* Right side icons */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            {loading && (
              <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" data-testid="input-loading" />
            )}
            
            {!loading && clearable && internalValue && !disabled && (
              <button
                type="button"
                onClick={handleClear}
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="input-clear"
              >
                <X className="h-4 w-4" />
              </button>
            )}
            
            {!loading && !clearable && isPassword && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="input-password-toggle"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            )}
          </div>
        </div>
        
        {/* Helper text or error message */}
        {(helperText || errorMessage) && (
          <p className={cn(
            'text-sm',
            errorMessage ? 'text-destructive' : 'text-muted-foreground'
          )} data-testid={errorMessage ? "input-error" : "input-helper"}>
            {errorMessage || helperText}
          </p>
        )}
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export { InputField };

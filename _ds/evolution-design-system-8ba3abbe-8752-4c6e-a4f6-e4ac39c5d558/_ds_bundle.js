/* @ds-bundle: {"format":4,"namespace":"EvolutionDesignSystem_8ba3ab","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"5d96cf20b3eb","components/core/Button.jsx":"92c21a919806","components/core/Card.jsx":"7784e3a0ead9","components/core/Divider.jsx":"05bd3d6c1593","components/core/Input.jsx":"7c46c9272e0e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EvolutionDesignSystem_8ba3ab = window.EvolutionDesignSystem_8ba3ab || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  variant,
  size
}) {
  const variants = {
    gold: {
      background: 'var(--color-gold-500)',
      color: 'var(--color-dark-900)'
    },
    'gold-outline': {
      background: 'transparent',
      color: 'var(--color-gold-500)',
      border: '1px solid var(--color-gold-500)'
    },
    dark: {
      background: 'var(--color-dark-800)',
      color: 'var(--color-white)'
    },
    light: {
      background: 'var(--color-gray-100)',
      color: 'var(--color-dark-700)'
    },
    white: {
      background: 'var(--color-white)',
      color: 'var(--color-dark-900)'
    }
  };
  const sizes = {
    xs: {
      padding: '3px 10px',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-widest)'
    },
    sm: {
      padding: '5px 14px',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-ultra)'
    },
    md: {
      padding: '7px 18px',
      fontSize: 'var(--text-sm)',
      letterSpacing: 'var(--tracking-widest)'
    }
  };
  const v = variant || 'gold-outline';
  const s = size || 'sm';
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: 'var(--font-primary)',
    fontWeight: 'var(--weight-semibold)',
    textTransform: 'uppercase',
    borderRadius: 'var(--radius-none)',
    border: 'none',
    ...(variants[v] || variants['gold-outline']),
    ...(sizes[s] || sizes.sm)
  };
  return React.createElement('span', {
    style
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  children,
  variant,
  size,
  disabled,
  onClick,
  href,
  fullWidth
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-primary)',
    fontWeight: 'var(--weight-semibold)',
    textTransform: 'uppercase',
    textDecoration: 'none',
    letterSpacing: 'var(--tracking-ultra)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'var(--transition-btn)',
    whiteSpace: 'nowrap',
    width: fullWidth ? '100%' : 'auto',
    border: '1px solid transparent',
    outline: 'none',
    boxSizing: 'border-box'
  };
  const variants = {
    primary: {
      background: 'var(--color-gold-500)',
      color: 'var(--color-dark-900)',
      borderColor: 'var(--color-gold-500)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--color-gold-500)',
      borderColor: 'var(--color-gold-500)'
    },
    'secondary-dark': {
      background: 'transparent',
      color: 'var(--color-white)',
      borderColor: 'var(--color-white)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-gold-500)',
      borderColor: 'transparent',
      letterSpacing: 'var(--tracking-widest)'
    },
    dark: {
      background: 'var(--color-dark-900)',
      color: 'var(--color-white)',
      borderColor: 'var(--color-dark-900)'
    }
  };
  const sizes = {
    sm: {
      padding: 'var(--padding-btn-sm)',
      fontSize: 'var(--text-xs)'
    },
    md: {
      padding: 'var(--padding-btn-md)',
      fontSize: 'var(--text-sm)'
    },
    lg: {
      padding: 'var(--padding-btn-lg)',
      fontSize: 'var(--text-base)'
    }
  };
  const v = variant || 'primary';
  const s = size || 'md';
  const Tag = href ? 'a' : 'button';
  return React.createElement(Tag, {
    href,
    onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    style: {
      ...base,
      ...(variants[v] || variants.primary),
      ...(sizes[s] || sizes.md)
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  variant,
  padding,
  bordered,
  shadow,
  style: extStyle
}) {
  const variants = {
    light: {
      background: 'var(--color-white)',
      color: 'var(--color-dark-900)',
      border: bordered !== false ? '1px solid var(--color-border-default)' : 'none'
    },
    dark: {
      background: 'var(--color-dark-800)',
      color: 'var(--color-white)',
      border: bordered !== false ? '1px solid var(--color-dark-600)' : 'none'
    },
    'gold-outline': {
      background: 'transparent',
      color: 'var(--color-white)',
      border: '1px solid var(--color-border-gold)'
    },
    cream: {
      background: 'var(--color-cream)',
      color: 'var(--color-dark-900)',
      border: bordered !== false ? '1px solid var(--color-gray-200)' : 'none'
    }
  };
  const paddings = {
    sm: 'var(--padding-card-sm)',
    md: 'var(--padding-card-md)',
    lg: 'var(--padding-card-lg)'
  };
  const v = variant || 'light';
  const p = padding || 'md';
  const cardStyle = {
    borderRadius: 'var(--radius-none)',
    padding: paddings[p] || paddings.md,
    boxShadow: shadow ? 'var(--shadow-md)' : 'none',
    transition: 'box-shadow var(--transition-normal)',
    ...variants[v],
    ...extStyle
  };
  return React.createElement('div', {
    style: cardStyle
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function Divider({
  color,
  showStar,
  width,
  style: extStyle
}) {
  const c = color || 'gold';
  const lineColor = c === 'gold' ? 'var(--color-gold-500)' : c === 'white' ? 'rgba(255,255,255,0.4)' : 'var(--color-gray-300)';
  const starColor = c === 'gold' ? 'var(--color-gold-500)' : c === 'white' ? 'rgba(255,255,255,0.7)' : 'var(--color-gray-400)';
  const showS = showStar !== false;
  const w = width || '200px';
  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    width: '100%',
    ...extStyle
  };
  const lineStyle = {
    flex: '0 0 auto',
    width: w,
    height: '1px',
    background: lineColor
  };
  const starStyle = {
    color: starColor,
    fontSize: '10px',
    lineHeight: 1,
    flexShrink: 0
  };
  if (!showS) {
    return React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: 'center',
        ...extStyle
      }
    }, React.createElement('div', {
      style: {
        width: w,
        height: '1px',
        background: lineColor
      }
    }));
  }
  return React.createElement('div', {
    style
  }, React.createElement('div', {
    style: lineStyle
  }), React.createElement('span', {
    style: starStyle
  }, '✦'), React.createElement('div', {
    style: lineStyle
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  value,
  onChange,
  type,
  variant,
  name,
  required,
  helperText
}) {
  const isDark = variant === 'dark';
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    width: '100%'
  };
  const labelStyle = {
    fontFamily: 'var(--font-primary)',
    fontSize: 'var(--text-xs)',
    fontWeight: 'var(--weight-semibold)',
    letterSpacing: 'var(--tracking-ultra)',
    textTransform: 'uppercase',
    color: isDark ? 'var(--color-text-muted-dark)' : 'var(--color-gray-500)'
  };
  const inputStyle = {
    fontFamily: 'var(--font-primary)',
    fontSize: 'var(--text-base)',
    fontWeight: 'var(--weight-light)',
    color: isDark ? 'var(--color-white)' : 'var(--color-dark-900)',
    background: 'transparent',
    border: 'none',
    borderBottom: isDark ? '1px solid var(--color-dark-600)' : '1px solid var(--color-gray-300)',
    borderRadius: '0',
    padding: '12px 0',
    width: '100%',
    outline: 'none',
    transition: 'border-color var(--transition-normal)',
    letterSpacing: 'var(--tracking-wide)'
  };
  const helperStyle = {
    fontFamily: 'var(--font-primary)',
    fontSize: 'var(--text-xs)',
    color: 'var(--color-text-accent)',
    letterSpacing: 'var(--tracking-wider)'
  };
  return React.createElement('div', {
    style: containerStyle
  }, label && React.createElement('label', {
    style: labelStyle
  }, label), React.createElement('input', {
    type: type || 'text',
    name,
    required,
    placeholder: placeholder || '',
    value,
    onChange,
    style: inputStyle
  }), helperText && React.createElement('span', {
    style: helperStyle
  }, helperText));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Input = __ds_scope.Input;

})();

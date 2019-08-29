export default {
  up() {},
  down(size) {
    const sizes = {
      x2s:'400px',
      xs: '575.98px',
      sm: '767.98px',
      md: '991.98px',
      lg: '1199.98px',
      xl: "1400px"
    };
    return `@media (max-width: ${sizes[size]})`;
  }
};

const aliases = (prefix = 'src') => ({
  '@config': `${prefix}/config`,
  "@layouts": `${prefix}/views/layouts`,
  "@modules": `${prefix}/views/modules`,
  "@pages": `${prefix}/views/pages`,
  "@ui": `${prefix}/views/ui`
});

module.exports = aliases;

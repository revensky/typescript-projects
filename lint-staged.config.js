module.exports = {
  '*.{js,ts}': ['pnpm nx affected:lint --fix --files', 'pnpm nx format:write --files'],
};

module.exports = {
  name: 'feature-a',
  exposes: {
    './Module': 'apps/feature-a/src/app/remote-entry/entry.module.ts',
  },
};

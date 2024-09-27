import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  // Runtime functions that are used outside of runtime/ must be marked as external
  // https://github.com/nuxt/module-builder/issues/261#issuecomment-2082138639
  externals: [
    'runtime/utils/util',
  ],
})

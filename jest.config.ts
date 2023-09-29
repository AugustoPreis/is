import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
}

export default config;
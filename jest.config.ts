// jest.config.ts
import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
    verbose: true,
    transform: {
        // Transformation option to use jest with typescript
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    /**
     * Configuration option to tell jest to ignore imported components
     * from azure-devops-ui as they are not compiled to commonjs modules
     */
    transformIgnorePatterns: [
        'node_modules/(?!azure-devops-ui)',
    ],
    /**
     * Configuration option to use ts-jest with js files import
     */
    preset: 'ts-jest/presets/js-with-ts',
    moduleNameMapper: {
        // Name mapper to ignore css files import
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        'src/(.*)': '<rootDir>/src/$1'
    },
    /**
     * Configuration option to run rendering tests
     */
    testEnvironment: 'jsdom',
    reporters: ['default', ['jest-junit', { suiteName: 'jest tests', outputName: 'jest-report.xml', classNameTemplate: '{classname}', titleTemplate: '{title}' }]]
};
export default config;

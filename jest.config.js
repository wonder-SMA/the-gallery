"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testEnvironment: 'jsdom',
    moduleDirectories: [
        'node_modules',
        'src'
    ],
};

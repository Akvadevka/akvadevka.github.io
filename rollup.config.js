import {
    nodeResolve
} from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from "@rollup/plugin-typescript";

export default {
    input: 'src/joke.ts',
    output: {
        file: 'dist/bundle.js'
    },
    plugins: [typescript({
        compilerOptions: {
            allowSyntheticDefaultImports: true,
            esModuleInterop: true // Добавленная опция
        }
    }), nodeResolve({
        browser: true
    }), terser()],
};

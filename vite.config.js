import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
export default defineConfig(function (_a) {
    var mode = _a.mode;
    return {
        define: {},
        plugins: [vue()],
    };
});

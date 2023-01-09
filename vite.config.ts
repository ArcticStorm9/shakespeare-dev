import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	base: '/shakespeare-dev/',
	plugins: [sveltekit()],
};

export default config;

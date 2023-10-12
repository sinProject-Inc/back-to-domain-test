import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		coverage: {
			all: true,
			include: ['src/**/*.ts'],
			exclude: ['src/scripts/create_git_branch.ts'],
			reporter: ['lcov', 'text'],
		},
	},
})

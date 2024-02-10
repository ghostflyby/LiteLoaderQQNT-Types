
export interface manifest {
	manifest_version: 1 | 2 | 3 | 4,
	type: "extension" | "theme" | "framework" | undefined,
	name: string,
	slug: string,
	version: string,
	description: string,
	icon: string | null | undefined,
	authors: {
		name: string,
		link: string,
	}[],
	dependencies: string[] | undefined,
	platform: ("win32" | "darwin" | "linux")[],
	injects: {
		renderer: string | undefined,
		main: string | undefined,
		preload: string | undefined,
	},
	repository: {
		repo: string,
		branch: string,
		release: {
			tag: string,
			file: string | undefined,
		}
	} | undefined
}

export interface plugin {
	manifest: manifest,
	incompatible: boolean,
	disabled: boolean,
	path: {
		data: string,
		plugin: string,
		injects: {
			renderer: string,
			main: string,
			preload: string,
		}
	}
}

export interface LiteLoader {
	path: {
		root: string,
		profile: string,
		data: string,
		plugins: string,
	},
	versions: {
		qqnt: string,
		liteloader: string,
		node: string,
		chrome: string,
		electron: string,
	},
	os: {
		platform: "win32" | "darwin" | "linux",
	},
	package: {
		liteloader: any,
		qqnt: any,
	},
	config: {
		LiteLoader: {
			disabled_plugins: string[]
		}
	},
	plugins: {
		[name: string]: plugin
	}
}

declare global {
	const LiteLoader: LiteLoader
}
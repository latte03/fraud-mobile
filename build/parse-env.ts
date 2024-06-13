export type ParseBoolean<T> = {
  [K in keyof T]: T[K] extends string & ('true' | 'false') ? boolean : T[K]
}

export function parseEnv(viteEnv: ImportMetaEnv) {
  const env: ParseBoolean<ImportMetaEnv> = {
    VITE_BASE_API: '',
    VITE_ROUTER_HISTORY: 'hash',
    VITE_API_URL: '',
    VITE_HOST_URL: '',
    VITE_PUBLIC_PATH: '',
    VITE_DROP_CONSOLE: false,
    VITE_LEGAL_COMMENTS: false,
    VITE_APP_TITLE: '',
    BASE_URL: '',
    MODE: '',
    DEV: false,
    PROD: false,
    SSR: false,
  }

  for (const key in viteEnv) {
    env[key] = viteEnv[key] === 'true' ? true : viteEnv[key] === 'false' ? false : viteEnv[key]
  }

  return env
}

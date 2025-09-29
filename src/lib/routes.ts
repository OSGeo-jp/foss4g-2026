const base_routes = [
  '/',
  '/attend/register'
] as const

export const routes = {
  en: [...base_routes],
  ja: [...base_routes],
} as const
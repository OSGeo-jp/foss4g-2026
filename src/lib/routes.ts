const base_routes = [
  '/',
  // About sub-pages
  '/about',
  '/about/foss4g',
  '/about/map',
  '/about/organizers',
  '/about/concept',
  '/about/code-of-conduct',
  '/about/privacy-policy',
  '/about/terms-conditions',
  '/about/sponsors',
  // Register sub-pages
  '/register',
  '/register/registration',
  '/register/studentship',
  '/register/travel-grant',
  '/register/volunteering',
  '/register/cancellation',
  // Call for Papers sub-pages
  '/call-for-papers',
  '/call-for-papers/general-sessions',
  '/call-for-papers/academic-track',
  '/call-for-papers/workshops',
  '/call-for-papers/code-sprint',
  // Program Schedule sub-pages
  '/program-schedule',
  '/program-schedule/outline',
  '/program-schedule/keynote',
  '/program-schedule/presentations',
  '/program-schedule/workshops',
  '/program-schedule/events',
  // Attending sub-pages
  '/attending',
  '/attending/venue',
  '/attending/transport',
  '/attending/travel-guide',
  '/attending/accommodation',
  // Contact (single page)
  '/contact',
  // Legacy route
  '/attend/register'
] as const

export const routes = {
  en: [...base_routes],
  ja: [...base_routes],
} as const
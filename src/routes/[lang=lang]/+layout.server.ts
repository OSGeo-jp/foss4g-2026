import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ params, cookies }) => {
  const locale = (params.lang as 'en' | 'ja') || 'en'

  cookies.set('locale', locale, {
    path: '/',
    httpOnly: false,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 365
  })

  return { locale }
}
// If $types.d.ts exists elsewhere, update the import path accordingly, for example:
import type { PageServerLoad } from '../../$types'
export const prerender = true
export const load: PageServerLoad = ({ params }) => ({ lang: params.lang as 'en' | 'ja' })
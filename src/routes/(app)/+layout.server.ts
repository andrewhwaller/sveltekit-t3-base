import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = ({ locals }) => {
  if (!locals.session?.user) {
    throw redirect(302, '/login');
  }
  return {};
};
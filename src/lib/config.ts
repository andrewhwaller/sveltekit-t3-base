import { BookOpen, Home } from '@steeze-ui/heroicons';
import type { IconSource } from '@steeze-ui/heroicons/types';

export interface AppConfig {
	title: string;
	navMode: string;
	navItems: NavItem[];
	allowNavToggle: boolean;
	allowNavClose: boolean;
	displayLogo: boolean;
	displayMainMenu: boolean;
	displayUserMenu: boolean;
	thinNavbar: boolean;
	darkByDefault: boolean;
}

export interface NavItem {
	name: string;
	icon?: IconSource;
	href: string;
}

export const appConfig: AppConfig = {
	title: 'SvelteKit Base',
	navMode: 'sidebar',
	allowNavToggle: true,
	allowNavClose: true,
	displayLogo: false,
	displayMainMenu: false,
	displayUserMenu: false,
	thinNavbar: false,
	darkByDefault: false,
	navItems: [
		{
			name: 'Welcome',
			href: '/',
			icon: Home
		},
		{
			name: 'Test TRPC',
			href: '/test_trpc',
			icon: BookOpen
		}
	]
};

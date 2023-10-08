import { component$, Slot, useStyles$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import type { RequestHandler } from '@builder.io/qwik-city'
import './dashboard.css'

import styles from '../styles.css?inline'
import SidebarTwo from '~/components/common/sidebar/sidebar-two'

export const onGet: RequestHandler = async ({ cacheControl }) => {
	// Control caching for this request for best performance and to reduce hosting costs:
	// https://qwik.builder.io/docs/caching/
	cacheControl({
		// Always serve a cached response by default, up to a week stale
		staleWhileRevalidate: 60 * 60 * 24 * 7,
		// Max once every 5 seconds, revalidate on the server to get a fresh version of this page
		maxAge: 5,
	})
}

export const useServerTimeLoader = routeLoader$(() => {
	return {
		date: new Date().toISOString(),
	}
})

export default component$(() => {
	useStyles$(styles)
	return (
		<div id='dashboard-wrapper' class='relative h-screen p-2 gap-2'>
			<header class='[grid-area:navbar] min-h-[75px] rounded-lg bg-red-500 flex items-center relative'>
				<button
					data-drawer-target='logo-sidebar'
					data-drawer-toggle='logo-sidebar'
					aria-controls='logo-sidebar'
					type='button'
					class='absolute z-40 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
				>
					<span class='sr-only'>Openc sidebar</span>
					<svg
						class='w-6 h-6'
						aria-hidden='true'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							clip-rule='evenodd'
							fill-rule='evenodd'
							d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
						></path>
					</svg>
				</button>
			</header>
			<SidebarTwo />
			<main class='[grid-area:main] h-full rounded-lg overflow-y-auto bg-zinc-900 p-2'>
				<Slot />
			</main>
		</div>
	)
})

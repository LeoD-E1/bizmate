import { component$, Slot } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import type { RequestHandler } from '@builder.io/qwik-city'
import './dashboard.css'

// import styles from '../styles.css?inline'
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
	// useStyles$(styles)
	return (
		<div id='dashboard-wrapper' class='relative h-screen p-2 gap-2 bg-black'>
			<header class='[grid-area:navbar] min-h-[75px] rounded-lg bg-zinc-900 flex items-center relative justify-between md:justify-end px-3'>
				<button
					data-drawer-target='logo-sidebar'
					data-drawer-toggle='logo-sidebar'
					aria-controls='logo-sidebar'
					type='button'
					class='text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
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

				<div class='flex items-center'>
					<div class='flex items-center ml-3'>
						<div>
							<button
								type='button'
								class='flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
								aria-expanded='false'
								data-dropdown-toggle='dropdown-user'
							>
								<span class='sr-only'>Open user menu</span>
								<img
									class='rounded-full'
									src='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
									alt='user photo'
									width={40}
									height={40}
								/>
							</button>
						</div>
						<div
							class='z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600'
							id='dropdown-user'
						>
							<div class='px-4 py-3' role='none'>
								<p class='text-sm text-gray-900 dark:text-white' role='none'>
									Neil Sims
								</p>
								<p
									class='text-sm font-medium text-gray-900 truncate dark:text-gray-300'
									role='none'
								>
									neil.sims@flowbite.com
								</p>
							</div>
							<ul class='py-1' role='none'>
								<li>
									<a
										href='#'
										class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
										role='menuitem'
									>
										Dashboard
									</a>
								</li>
								<li>
									<a
										href='#'
										class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
										role='menuitem'
									>
										Settings
									</a>
								</li>
								<li>
									<a
										href='#'
										class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
										role='menuitem'
									>
										Earnings
									</a>
								</li>
								<li>
									<a
										href='#'
										class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
										role='menuitem'
									>
										Sign out
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</header>

			<SidebarTwo />
			<main class='[grid-area:main] h-full rounded-lg overflow-y-auto bg-zinc-900 p-5'>
				<Slot />
			</main>
		</div>
	)
})

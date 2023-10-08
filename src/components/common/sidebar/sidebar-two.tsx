import { component$ } from '@builder.io/qwik'
import { SidebarItem } from '../sidebar-item/sidebar-item'

export default component$(() => {
	const sections = {
		dashboardPages: [
			{
				name: 'Home',
				link: '/dashboard/',
				icon: 'uil-estate',
			},
			{
				name: 'Analitic',
				link: '/dashboard/analitic',
				icon: 'uil-graph-bar',
			},
			{
				name: 'Explore',
				link: 'dashboard/explore',
				icon: 'uil-compass',
			},
			{
				name: 'Shop',
				link: '/dashboard/shop',
				icon: 'uil-shopping-bag',
			},
			{
				name: 'Inbox',
				link: '/dashboard/inbox',
				icon: 'uil-inbox',
			},
		],
		tools: [
			{
				name: 'Settings',
				link: '/dashboard/settings',
				icon: 'uil-setting',
			},
			{
				name: 'Help',
				link: '/dashboard/help',
				icon: 'uil-question-circle',
			},
		],
		projects: [
			{
				name: 'Amazon',
				link: 'dashboard/project-amazon',
				icon: 'uil-folder',
			},
		],
	}
	return (
		<>
			<aside
				class='[grid-area:aside] md:w-full w-[80%] flex absolute overflow-y-auto bg-yellow-400 transition-transform -translate-x-full md:translate-x-0 top-0 left-0 z-40 h-screen border-2 border-gray-100'
				aria-label='Sidebar'
				id='logo-sidebar'
			>
				<nav class='flex flex-col flex-1'>
					<div class='h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800'>
						<a
							href='https://flowbite.com/'
							class='flex items-center pl-2.5 mb-5'
						>
							<img
								src='https://flowbite.com/docs/images/logo.svg'
								class='mr-3 sm:h-7'
								alt='Flowbite Logo'
								height={30}
								width={30}
							/>
							<span class='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
								Biz-Mate
							</span>
						</a>
						{Object.entries(sections).map(([key, value]) => (
							<section key={key} class='my-5'>
								{key != 'dashboardPages' && (
									<span class='text-sm text-gray-600 px-2 mx-2'>{key}</span>
								)}
								<div class={'flex-col gap-2 px-6 py-2 flex'}>
									{value.map(item => (
										<SidebarItem
											name={item.name}
											route={item.link}
											icon={item.icon}
											key={item.name}
										/>
									))}
								</div>
							</section>
						))}
					</div>
				</nav>
			</aside>
		</>
	)
})

import { component$ } from '@builder.io/qwik'
import { SidebarItem } from '../sidebar-item/sidebar-item'

export interface SidebarItemProps {
	item: { route: string; name: string }
}

export interface SidebarProps {
	items: SidebarItemProps[]
	logo: string
}

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
				link: '/dashboard/explore',
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
				link: '/dashboard/projec-amazon',
				icon: 'uil-folder',
			},
		],
	}

	return (
		<div class={'text-gray-900'}>
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
	)
})

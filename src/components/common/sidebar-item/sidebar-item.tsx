import { $, component$, useStylesScoped$ } from '@builder.io/qwik'
import { useNavigate, useLocation } from '@builder.io/qwik-city'

export interface SideBarItemProps {
	name?: string
	icon?: string
	route?: string
}

export const SidebarItem = component$(
	({ name, icon, route }: SideBarItemProps) => {
		useStylesScoped$(SideBarItemStyle)
		const navigation = useNavigate()
		const location = useLocation()

		const currentUrl = location.url.pathname === route

		const moveToPage = $(() => {
			if (route && route !== location.url.pathname) navigation(`${route}`)
		})

		return (
			<div
				onClick$={moveToPage}
				class={`qwik-sidebar-item-component ${currentUrl && 'selected'}`}
			>
				<span class='text-lg'>
					<i class={'uil ' + icon}></i>
				</span>
				<span class={'text-sm'}>
					<>{name}</>
				</span>
			</div>
		)
	}
)

export const SideBarItemStyle = `
        div:hover{
            opacity:1;
            transform: translateX(10px);
        }
    `

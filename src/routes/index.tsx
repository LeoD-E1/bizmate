import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
	return (
		<>
			<h1>Index.tsx</h1>
		</>
	)
})

export const head: DocumentHead = {
	title: 'Biz-mate client dashboard',
	meta: [
		{
			name: 'dashboard',
			content: 'Qwik site description',
		},
	],
}

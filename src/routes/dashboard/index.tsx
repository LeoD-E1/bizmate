import { component$ } from '@builder.io/qwik'
import AreaChart from '~/components/area-chart'

export default component$(() => {
	return (
		<>
			<h1 class='text-white'>Home</h1>
			<div class='flex gap-3'>
				<AreaChart />
			</div>
		</>
	)
})

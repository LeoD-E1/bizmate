import { component$ } from '@builder.io/qwik'
import AreaChart from '~/components/area-chart'
import GeneralInfo from '~/components/common/cards/general-info'

export default component$(() => {
	return (
		<>
			<div class='flex flex-col gap-5'>
				<div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6'>
					<GeneralInfo />
					<GeneralInfo />
					<GeneralInfo />
					<GeneralInfo />
				</div>
				<div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6'>
					<AreaChart id='1' />
					<AreaChart id='2' />
					<AreaChart id='3' />
					<AreaChart id='4' />
				</div>
			</div>
		</>
	)
})

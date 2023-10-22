import { component$ } from '@builder.io/qwik'

interface Props {
	icon?: string
	title?: string
	totalValue?: string
	value?: number
	percent?: number
	up?: boolean
}

const GeneralInfo = component$(
	({
		icon = 'uil-question-circle',
		percent = 22,
		title = 'Some Category',
		totalValue = '33k',
		up = true,
		value = 22,
	}: Props) => {
		return (
			<article class='p-5 bg-zinc-800 flex justify-between items-center rounded-lg'>
				<div class='flex flex-col justify-between'>
					<span class='text-gray-500'>{title}</span>
					<h4 class='text-blue-700 font-bold text-4xl'>{totalValue}</h4>
					<div class={`flex ${up ? 'text-green-500' : 'text-red-700'}`}>
						<span class='text-sm'>
							{up ? (
								<i class='uil uil-arrow-up'></i>
							) : (
								<i class='uil uil-arrow-down'></i>
							)}
						</span>

						<span class='text-sm'>
							{value} (${percent}%)
						</span>
					</div>
				</div>
				<div>
					<span class='text-6xl text-blue-700'>
						<i class={'uil ' + icon}></i>
					</span>
				</div>
			</article>
		)
	}
)

export default GeneralInfo

import { component$ } from '@builder.io/qwik'
import type { Product } from '~/interfaces'

const ProductItem = component$((product: Product) => {
	return (
		<tr class='text-gray-300 bg-zinc-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
			<th
				scope='row'
				class='px-6 py-4 font-medium text-gray-300 whitespace-nowrap dark:text-white'
			>
				{product.name}
			</th>
			<td class='px-6 py-4'>Silver</td>
			<td class='px-6 py-4'>{product.tags && product.tags[0]}</td>
			<td class='px-6 py-4'>{product.price}</td>
			<td class='px-6 py-4'>
				<a
					href='#'
					class='font-medium text-blue-600 dark:text-blue-500 hover:underline'
				>
					Edit
				</a>
				<br />
				<a
					href='#'
					class='font-medium text-blue-600 dark:text-blue-500 hover:underline'
				>
					remove
				</a>
			</td>
		</tr>
	)
})

export default ProductItem

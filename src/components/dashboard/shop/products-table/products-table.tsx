import { component$ } from '@builder.io/qwik'
import ProductItem from './product-item'
import type { Product } from '~/interfaces'
import ProductTableDropdown from './dropdown'

export interface Props {
	products: Product[]
}

const ProductsTable = component$(({ products }: Props) => {
	return (
		<div class='relative overflow-x-auto shadow-md sm:rounded-lg rounded-xl'>
			<div class='flex items-center justify-between pb-4'>
				<ProductTableDropdown />
				<label for='table-search' class='sr-only'>
					Search
				</label>
				<div class='relative'>
					<div class='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
						<svg
							class='w-5 h-5 text-gray-500 dark:text-gray-400'
							aria-hidden='true'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fill-rule='evenodd'
								d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
								clip-rule='evenodd'
							></path>
						</svg>
					</div>
					<input
						type='text'
						id='table-search'
						class='block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						placeholder='Search for items'
					/>
				</div>
			</div>
			<table class='w-full text-sm text-left text-gray-300 dark:text-gray-400 rounded-xl'>
				<thead class='text-xs text-gray-300 uppercase bg-zinc-800 dark:bg-gray-700 dark:text-gray-400 rounded-xl border-b'>
					<tr>
						<th scope='col' class='px-6 py-3'>
							Product name
						</th>
						<th scope='col' class='px-6 py-3'>
							Color
						</th>
						<th scope='col' class='px-6 py-3'>
							Category
						</th>
						<th scope='col' class='px-6 py-3'>
							Price
						</th>
						<th scope='col' class='px-6 py-3'>
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					{products.map(product => (
						<ProductItem key={product.id} {...product} />
					))}
				</tbody>
			</table>
		</div>
	)
})

export default ProductsTable

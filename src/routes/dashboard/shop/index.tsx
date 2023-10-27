import { component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import { getProducts } from '~/api/get-products'
import ProductsTable from '~/components/dashboard/shop/products-table/products-table'
import type { Product } from '~/interfaces'

export const useProducts = routeLoader$<Product[]>(async () => {
	return getProducts()
})

export default component$(() => {
	const products = useProducts()

	return (
		<>
			<ProductsTable products={products.value} />
		</>
	)
})

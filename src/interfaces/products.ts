export interface Product {
	id: string
	tenant_id: string
	name: string
	description?: string
	image_url?: string
	images_product?: Record<string, any>[]
	price: number
	tags?: string[]
	stock: number
}

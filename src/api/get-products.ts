import type { Product } from '~/interfaces'

const products: Product[] = [
	{
		id: '1',
		tenant_id: 'T1',
		name: 'Blue T-Shirt',
		description: 'A comfortable blue t-shirt for everyday wear.',
		image_url: 'https://example.com/blue-shirt.jpg',
		images_product: [
			{ image_url: 'https://example.com/blue-shirt-1.jpg' },
			{ image_url: 'https://example.com/blue-shirt-2.jpg' },
		],
		price: 19.99,
		tags: ['casual', 'blue', 'clothing'],
		stock: 100,
	},
	{
		id: '2',
		tenant_id: 'T1',
		name: 'Black Jeans',
		description: 'Classic black jeans for a stylish look.',
		image_url: 'https://example.com/black-jeans.jpg',
		price: 29.99,
		stock: 75,
	},
	{
		id: '3',
		tenant_id: 'T1',
		name: 'Running Shoes',
		description: 'High-performance running shoes for athletes.',
		image_url: 'https://example.com/running-shoes.jpg',
		price: 59.99,
		tags: ['athletic', 'footwear'],
		stock: 50,
	},
	{
		id: '4',
		tenant_id: 'T2',
		name: 'Red Dress',
		description: 'Elegant red dress for special occasions.',
		image_url: 'https://example.com/red-dress.jpg',
		price: 49.99,
		tags: ['formal', 'red', 'clothing'],
		stock: 30,
	},
	{
		id: '5',
		tenant_id: 'T2',
		name: "Men's Leather Wallet",
		description: 'Genuine leather wallet for men.',
		image_url: 'https://example.com/mens-wallet.jpg',
		price: 39.99,
		tags: ['accessories'],
		stock: 40,
	},
	{
		id: '6',
		tenant_id: 'T3',
		name: 'Winter Jacket',
		description: 'Warm winter jacket to keep you cozy in the cold.',
		image_url: 'https://example.com/winter-jacket.jpg',
		price: 79.99,
		tags: ['outerwear', 'winter', 'clothing'],
		stock: 20,
	},
	{
		id: '7',
		tenant_id: 'T3',
		name: 'Sunglasses',
		description: 'Stylish sunglasses for UV protection and fashion.',
		image_url: 'https://example.com/sunglasses.jpg',
		price: 24.99,
		tags: ['accessories', 'eyewear'],
		stock: 60,
	},
	{
		id: '8',
		tenant_id: 'T4',
		name: 'Gaming Mouse',
		description: 'High-precision gaming mouse for gamers.',
		image_url: 'https://example.com/gaming-mouse.jpg',
		price: 39.99,
		tags: ['electronics', 'gaming'],
		stock: 45,
	},
	{
		id: '9',
		tenant_id: 'T4',
		name: 'Bluetooth Speaker',
		description: 'Portable Bluetooth speaker for music enthusiasts.',
		image_url: 'https://example.com/bluetooth-speaker.jpg',
		price: 49.99,
		tags: ['electronics', 'audio'],
		stock: 55,
	},
	{
		id: '10',
		tenant_id: 'T5',
		name: 'Travel Backpack',
		description: 'Versatile travel backpack for adventurers.',
		image_url: 'https://example.com/travel-backpack.jpg',
		price: 69.99,
		tags: ['travel', 'bags'],
		stock: 35,
	},
]

export const getProducts = async () => {
	try {
		// const resp = await fetch('/products.json')
		// const data = await resp.json()
		return products
	} catch (error) {
		console.log(error)
		return new Error('Something went wrong! :(')
	}
}

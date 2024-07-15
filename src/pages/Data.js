const fetch = require('node-fetch');

const apiKey = '929295486d704094906c71a55d4e44ee20240712132529573435';
const appId = 'MSXNR22706370IM'
const organizationId= '92d5bd3aec3f4257846b5d8fe0ba9b99'
// const endpoint = 'https://api.timbu.com/v1/products';
const endpoint = `https://api.timbu.cloud/products?organization_id=${organizationId}&reverse_sort=false&page=2&size=10&appId =${appId }&apiKey=${apiKey}`;

const productData = [
    {
        "name": "Brown Shoe",
        "description": "This is a brown and very nice shoe",
        "unique_id": "UN12345",
        "url_slug": "brown-shoe",
        "is_available": true,
        "is_service": false,
        "previous_url_slugs": null,
        "unavailable": false,
        "unavailable_start": null,
        "unavailable_end": null,
        "id": "90130b4c49d94261a8883e25ef7e02a0",
        "parent_product_id": null,
        "parent": null,
        "organization_id": "123",
        "stock_id": null,
        "product_image": [],
        "categories": [],
        "date_created": "2024-03-25T12:02:50",
        "last_updated": "2024-03-25T12:02:50",
        "user_id": "37",
        "photos": [],
        "prices": null,
        "stocks": null,
        "is_deleted": false,
        "available_quantity": null,
        "selling_price": null,
        "discounted_price": null,
        "buying_price": null,
        "extra_infos": null,
        "featured_reviews": null,
        "unavailability": []
    },
]

fetch(endpoint, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(productData)
})
  .then(response => response.json())
  .then(data => console.log('Product created:', data))
  .catch(error => console.error('Error:', error));

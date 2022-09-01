import React from 'react'
import { GrTools, GrTreeOption } from 'react-icons/gr'
import { TbHeartHandshake } from 'react-icons/tb'

// more pages? ...add them here but may need to edit the css
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GrTools />,
    title: 'hand crafted',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    icon: <GrTreeOption />,
    title: 'sustainable',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    icon: <TbHeartHandshake />,
    title: 'fair',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
]

// export const products_url = 'https://course-api.com/react-store-products'
export const products_url = 'src/utils/data/products.json'

// export const single_product_url = `https://course-api.com/react-store-single-product?id=`
export const single_product_url = 'src/utils/data/product.json'

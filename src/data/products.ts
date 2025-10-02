import normalChocolate from '@/assets/normal-chocolate.jpg';
import crackleChocolate from '@/assets/crackle-chocolate.jpg';
import datesChocolate from '@/assets/dates-chocolate.jpg';
import fruitNutChocolate from '@/assets/fruit-nut-chocolate.jpg';
import caramelChocolate from '@/assets/caramel-chocolate.jpg';
import butterscotchChocolate from '@/assets/butterscotch-chocolate.jpg';
import cookiesCreamChocolate from '@/assets/cookies-cream-chocolate.jpg';

import { Product } from '@/context/CartContext';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic Chocolate',
    description: 'Classic dark chocolate with rich, smooth flavor',
    price: 85,
    image: normalChocolate,
    size: '50gm',
    rating: 4.5,
  },
  {
    id: '2',
    name: 'Crackle Chocolate',
    description: 'Delightful chocolate with crispy rice crispies inside',
    price: 90,
    image: crackleChocolate,
    size: '50gm',
    rating: 4.7,
  },
  {
    id: '3',
    name: 'Hazelnut Dates Chocolate',
    description: 'Medjool premium dates filled with hazelnut covered in chocolate. The medjool is described as producing "large soft fruit, with orange-yellowish flesh, and a mildly rich and pleasing flavor". Being large, soft, and with a "caramel, honey" flavor, the variety has been called "the king of dates".',
    price: 120,
    image: datesChocolate,
    size: '50gm',
    rating: 4.9,
  },
  {
    id: '4',
    name: 'Fruit and Nut Chocolate',
    description: 'Premium chocolate infused with dried fruits and nuts',
    price: 95,
    image: fruitNutChocolate,
    size: '50gm',
    rating: 4.6,
  },
  {
    id: '5',
    name: 'Caramel Chocolate',
    description: 'Smooth chocolate infused with rich caramel',
    price: 90,
    image: caramelChocolate,
    size: '50gm',
    rating: 4.8,
  },
  {
    id: '6',
    name: 'Butterscotch Chocolate',
    description: 'Creamy chocolate infused with butterscotch flavors',
    price: 110,
    image: butterscotchChocolate,
    size: '50gm',
    rating: 4.5,
  },
  {
    id: '7',
    name: 'Cookie and Cream Chocolate',
    description: 'Chocolate with cookie pieces and cream flavoring',
    price: 100,
    image: cookiesCreamChocolate,
    size: '50gm',
    rating: 4.7,
  },
];

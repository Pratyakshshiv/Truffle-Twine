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
    name: 'Normal Chocolate',
    description: 'Classic dark chocolate with rich, smooth flavor',
    price: 50,
    image: normalChocolate,
  },
  {
    id: '2',
    name: 'Crackle Chocolate',
    description: 'Delightful chocolate with crispy rice crispies inside',
    price: 55,
    image: crackleChocolate,
  },
  {
    id: '3',
    name: 'Dates Chocolate',
    description: 'Medjool premium dates filled with hazelnut covered in chocolate. The medjool is described as producing "large soft fruit, with orange-yellowish flesh, and a mildly rich and pleasing flavor". Being large, soft, and with a "caramel, honey" flavor, the variety has been called "the king of dates".',
    price: 150,
    image: datesChocolate,
  },
  {
    id: '4',
    name: 'Fruit and Nut Chocolate',
    description: 'Premium chocolate infused with dried fruits and nuts',
    price: 85,
    image: fruitNutChocolate,
  },
  {
    id: '5',
    name: 'Caramel Chocolate',
    description: 'Smooth chocolate infused with rich caramel',
    price: 65,
    image: caramelChocolate,
  },
  {
    id: '6',
    name: 'Butterscotch Chocolate',
    description: 'Creamy chocolate infused with butterscotch flavors',
    price: 85,
    image: butterscotchChocolate,
  },
  {
    id: '7',
    name: 'Cookie and Cream Chocolate',
    description: 'Chocolate with cookie pieces and cream flavoring',
    price: 100,
    image: cookiesCreamChocolate,
  },
];
import { Product } from "./types";
import P1 from 'public/p1.png'
import P2 from 'public/p2.png'
import P3 from 'public/p3.png'

export const Products:Product[] = [
    {
        id: 'p00',
        title: 'Brushed Raglan Sweatshirt',
        price:199,
        category:'kids',
        image:P1,
    },
    {
        id: 'p01',
        title: 'Cameryn Sash Tie Dress',
        price:397,
        category:'male',
        image:P2,
    },
    {
        id: 'p02',
        title: 'Flex Sweatshirt',
        price:177,
        category:'female',
        image:P3,
    },
    {
        id: 'p03',
        title: 'Tie Dress',
        price:297,
        category:'male',
        image:P2,
    },
    {
        id: 'p04',
        title: 'Raglan Sweatshirt',
        price:179,
        category:'female',
        image:P1,
    },
    {
        id: 'p05',
        title: 'Cameryn Tie Dress',
        price:397,
        category:'kids',
        image:P2,
    },

]
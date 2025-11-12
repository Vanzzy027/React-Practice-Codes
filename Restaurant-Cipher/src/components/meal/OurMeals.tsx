import React from 'react'

interface Meals {
    menu_item_id: number;
    name: string;
    description: string;
    category_name?: string;
    price: number;
    menuitemimage_url: string;
    is_available: boolean;
}

const Meals: Meals[] = [
    {
        menu_item_id: 1,
        name: 'Grilled Chicken Salad',
        description: 'A healthy mix of grilled chicken, fresh greens, and a light vinaigrette.',
        price: 12.99,
        category_name: 'Salads',
        menuitemimage_url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        is_available: true,
    },
    {
        menu_item_id: 2,
        name: 'Spaghetti Carbonara',
        description: 'Classic Italian pasta with creamy sauce, pancetta, and Parmesan cheese.',
        price: 14.99,
        category_name: 'Pasta',
        menuitemimage_url: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        is_available: true,
    },
    {
        menu_item_id: 3,
        name: 'Vegan Buddha Bowl',
        description: 'A nourishing bowl of quinoa, roasted veggies, chickpeas, and tahini dressing.',
        price: 11.99,
        category_name: 'Vegan',
        menuitemimage_url: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        is_available: true,
    }
]

const OurMeals: React.FC = () => {
  return (
    <div>OurMeals</div>
  )
}

export default OurMeals
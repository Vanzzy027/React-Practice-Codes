// src/components/home/OurTopChoiceMeal.tsx

import React from 'react';
import './OurTopChoiceMeal.css';

interface OurTopChoiceMeal {
    menu_item_id: number;
    name: string;
    description: string;
    category_name?: string;
    price: number;
    menuitemimage_url: string;
    is_available: boolean;
}

const OurTopChoiceMeals: OurTopChoiceMeal[] = [
    {
        menu_item_id: 1,
        name: 'Smoked Bourbon Chicken',
        description: 'Slow-smoked chicken, rich bourbon glaze, served with a sweet potato mash.',
        price: 18.50,
        category_name: 'Signature Smoked',
        menuitemimage_url: 'https://images.unsplash.com/photo-1574343118944-1293c66289b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', // Darker, richer image
        is_available: true,
    },
    {
        menu_item_id: 2,
        name: 'Black Garlic Risotto',
        description: 'Arborio rice cooked in a creamy, earthy black garlic reduction with shaved truffle.',
        price: 21.99,
        category_name: 'Artisanal',
        menuitemimage_url: 'https://images.unsplash.com/photo-1623243020684-9f8bcefe6e94?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
        is_available: true,
    },
    {
        menu_item_id: 3,
        name: 'The Root Vegetable Cypher',
        description: 'A layered tower of roasted root vegetables, herbed feta, and balsamic reduction.',
        price: 15.99,
        category_name: 'Vegan',
        menuitemimage_url: 'https://images.unsplash.com/photo-1517436214515-680453303867?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', // More rustic image
        is_available: true,
    }
]

const OurTopChoiceMeal: React.FC = () => {
    return (
        <section className="top-meals">
            <div className="container">
                <h2 className="section-title">The Decoding Menu</h2>
                <p className="section-subtitle">
                    Discover our most lauded recipes—culinary secrets we're ready to share.
                </p>

                <div className="meals-grid">
                    {OurTopChoiceMeals.map((meal) => (
                        <div key={meal.menu_item_id} className="meal-card">
                            <div className="meal-image">
                                <img src={meal.menuitemimage_url} alt={meal.name} />
                                <div className="meal-category">{meal.category_name}</div>
                            </div>

                            <div className="meal-content">
                                <h3 className="meal-name">{meal.name}</h3>
                                <p className="meal-description">{meal.description}</p>

                                <div className="meal-footer">
                                    <div className="meal-price">${meal.price.toFixed(2)}</div>
                                    {/* Updated button text */}
                                    <button className="order-btn">Unlock Recipe</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OurTopChoiceMeal;
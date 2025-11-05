// 🍕 Pizza component with different prop types

interface PizzaProps {
    name: string;
    toppings: string[];
    price: number;
    isVegetarian: boolean;
    size: 'Small' | 'Medium' | 'Large'; // Union type
}

function PizzaCard({ name, toppings, price, isVegetarian, size }: PizzaProps) {
    return (
        <div style={{
            border: '2px solid #ff6b6b',
            padding: '15px',
            margin: '10px',
            borderRadius: '10px',
            backgroundColor: '#fff5f5',
            color: '#c53030'
        }}>
            <h3>🍕 {name} ({size})</h3>
            <p>🏷️ ${price}</p>
            <p>🥬 {isVegetarian ? 'Vegetarian' : 'Non-Vegetarian'}</p>
            <div>
                <strong>Toppings:</strong>
                <ul style={{ textAlign: 'left', margin: '5px 0' }}>
                    {toppings.map(topping => (
                        <li key={topping}>{topping}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PizzaCard
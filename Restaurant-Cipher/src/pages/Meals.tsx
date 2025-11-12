import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

interface MenuItem {
    menu_item_id: number;
    name: string;
    description: string;
    category_name?: string;
    price: number;
    menuitemimage_url: string;
    is_available: boolean;
    quantity?: number;
    rating?: number;
    prep_time?: string;
}

const MealsData: MenuItem[] = [
    {
        menu_item_id: 1,
        name: 'Grilled Chicken Salad',
        description: 'A healthy mix of grilled chicken, fresh greens, and a light vinaigrette.',
        price: 12.99,
        category_name: 'Salads',
        menuitemimage_url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        is_available: true,
        quantity: 15,
        rating: 4.8,
        prep_time: '15 mins'
    },
    {
        menu_item_id: 2,
        name: 'Spaghetti Carbonara',
        description: 'Classic Italian pasta with creamy sauce, pancetta, and Parmesan cheese.',
        price: 14.99,
        category_name: 'Pasta',
        menuitemimage_url: 'https://images.unsplash.com/photo-1623243020684-9f8bcefe6e94?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
        is_available: true,
        quantity: 8,
        rating: 4.9,
        prep_time: '20 mins'
    },
    {
        menu_item_id: 3,
        name: 'Vegan Buddha Bowl',
        description: 'A nourishing bowl of quinoa, roasted veggies, chickpeas, and tahini dressing.',
        price: 11.99,
        category_name: 'Vegan',
        menuitemimage_url: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        is_available: true,
        quantity: 22,
        rating: 4.6,
        prep_time: '12 mins'
    },
    {
        menu_item_id: 4,
        name: 'BBQ Beef Burger',
        description: 'Juicy beef patty with BBQ sauce, lettuce, tomato, and crispy onions.',
        price: 16.99,
        category_name: 'Burgers',
        menuitemimage_url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        is_available: true,
        quantity: 3,
        rating: 4.7,
        prep_time: '18 mins'
    },
    {
        menu_item_id: 5,
        name: 'Margherita Pizza',
        description: 'Traditional pizza with fresh mozzarella, tomato sauce, and basil.',
        price: 13.99,
        category_name: 'Pizza',
        menuitemimage_url: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        is_available: false,
        quantity: 0,
        rating: 4.5,
        prep_time: '25 mins'
    },
    {
        menu_item_id: 6,
        name: 'Fish Tacos',
        description: 'Fresh grilled fish with cabbage slaw, avocado, and lime crema.',
        price: 15.99,
        category_name: 'Mexican',
        menuitemimage_url: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        is_available: true,
        quantity: 12,
        rating: 4.4,
        prep_time: '16 mins'
    }
]

const Meals: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [sortBy, setSortBy] = useState('name')
    const [showAvailableOnly, setShowAvailableOnly] = useState(false)

    // Get unique categories
    const categories = ['All', ...new Set(MealsData.map(meal => meal.category_name).filter(Boolean))]

    // Filter and sort meals
    const filteredMeals = MealsData
        .filter(meal => {
            const matchesSearch = meal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                meal.description.toLowerCase().includes(searchTerm.toLowerCase())
            const matchesCategory = selectedCategory === 'All' || meal.category_name === selectedCategory
            const matchesAvailability = !showAvailableOnly || meal.is_available

            return matchesSearch && matchesCategory && matchesAvailability
        })
        .sort((a, b) => {
            switch (sortBy) {
                case 'price-low':
                    return a.price - b.price
                case 'price-high':
                    return b.price - a.price
                case 'rating':
                    return (b.rating || 0) - (a.rating || 0)
                default:
                    return a.name.localeCompare(b.name)
            }
        })

    const handleCreateOrder = (menu_item_id: number) => {        
        alert('Sign In to Checkout')       
    }

    return (
              <div className="page-container">
            <Navbar />

            {/* Hero Section */}
            <div style={{
                background: 'linear-gradient(135deg, #2d5a4a 0%, #1e3a32 100%)',
                color: 'white',
                padding: '4rem 2rem 2rem',
                textAlign: 'center'
            }}>
                <h1 style={{
                    fontSize: '3rem',
                    margin: '0 0 1rem 0',
                    fontWeight: 'bold'
                }}>
                    🍽️ Our Delicious Meals
                </h1>
                <p style={{
                    fontSize: '1.2rem',
                    maxWidth: '600px',
                    margin: '0 auto',
                    lineHeight: '1.6',
                    opacity: '0.9'
                }}>
                    Discover our carefully crafted menu featuring authentic flavors and fresh ingredients.
                </p>
            </div>

            {/* Search and Filters */}
            <div style={{
                backgroundColor: '#f8f9fa',
                padding: '2rem',
                borderBottom: '1px solid #e9ecef'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {/* Search Bar */}
                    <div style={{ flex: '1', minWidth: '250px', maxWidth: '400px' }}>
                        <input
                            type="text"
                            placeholder="🔍 Search meals..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '0.75rem 1rem',
                                border: '2px solid #dee2e6',
                                borderRadius: '25px',
                                fontSize: '1rem',
                                outline: 'none',
                                transition: 'border-color 0.3s ease',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>

                    {/* Category Filter */}
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        style={{
                            padding: '0.75rem 1rem',
                            border: '2px solid #dee2e6',
                            borderRadius: '8px',
                            fontSize: '1rem',
                            backgroundColor: 'white',
                            cursor: 'pointer',
                            outline: 'none'
                        }}
                    >
                        {categories.map(category => (
                            <option key={category} value={category}>
                                📂 {category}
                            </option>
                        ))}
                    </select>

                    {/* Sort By */}
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        style={{
                            padding: '0.75rem 1rem',
                            border: '2px solid #dee2e6',
                            borderRadius: '8px',
                            fontSize: '1rem',
                            backgroundColor: 'white',
                            cursor: 'pointer',
                            outline: 'none'
                        }}
                    >
                        <option value="name">📝 Sort by Name</option>
                        <option value="price-low">💰 Price: Low to High</option>
                        <option value="price-high">💎 Price: High to Low</option>
                        <option value="rating">⭐ Rating</option>
                    </select>

                    {/* Available Only Toggle */}
                    <label style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        cursor: 'pointer',
                        fontSize: '1rem'
                    }}>
                        <input
                            type="checkbox"
                            checked={showAvailableOnly}
                            onChange={(e) => setShowAvailableOnly(e.target.checked)}
                            style={{ transform: 'scale(1.2)' }}
                        />
                        ✅ Available Only
                    </label>
                </div>
            </div>

            {/* Results Count */}
            <div style={{
                padding: '1rem 2rem',
                backgroundColor: 'white',
                textAlign: 'center',
                borderBottom: '1px solid #e9ecef'
            }}>
                <p style={{
                    margin: 0,
                    fontSize: '1.1rem',
                    color: '#6c757d'
                }}>
                    Found {filteredMeals.length} delicious meal{filteredMeals.length !== 1 ? 's' : ''}
                    {searchTerm && ` matching "${searchTerm}"`}
                </p>
            </div>

            {/* Meals Grid */}
            <div style={{
                flex: 1,
                padding: '2rem',
                backgroundColor: '#fff'
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1400px',
                    margin: '0 auto'
                }}>
                    {filteredMeals.map(meal => (
                        <div key={meal.menu_item_id} style={{
                            backgroundColor: 'white',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            border: '1px solid #e9ecef',
                            cursor: 'pointer'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)'
                                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)'
                                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)'
                            }}>

                            {/* Image */}
                            <div style={{ position: 'relative' }}>
                                <img
                                    src={meal.menuitemimage_url}
                                    alt={meal.name}
                                    style={{
                                        width: '100%',
                                        height: '200px',
                                        objectFit: 'cover'
                                    }}
                                />

                                {/* Availability Badge */}
                                <div style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    backgroundColor: meal.is_available ? '#28a745' : '#dc3545',
                                    color: 'white',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '20px',
                                    fontSize: '0.8rem',
                                    fontWeight: 'bold'
                                }}>
                                    {meal.is_available ? '✅ Available' : '❌ Sold Out'}
                                </div>

                                {/* Quantity Badge */}
                                <div style={{
                                    position: 'absolute',
                                    top: '3.5rem',
                                    right: '1rem',
                                    backgroundColor: meal.quantity && meal.quantity <= 5 ? '#ff6b35' : '#17a2b8',
                                    color: 'white',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '20px',
                                    fontSize: '0.8rem',
                                    fontWeight: 'bold'
                                }}>
                                    📦 {meal.quantity || 0} left
                                </div>

                                {/* Category Badge */}
                                <div style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    left: '1rem',
                                    backgroundColor: '#2d5a4a',
                                    color: 'white',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '20px',
                                    fontSize: '0.8rem',
                                    fontWeight: 'bold'
                                }}>
                                    {meal.category_name}
                                </div>
                            </div>

                            {/* Content */}
                            <div style={{ padding: '1.5rem' }}>
                                <h3 style={{
                                    fontSize: '1.3rem',
                                    color: '#2d5a4a',
                                    margin: '0 0 0.5rem 0',
                                    fontWeight: 'bold'
                                }}>
                                    {meal.name}
                                </h3>

                                <p style={{
                                    color: '#6c757d',
                                    fontSize: '0.9rem',
                                    lineHeight: '1.5',
                                    margin: '0 0 1rem 0'
                                }}>
                                    {meal.description}
                                </p>

                                {/* Low Stock Warning */}
                                {meal.quantity && meal.quantity <= 5 && meal.quantity > 0 && (
                                    <div style={{
                                        backgroundColor: '#fff3cd',
                                        color: '#856404',
                                        padding: '0.5rem',
                                        borderRadius: '6px',
                                        fontSize: '0.8rem',
                                        marginBottom: '1rem',
                                        border: '1px solid #ffeaa7',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}>
                                        ⚠️ <strong>Hurry!</strong> Only {meal.quantity} left in stock!
                                    </div>
                                )}

                                {/* Rating and Prep Time */}
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '1rem'
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.25rem',
                                        fontSize: '0.9rem'
                                    }}>
                                        <span>⭐</span>
                                        <span style={{ fontWeight: 'bold' }}>{meal.rating}</span>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.25rem',
                                        fontSize: '0.9rem',
                                        color: '#6c757d'
                                    }}>
                                        <span>⏱️</span>
                                        <span>{meal.prep_time}</span>
                                    </div>
                                </div>

                                {/* Price and Add to Cart */}
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <div style={{
                                        fontSize: '1.5rem',
                                        fontWeight: 'bold',
                                        color: '#2d5a4a'
                                    }}>
                                        ${meal.price.toFixed(2)}
                                    </div>

                                    <button
                                        onClick={() => handleCreateOrder(meal.menu_item_id)}
                                        disabled={!meal.is_available}
                                        style={{
                                            backgroundColor: meal.is_available ? '#2d5a4a' : '#6c757d',
                                            color: 'white',
                                            border: 'none',
                                            padding: '0.75rem 1.5rem',
                                            borderRadius: '25px',
                                            fontSize: '0.9rem',
                                            fontWeight: 'bold',
                                            cursor: meal.is_available ? 'pointer' : 'not-allowed',
                                            transition: 'all 0.3s ease',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}
                                    >
                                        🛒 Order Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No Results */}
                {filteredMeals.length === 0 && (
                    <div style={{
                        textAlign: 'center',
                        padding: '4rem 2rem',
                        color: '#6c757d'
                    }}>
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                            No meals found
                        </h3>
                        <p style={{ fontSize: '1rem' }}>
                            Try adjusting your search or filters
                        </p>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    )
}

export default Meals
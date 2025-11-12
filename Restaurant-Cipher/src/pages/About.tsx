import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About: React.FC = () => {
    return (
             <div className="page-container">
            <Navbar />

            {/* Hero Section */}
            <div style={{
                background: 'linear-gradient(135deg, #2d5a4a 0%, #1e3a32 100%)',
                color: 'white',
                padding: '4rem 2rem',
                textAlign: 'center'
            }}>
                <h1 style={{
                    fontSize: '3.5rem',
                    margin: '0 0 1rem 0',
                    fontWeight: 'bold'
                }}>
                    🍽️ About Mathe's EATERY
                </h1>
                <p style={{
                    fontSize: '1.3rem',
                    maxWidth: '700px',
                    margin: '0 auto',
                    lineHeight: '1.6',
                    opacity: '0.9'
                }}>
                    A culinary journey that began with passion, tradition, and a dream to bring authentic flavors to your table.
                </p>
            </div>

            {/* Our Story Section */}
            <div style={{
                padding: '4rem 2rem',
                backgroundColor: '#fff'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
                    gap: '3rem',
                    alignItems: 'center'
                }}>
                    <div>
                        <h2 style={{
                            fontSize: '2.5rem',
                            color: '#2d5a4a',
                            marginBottom: '1.5rem',
                            fontWeight: 'bold'
                        }}>
                            📖 Our Story
                        </h2>
                        <p style={{
                            fontSize: '1.1rem',
                            color: '#555',
                            lineHeight: '1.8',
                            marginBottom: '1.5rem'
                        }}>
                            Founded in 2018, Mathe's EATERY started as a small family kitchen with big dreams.
                            What began as Grandmother Mathe's secret recipes shared among friends has blossomed
                            into a beloved restaurant that serves the community with heart and soul.
                        </p>
                        <p style={{
                            fontSize: '1.1rem',
                            color: '#555',
                            lineHeight: '1.8',
                            marginBottom: '1.5rem'
                        }}>
                            Every dish we serve tells a story - from our signature spice blends passed down through
                            generations to our innovative fusion creations that celebrate diverse culinary traditions.
                            We believe food is more than sustenance; it's a way to connect, celebrate, and create memories.
                        </p>
                    </div>
                    <div style={{
                        textAlign: 'center'
                    }}>
                        <img
                            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                            alt="Restaurant Interior"
                            style={{
                                width: '100%',
                                maxWidth: '450px',
                                borderRadius: '16px',
                                boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                                height: '300px',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div style={{
                padding: '4rem 2rem',
                backgroundColor: '#f8f9fa'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    textAlign: 'center'
                }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        color: '#2d5a4a',
                        marginBottom: '1rem',
                        fontWeight: 'bold'
                    }}>
                        ✨ Our Values
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: '#666',
                        maxWidth: '600px',
                        margin: '0 auto 3rem',
                        lineHeight: '1.6'
                    }}>
                        What drives us every day to create exceptional dining experiences
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem'
                    }}>
                        {[
                            {
                                icon: '🌱',
                                title: 'Fresh & Local',
                                description: 'We source our ingredients from local farmers and suppliers, ensuring freshness and supporting our community.'
                            },
                            {
                                icon: '❤️',
                                title: 'Made with Love',
                                description: 'Every dish is prepared with care, attention to detail, and a genuine passion for exceptional food.'
                            },
                            // {
                            //     icon: '🌍',
                            //     title: 'Sustainability',
                            //     description: 'We are committed to environmentally friendly practices and reducing our carbon footprint.'
                            // },
                            {
                                icon: '🤝',
                                title: 'Community',
                                description: 'We believe in giving back to our community and creating a welcoming space for everyone.'
                            }
                        ].map((value, index) => (
                            <div key={index} style={{
                                backgroundColor: 'white',
                                padding: '2rem',
                                borderRadius: '16px',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                                transition: 'transform 0.3s ease',
                                cursor: 'pointer'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)'
                                }}>
                                <div style={{
                                    fontSize: '3rem',
                                    marginBottom: '1rem'
                                }}>
                                    {value.icon}
                                </div>
                                <h3 style={{
                                    fontSize: '1.4rem',
                                    color: '#2d5a4a',
                                    marginBottom: '1rem',
                                    fontWeight: 'bold'
                                }}>
                                    {value.title}
                                </h3>
                                <p style={{
                                    fontSize: '1rem',
                                    color: '#666',
                                    lineHeight: '1.6'
                                }}>
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Meet the Team Section */}
            <div style={{
                padding: '4rem 2rem',
                backgroundColor: '#fff'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    textAlign: 'center'
                }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        color: '#2d5a4a',
                        marginBottom: '1rem',
                        fontWeight: 'bold'
                    }}>
                        👥 Meet Our Team
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: '#666',
                        maxWidth: '600px',
                        margin: '0 auto 3rem',
                        lineHeight: '1.6'
                    }}>
                        The passionate people behind your delicious meals
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem'
                    }}>
                        {[
                            {
                                name: 'Chef Mathe Lucy',
                                role: 'Head Chef & Founder',
                                image: 'https://images.unsplash.com/photo-1556911073-52527ac43761?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',

                                description: 'With 15 years of culinary expertise, Chef Mathe brings traditional recipes to life with modern techniques.'
                            },
                            {
                                name: 'Chef Mathe Jane',
                                role: 'Pastry Chef',
                                image: 'https://plus.unsplash.com/premium_photo-1661768360749-b60196445a6d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNvb2t8ZW58MHx8MHx8fDA%3D%3D&auto=format&fit=crop&q=80&w=1470',
                                description: 'Our talented pastry chef creates heavenly desserts that perfectly complement our savory offerings.'
                            },
                            {
                                name: 'Chef Mathe Nancy',
                                role: 'Restaurant Manager',
                                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                                description: 'Nancy ensures every guest feels welcome and enjoys an exceptional dining experience from start to finish.'
                            },
                            {
                                name: 'Chef Amara ',
                                role: 'Sous Chef',
                                image: 'https://images.unsplash.com/photo-1625631980683-825234bfb7d5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
                                description: 'Amara specializes in fusion cuisine and brings creative innovation to our traditional menu offerings.'
                            }
                        ].map((member, index) => (
                            <div key={index} style={{
                                backgroundColor: 'white',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                                transition: 'transform 0.3s ease',
                                cursor: 'pointer'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)'
                                }}>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    style={{
                                        width: '100%',
                                        height: '200px',
                                        objectFit: 'cover'
                                    }}
                                />
                                <div style={{
                                    padding: '1.5rem'
                                }}>
                                    <h3 style={{
                                        fontSize: '1.3rem',
                                        color: '#2d5a4a',
                                        marginBottom: '0.5rem',
                                        fontWeight: 'bold'
                                    }}>
                                        {member.name}
                                    </h3>
                                    <p style={{
                                        fontSize: '1rem',
                                        color: '#d97706',
                                        marginBottom: '1rem',
                                        fontWeight: '600'
                                    }}>
                                        {member.role}
                                    </p>
                                    <p style={{
                                        fontSize: '0.9rem',
                                        color: '#666',
                                        lineHeight: '1.5'
                                    }}>
                                        {member.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Fun Facts Section */}
            <div style={{
                padding: '4rem 2rem',
                backgroundColor: '#f8f9fa'
            }}>
                <div style={{
                    maxWidth: '1000px',
                    margin: '0 auto',
                    textAlign: 'center'
                }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        color: '#2d5a4a',
                        marginBottom: '1rem',
                        fontWeight: 'bold'
                    }}>
                        🎉 Fun Facts About Us
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '2rem',
                        marginTop: '2rem'
                    }}>
                        {[
                            { number: '50,000+', label: 'Happy Customers' },
                            { number: '150+', label: 'Delicious Recipes' },
                            { number: '5★', label: 'Average Rating' },
                            { number: '24/7', label: 'Food Passion' }
                        ].map((fact, index) => (
                            <div key={index} style={{
                                backgroundColor: 'white',
                                padding: '2rem',
                                borderRadius: '16px',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                            }}>
                                <div style={{
                                    fontSize: '2.5rem',
                                    fontWeight: 'bold',
                                    color: '#2d5a4a',
                                    marginBottom: '0.5rem'
                                }}>
                                    {fact.number}
                                </div>
                                <p style={{
                                    fontSize: '1.1rem',
                                    color: '#666',
                                    fontWeight: '500'
                                }}>
                                    {fact.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div style={{
                padding: '4rem 2rem',
                background: 'linear-gradient(135deg, #2d5a4a 0%, #1e3a32 100%)',
                color: 'white',
                textAlign: 'center'
            }}>
                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        marginBottom: '1rem',
                        fontWeight: 'bold'
                    }}>
                        🌟 Ready to Experience Mathe's Magic?
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        marginBottom: '2rem',
                        lineHeight: '1.6',
                        opacity: '0.9'
                    }}>
                        Join us for an unforgettable dining experience. Whether it's a casual lunch,
                        romantic dinner, or special celebration, we're here to make it memorable.
                    </p>

                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}>
                        <button style={{
                            backgroundColor: 'white',
                            color: '#2d5a4a',
                            padding: '1rem 2rem',
                            border: 'none',
                            borderRadius: '25px',
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)'
                                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)'
                                e.currentTarget.style.boxShadow = 'none'
                            }}>
                            🍽️ View Our Menu
                        </button>

                        <button style={{
                            backgroundColor: 'transparent',
                            color: 'white',
                            padding: '1rem 2rem',
                            border: '2px solid white',
                            borderRadius: '25px',
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'white'
                                e.currentTarget.style.color = '#2d5a4a'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent'
                                e.currentTarget.style.color = 'white'
                            }}>
                            📞 Contact Us
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default About
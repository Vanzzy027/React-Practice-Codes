import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// Assuming the global type definitions for 'react-router-dom' are installed now.
import { Link } from 'react-router-dom'; // Corrected import
import SignIn from '../assets/login.svg'; // Retaining the image import

// Import the CSS Module
import styles from './Login.module.css'; 

const Login: React.FC = () => {
    return (
        <div className={styles['page-wrapper']}> {/* Use a wrapper class */}
            <Navbar />
            <div className={styles['login-page']}>
                <div className={styles['login-card']}>
                    
                    {/* Image Section */}
                    <div className={styles['image-section']}>
                        <img
                            src={SignIn}
                            alt="Login illustration"
                            className={styles['login-image']}
                        />
                    </div>
                    
                    {/* Form Section */}
                    <div className={styles['form-section-wrapper']}>
                        <div className={styles['form-container']}>
                            <div className={styles['form-header']}>
                                <h2 className={styles['form-title']}>
                                    Welcome Back, Cypher
                                </h2>
                                <p className={styles['form-subtitle']}>
                                    Sign in to your Cypher Phoods account
                                </p>
                            </div>

                            <form className={styles['login-form']}>
                                {/* Email Field */}
                                <div>
                                    <label className={styles['form-label']} htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email address"
                                        className={styles['form-input']}
                                    />
                                </div>

                                {/* Password Field */}
                                <div>
                                    <label className={styles['form-label']} htmlFor="password">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        className={styles['form-input']}
                                    />
                                </div>

                                {/* Forgot Password Link */}
                                <div className={styles['forgot-password']}>
                                    <Link to="#" className={styles['forgot-link']}>
                                        Forgot your password?
                                    </Link>
                                </div>

                                <button
                                    type="submit"
                                    className={styles['submit-btn']}
                                >
                                    Sign In
                                </button>

                                <div className={styles['account-links']}>
                                    <Link to="/" className={styles['secondary-link']}>
                                        <span role="img" aria-label="home">🏡</span> Go to HomePage
                                    </Link>
                                    <Link to="/register" className={styles['register-link']}>
                                        Don't have an account? **Register**
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;


// import React from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import SignIn from '../assets/login.svg'
// import { Link } from 'react-router'

// const Login: React.FC = () => {
//     return (
//         <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
//             <Navbar />
//             <div style={{
//                 minHeight: '80vh',
//                 background: '#f8f9fa',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 padding: '2.5rem 1rem'
//             }}>
//                 <div style={{
//                     display: 'grid',
//                     gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
//                     gap: '2.5rem',
//                     backgroundColor: 'white',
//                     borderRadius: '24px',
//                     overflow: 'hidden',
//                     width: '100%',
//                     maxWidth: '1200px',
//                     boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
//                 }}>
//                     {/* Image Section */}
//                     <div style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         background: 'linear-gradient(135deg, #dbeafe 0%, #fce7f3 50%, #ffffff 100%)',
//                         padding: '1rem'
//                     }}>
//                         <img
//                             src={SignIn}
//                             alt="Login"
//                             style={{
//                                 width: '100%',
//                                 maxWidth: '400px',
//                                 borderRadius: '16px',
//                                 height: 'auto'
//                             }}
//                         />
//                     </div>
//                     {/* Form Section */}
//                     <div style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         padding: '2rem'
//                     }}>
//                         <div style={{
//                             width: '100%',
//                             maxWidth: '400px',
//                             backgroundColor: 'white',
//                             borderRadius: '16px',
//                             padding: '2rem'
//                         }}>
//                             <div style={{ textAlign: 'center', marginBottom: '1.0rem' }}>
//                                 <h2 style={{
//                                     fontSize: '2.0rem',
//                                     fontWeight: 'bold',
//                                     color: '#2d5a4a',
//                                     marginBottom: '0.5rem',
//                                     margin: 0
//                                 }}>
//                                     Welcome Back
//                                 </h2>
//                                 <p style={{
//                                     color: '#6b7280',
//                                     fontSize: '1rem',
//                                     margin: 0
//                                 }}>
//                                     Sign in to your Mathe's EATERY account
//                                 </p>
//                             </div>

//                             <form style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
//                                 {/* Email Field */}
//                                 <div>
//                                     <label style={{
//                                         display: 'block',
//                                         fontSize: '0.875rem',
//                                         fontWeight: '500',
//                                         color: '#374151',
//                                         marginBottom: '0.375rem'
//                                     }} htmlFor="email">
//                                         Email
//                                     </label>
//                                     <input
//                                         type="email"
//                                         id="email"
//                                         name="email"
//                                         placeholder="Enter your email address"
//                                         style={{
//                                             width: '100%',
//                                             padding: '0.75rem',
//                                             border: '1px solid #d1d5db',
//                                             borderRadius: '8px',
//                                             fontSize: '0.875rem',
//                                             backgroundColor: 'transparent',
//                                             transition: 'all 0.3s ease',
//                                             outline: 'none',
//                                             boxSizing: 'border-box'
//                                         }}
//                                     />
//                                 </div>

//                                 {/* Password Field */}
//                                 <div>
//                                     <label style={{
//                                         display: 'block',
//                                         fontSize: '0.875rem',
//                                         fontWeight: '500',
//                                         color: '#374151',
//                                         marginBottom: '0.375rem'
//                                     }} htmlFor="password">
//                                         Password
//                                     </label>
//                                     <input
//                                         type="password"
//                                         id="password"
//                                         name="password"
//                                         placeholder="Enter your password"
//                                         style={{
//                                             width: '100%',
//                                             padding: '0.75rem',
//                                             border: '1px solid #d1d5db',
//                                             borderRadius: '8px',
//                                             fontSize: '0.875rem',
//                                             backgroundColor: 'transparent',
//                                             transition: 'all 0.3s ease',
//                                             outline: 'none',
//                                             boxSizing: 'border-box'
//                                         }}
//                                     />
//                                 </div>

//                                 {/* Forgot Password Link */}
//                                 <div style={{ textAlign: 'right' }}>
//                                     <Link to="#" style={{
//                                         color: '#d97706',
//                                         textDecoration: 'none',
//                                         fontSize: '0.875rem'
//                                     }}>
//                                         Forgot your password?
//                                     </Link>
//                                 </div>

//                                 <button
//                                     type="submit"
//                                     style={{
//                                         backgroundColor: '#2d5a4a',
//                                         color: 'white',
//                                         padding: '1rem',
//                                         border: 'none',
//                                         borderRadius: '8px',
//                                         fontSize: '1rem',
//                                         fontWeight: '600',
//                                         cursor: 'pointer',
//                                         transition: 'all 0.3s ease',
//                                         marginTop: '0.5rem',
//                                         boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
//                                         width: '100%'
//                                     }}
//                                 >
//                                     Sign In
//                                 </button>

//                                 <div style={{
//                                     display: 'flex',
//                                     flexDirection: 'column',
//                                     gap: '0.5rem',
//                                     textAlign: 'center',
//                                     marginTop: '1rem'
//                                 }}>
//                                     <Link to="/" style={{
//                                         color: '#2d5a4a',
//                                         textDecoration: 'none',
//                                         display: 'flex',
//                                         alignItems: 'center',
//                                         justifyContent: 'center',
//                                         gap: '0.25rem',
//                                         fontSize: '0.875rem'
//                                     }}>
//                                         <span role="img" aria-label="home">🏡</span> Go to HomePage
//                                     </Link>
//                                     <Link to="/register" style={{
//                                         color: '#d97706',
//                                         textDecoration: 'none',
//                                         display: 'flex',
//                                         alignItems: 'center',
//                                         justifyContent: 'center',
//                                         gap: '0.25rem',
//                                         fontSize: '0.875rem'
//                                     }}>
//                                         Don't have an account? Register
//                                     </Link>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
                    
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     )
// }

// export default Login
import React from 'react';

interface StarRatingProps {
    rating: number; 
    max: number;    
}

const StarRating: React.FC<StarRatingProps> = ({ rating, max }) => {
    
    const normalizedRating = (rating / max) * 5; 
    const fullStars = Math.floor(normalizedRating);
    const emptyStars = 5 - fullStars;

    return (
        <div>
            {/* Full Stars */}
            {'⭐'.repeat(fullStars)}
            {/* Empty Stars */}
            {/*'☆'.repeat(emptyStars)*/} 
        </div>
    );
};

export default StarRating;



// interface RatingProps {
//     rating: number;
//     maxRating?: number;
//     onRatingClick: (rating: number) => void;
// }

// function StarRating({ rating, maxRating = 5, onRatingClick }: RatingProps) {
//     return (
//         <div style={{ margin: '10px 0' }}>
//             <p>Rating: {rating}/{maxRating}</p>
//             <div>
//                 {Array.from({ length: maxRating }, (_, index) => (
//                     <span
//                         key={index}
//                         onClick={() => onRatingClick(index + 1)}
//                         style={{
//                             fontSize: '24px',
//                             cursor: 'pointer',
//                             color: index < rating ? '#ffd700' : '#ccc'
//                         }}
//                     >
//                         ⭐
//                     </span>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default StarRating
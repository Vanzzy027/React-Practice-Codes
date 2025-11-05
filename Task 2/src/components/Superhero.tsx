// 🦸‍♂️ Superhero component with TypeScript interface

interface SuperheroProps {
    name: string;
    power: string;
    color: string;
    age?: number; // Optional prop
}

function Superhero({ name, power, color, age }: SuperheroProps) {
    return (
        <div style={{
            backgroundColor: color,
            padding: '15px',
            margin: '10px',
            borderRadius: '10px',
            color: 'white',
            textAlign: 'center'
        }}>
            <h3>🦸‍♂️ {name}</h3>
            <p>💪 Power: {power}</p>
            {age && <p>📅 Age: {age}</p>}
        </div>
    )
}

export default Superhero
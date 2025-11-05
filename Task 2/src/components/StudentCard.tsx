// 🎓 Student component with default props

interface StudentProps {
    name: string;
    grade: string;
    favoriteSubject: string;
    hobbies?: string[];
    emoji?: string;
}

function StudentCard({
    name,
    grade,
    favoriteSubject,
    hobbies = ['Reading'],
    emoji = '🎓'
}: StudentProps) {
    return (
        <div style={{
            border: '2px solid #845ec2',
            padding: '15px',
            margin: '10px',
            borderRadius: '10px',
            backgroundColor: '#f8f6ff',
            color: '#351c91'
        }}>
            <h3>{emoji} {name}</h3>
            <p>📚 Grade: {grade}</p>
            <p>❤️ Favorite Subject: {favoriteSubject}</p>
            <div>
                <strong>Hobbies:</strong>
                <ul style={{ textAlign: 'left', margin: '5px 0' }}>
                    {hobbies.map(hobby => (
                        <li key={hobby}>{hobby}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default StudentCard
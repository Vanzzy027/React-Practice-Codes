
interface CardProps {
    children: React.ReactNode;
    title: string;
    backgroundColor?: string;
}

function Card({ children, title, backgroundColor = '#f8f9fa' }: CardProps) {
    return (
        <div style={{
            backgroundColor,
            border: '2px solid #dee2e6',
            borderRadius: '10px',
            padding: '20px',
            margin: '15px 0',
            alignContent: 'center',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
            <h2 style={{ marginTop: 0, color: '#495057' }}>{title}</h2>
            {children}
        </div>
    )
}

export default Card
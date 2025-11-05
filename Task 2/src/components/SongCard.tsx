// 🎵 Song component with object props

interface Artist {
    name: string;
    country: string;
}

interface SongProps {
    title: string;
    artist: Artist;
    duration: string;
    genre: string;
    releaseYear: number;
}

function SongCard({ title, artist, duration, genre, releaseYear }: SongProps) {
    return (
        <div style={{
            border: '2px solid #4ecdc4',
            padding: '15px',
            margin: '10px',
            borderRadius: '10px',
            backgroundColor: '#f0fffe',
            color: '#05696b'
        }}>
            <h3>🎵 {title}</h3>
            <p>🎤 {artist.name} ({artist.country})</p>
            <p>⏱️ {duration} | 🎭 {genre}</p>
            <p>📅 Released: {releaseYear}</p>
        </div>
    )
}

export default SongCard
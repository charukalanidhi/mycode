 // pages/index.js
import { gql, useQuery } from '@apollo/client';

// Define the GraphQL query
const GET_COUNTRIES = gql`
    query GetCountries {
        countries {
            name
            code
            emoji
        }
    }
`;

export default function Home() {
    // Use the useQuery hook to fetch data
    const { loading, error, data } = useQuery(GET_COUNTRIES);

    // Handle loading state
    if (loading) return <p style={styles.loading}>Loading...</p>;
    // Handle error state
    if (error) return <p style={styles.error}>Error: {error.message}</p>;

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Countries of the World</h1>
            <div style={styles.grid}>
                {data.countries.map((country) => (
                    <div key={country.code} style={styles.gridItem}>
                        <span style={styles.emoji}>{country.emoji}</span>
                        <span style={styles.countryName}>{country.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Styles for the page components
const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    title: {
        fontSize: '2.5rem',
        color: '#333',
        textAlign: 'center',
        marginBottom: '20px',
    },
    loading: {
        fontSize: '1.5rem',
        color: '#0070f3',
        textAlign: 'center',
        marginTop: '20px',
    },
    error: {
        fontSize: '1.5rem',
        color: '#d9534f',
        textAlign: 'center',
        marginTop: '20px',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
    },
    gridItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    },
    emoji: {
        fontSize: '3rem',
        marginBottom: '10px',
    },
    countryName: {
        fontSize: '1.25rem',
        color: '#555',
    },
};


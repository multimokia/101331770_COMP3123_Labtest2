import './App.css'
import { WeatherEmbed } from './components/WeatherEmbed';
import { Container } from '@mui/material';
import SearchBar from '@mkyy/mui-search-bar';

function App() {
    // @ts-expect-error Yes, I know this is possibly null, it's handled below.
    const city = window.location.search.match(/(?<=city=)\w+/)[0];

    let tempcity = "";
    return (
        <Container maxWidth={false}>
            <SearchBar
                onSearch={() => {
                    window.location.href = `/?city=${tempcity}`;
                }}
                onChange={(pain) => {
                    tempcity = pain;
                    console.log(`pain: ${pain}`);
                }}
                style={{
                    color: "black"
                }}
            />
            <WeatherEmbed city={city || "Toronto"}/>
        </Container>
    );
}

export default App

import './App.css'
import { WeatherEmbed } from './components/WeatherEmbed';
import { Container } from '@mui/material';
import SearchBar from '@mkyy/mui-search-bar';

function getParameterByName(name: string) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

function App() {
    const city = getParameterByName("city") || "Toronto";

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

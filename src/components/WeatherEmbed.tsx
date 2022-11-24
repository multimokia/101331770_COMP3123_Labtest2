import { Box, Card, CardContent, Container, Divider, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material'
import IconBlur from "react-icon-blur";
import { useFetch } from '../hooks/useFetch';
import { IWeatherData } from '../types/WeatherData';

export const WeatherEmbed: React.FC<{city: string}> = ({city}) => {
    const { data, loading, error } = useFetch<IWeatherData>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6e09a37e2e5324339bcb106474b54539`
    );

    return (
        !loading ? ( !error ? (
            <Card
                sx={{ p: 4, width: "80vw", height: "45vh" }}
                className="frosted-glass-container"
                style={{
                    backgroundColor: "rgba(0,0,0,0.3)"
                }}
            >
                <CardContent>
                    <Box sx={{display: "flex"}}>
                        <Box sx={{flexGrow: 1, m: 2}} className="frosted-glass-container">
                            <Typography variant="h1" color="#e4cf66">{data.name}</Typography>
                            <Divider/>
                            <Box sx={{display: "flex"}}>
                                <Box>
                                    <IconBlur
                                        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                                        type="ROUNDED"
                                        padding={25}
                                        size={200}
                                    />
                                </Box>
                                <Box textAlign={"left"}>
                                    <br/><br/><br/>
                                    <Typography
                                        variant="h3"
                                        color="#f1bc76"
                                        sx={{flexShrink: 1}}
                                    >
                                        {data.weather[0].main}
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        color="#f1bc76"
                                        sx={{flexShrink: 1}}
                                        fontStyle="italic"
                                    >
                                        {data.weather[0].description}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{flexGrow: 2, m: 2, overflow: "hidden"}} className="frosted-glass-container">
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell><Typography color={"white"} variant="h5">Feels like</Typography></TableCell>
                                        <TableCell><Typography color={"white"} variant="h5">{(data.main.feels_like - 273.15).toFixed(2)}°C</Typography></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><Typography color={"white"} variant="h5">Wind</Typography></TableCell>
                                        <TableCell><Typography color={"white"} variant="h5">{`${(data.wind.speed * 3.6).toFixed(2)} km/h`}</Typography></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><Typography color={"white"} variant="h5">Humidity</Typography></TableCell>
                                        <TableCell><Typography color={"white"} variant="h5">{data.main.humidity}%</Typography></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><Typography color={"white"} variant="h5">Cloud coverage</Typography></TableCell>
                                        <TableCell><Typography color={"white"} variant="h5">{data.clouds.all}%</Typography></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><Typography color={"white"} variant="h5">Sunrise time</Typography></TableCell>
                                        <TableCell><Typography color={"white"} variant="h5">{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</Typography></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><Typography color={"white"} variant="h5">Sunset time</Typography></TableCell>
                                        <TableCell><Typography color={"white"} variant="h5">{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</Typography></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        ) : <Typography>{error.message}</Typography>) : <Typography>Loading...</Typography>
    );
}

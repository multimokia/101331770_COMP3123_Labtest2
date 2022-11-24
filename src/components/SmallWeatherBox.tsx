import { Box, Typography } from "@mui/material"

export const SmallWeatherBox: React.FC<{iconCode: string, temperature: number}> = ({iconCode, temperature}) => {
    return (
        <Box sx={{flexGrow: 1, m: 2}} className="frosted-glass-container">
            <img src={`http://openweathermap.org/img/wn/${iconCode}@4x.png`}/>
            <Typography variant="h3" color={"white"}>
                {temperature}
            </Typography>
        </Box>
    )
}

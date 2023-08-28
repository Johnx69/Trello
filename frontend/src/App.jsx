import { useColorScheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import { Container, Box } from "@mui/material";

function ModeSelect() {
    const { mode, setMode } = useColorScheme();
    const handleChange = (event) => {
        const selectedMode = event.target.value;
        console.log(selectedMode);
        setMode(selectedMode);
        // setAge(event.target.value);
    };
    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
                <Select
                    labelId="label-select-dark-light-mode"
                    id="select-dark-light-mode"
                    value={mode}
                    label="Mode"
                    onChange={handleChange}
                >
                    <MenuItem value="light">
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                            }}
                        >
                            <LightModeIcon fontSize="small" />
                            Light
                        </div>
                    </MenuItem>
                    <MenuItem value="dark">
                        <DarkModeOutlinedIcon />
                        Dark
                    </MenuItem>
                    <MenuItem value="system">
                        <SettingsBrightnessIcon />
                        System
                    </MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

function App() {
    return (
        <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
            <Box
                sx={{
                    backgroundColor: "primary.light",
                    width: "100%",
                    height: (theme) => theme.trelloCustom.appBarHeight,
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <ModeSelect />
            </Box>
            <Box
                sx={{
                    backgroundColor: "primary.dark",
                    width: "100%",
                    height: (theme) => theme.trelloCustom.boardBarHeight,
                    display: "flex",
                    alignItems: "center",
                }}
            >
                Board Bar
            </Box>
            <Box
                sx={{
                    backgroundColor: "primary.light",
                    width: "100%",
                    height: (theme) =>
                        `calc(100vh - ${theme.trelloCustom.appBarHeight} - ${theme.trelloCustom.boardBarHeight})`,
                    display: "flex",
                    alignItems: "center",
                }}
            >
                Board content
            </Box>
        </Container>
    );
}

export default App;

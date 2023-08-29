import { useColorScheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import { Box } from "@mui/material";

function ModeSelect() {
    const { mode, setMode } = useColorScheme();
    const handleChange = (event) => {
        const selectedMode = event.target.value;
        setMode(selectedMode);
        // setAge(event.target.value);
    };
    return (
        <div>
            <FormControl size="small" sx={{ minWidth: "120px" }}>
                <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
                <Select
                    labelId="label-select-dark-light-mode"
                    id="select-dark-light-mode"
                    value={mode}
                    label="Mode"
                    onChange={handleChange}
                >
                    <MenuItem value="light">
                        <Box
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                            }}
                        >
                            <LightModeIcon fontSize="small" />
                            Light
                        </Box>
                    </MenuItem>
                    <MenuItem value="dark">
                        <Box
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                            }}
                        >
                            <DarkModeOutlinedIcon /> Dark
                        </Box>
                    </MenuItem>
                    <MenuItem value="system">
                        <Box
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                            }}
                        >
                            <SettingsBrightnessIcon />
                            System
                        </Box>
                    </MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

export default ModeSelect;

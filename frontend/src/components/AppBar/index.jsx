import {
    Box,
    Typography,
    Button,
    TextField,
    Badge,
    Tooltip,
} from "@mui/material";
import ModeSelect from "../ModeSelect";
import AppsIcon from "@mui/icons-material/Apps";
import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as trelloIcon } from "~/assets/trello.svg";
import Workspaces from "./Menus/Workspaces";
import Recent from "./Menus/Recent";
import Starred from "./Menus/Starred";
import Templates from "./Menus/Templates";
import NotificationNoneIcon from "@mui/icons-material/NotificationsNone";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Profiles from "./Menus/Profiles";
function AppBar() {
    return (
        <Box
            px={2}
            sx={{
                width: "100%",
                height: (theme) => theme.trelloCustom.appBarHeight,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
                overflow: "auto",
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <AppsIcon sx={{ color: "primary.main" }} />
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.2 }}>
                    <SvgIcon
                        component={trelloIcon}
                        inheritViewBox
                        sx={{ color: "primary.main" }}
                    />
                    <Typography
                        variant="span"
                        sx={{
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                            color: "primary.main",
                        }}
                    >
                        Trello
                    </Typography>
                </Box>
                <Box sx={{ display: { sx: "none", md: "flex" }, gap: 1 }}>
                    <Workspaces />
                    <Recent />
                    <Starred />
                    <Templates />
                    <Button variant="outlined">Create</Button>
                </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <TextField
                    id="outlined-search"
                    label="Search..."
                    type="search"
                    size="small"
                    sx={{ minWidth: "120px" }}
                />
                <ModeSelect />
                <Tooltip title="Notification">
                    <Badge
                        color="secondary"
                        variant="dot"
                        sx={{ cursor: "pointer" }}
                    >
                        <NotificationNoneIcon sx={{ color: "primary.main" }} />
                    </Badge>
                </Tooltip>
                <Tooltip title="Help">
                    <HelpOutlineIcon
                        sx={{ cursor: "pointer", color: "primary.main" }}
                    />
                </Tooltip>
                <Profiles />
            </Box>
        </Box>
    );
}

export default AppBar;

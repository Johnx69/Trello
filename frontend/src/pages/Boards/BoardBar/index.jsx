import { Dashboard } from "@mui/icons-material";
import { Box, Chip, Tooltip, Button } from "@mui/material";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import { AddToDrive } from "@mui/icons-material";
import BoltIcon from "@mui/icons-material/Bolt";
import FilterListIcon from "@mui/icons-material/FilterList";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { capitalizeFirstLetter } from "~/utils/formatters";

const MENU_STYLES = {
    color: "white",
    bgcolor: "transparent",
    border: "none",
    paddingX: "5px",
    borderRadius: "4px",
    ".MuiSvgIcon-root": {
        color: "white",
    },
    "&:hover": {
        bgcolor: "primary.50",
    },
};

function BoardBar({ board }) {
    return (
        <Box
            sx={{
                width: "100%",
                height: (theme) => theme.trello.boardBarHeight,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
                paddingX: 2,
                overflow: "auto",
                bgcolor: (theme) =>
                    theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
                borderBottom: "1px solid white",
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Chip
                    icon={<Dashboard />}
                    label={board?.title}
                    clickable
                    sx={MENU_STYLES}
                />
                <Chip
                    icon={<VpnLockIcon />}
                    label={capitalizeFirstLetter(board?.type)}
                    clickable
                    sx={MENU_STYLES}
                />
                <Chip
                    icon={<AddToDrive />}
                    label="Add to Google Drive"
                    clickable
                    sx={MENU_STYLES}
                />
                <Chip
                    icon={<BoltIcon />}
                    label="Automation"
                    clickable
                    sx={MENU_STYLES}
                />

                <Chip
                    icon={<FilterListIcon />}
                    label="Filter"
                    clickable
                    sx={MENU_STYLES}
                />
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Button
                    variant="outlined"
                    startIcon={<PersonAddIcon />}
                    sx={{
                        color: "white",
                        borderColor: "white",
                        "&:hover": { borderColor: "white" },
                    }}
                >
                    Invite
                </Button>

                <AvatarGroup
                    max={7}
                    sx={{
                        gap: "10px",
                        "& .MuiAvatar-root": {
                            width: 34,
                            height: 34,
                            fontSize: 16,
                            border: "none",
                            color: "white",
                            cursor: "pointer",
                            "&:first-of-style": {
                                bgcolor: "#a4b0be",
                            },
                        },
                    }}
                >
                    <Tooltip title="anhdao">
                        <Avatar
                            alt="anhdao"
                            src="https://asset.cloudinary.com/dtlqt9ufv/ba6827da648b1a6ae6dafe271a097f40"
                        />
                    </Tooltip>
                    <Tooltip title="anhdao">
                        <Avatar
                            alt="anhdao"
                            src="https://asset.cloudinary.com/dtlqt9ufv/ba6827da648b1a6ae6dafe271a097f40"
                        />
                    </Tooltip>
                    <Tooltip title="anhdao">
                        <Avatar
                            alt="anhdao"
                            src="https://asset.cloudinary.com/dtlqt9ufv/ba6827da648b1a6ae6dafe271a097f40"
                        />
                    </Tooltip>
                    <Tooltip title="anhdao">
                        <Avatar
                            alt="anhdao"
                            src="https://asset.cloudinary.com/dtlqt9ufv/ba6827da648b1a6ae6dafe271a097f40"
                        />
                    </Tooltip>
                    <Tooltip title="anhdao">
                        <Avatar
                            alt="anhdao"
                            src="https://asset.cloudinary.com/dtlqt9ufv/ba6827da648b1a6ae6dafe271a097f40"
                        />
                    </Tooltip>
                    <Tooltip title="anhdao">
                        <Avatar
                            alt="anhdao"
                            src="https://asset.cloudinary.com/dtlqt9ufv/ba6827da648b1a6ae6dafe271a097f40"
                        />
                    </Tooltip>
                </AvatarGroup>
            </Box>
        </Box>
    );
}

export default BoardBar;

import { Box } from "@mui/material";

function BoardContent() {
    return (
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
    );
}

export default BoardContent;
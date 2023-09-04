import { Box } from "@mui/material";
import Card from "./Card/Card";
import {
    SortableContext,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
function ListCards({ cards }) {
    return (
        <SortableContext
            items={cards?.map((c) => c._id)}
            strategy={verticalListSortingStrategy}
        >
            <Box
                sx={{
                    p: "0 5px",
                    m: "0 5px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    overflowX: "hidden",
                    overflowY: "auto",
                    maxHeight: (theme) =>
                        `calc(${
                            theme.trello.boardContentHeight
                        } - ${theme.spacing(5)} - ${(theme) =>
                            theme.trello.columnFooterHeight} - ${(theme) =>
                            theme.trello.columnHeaderHeight})`,
                }}
            >
                {cards?.map((card) => (
                    <Card key={card._id} card={card} />
                ))}
                <Card />
            </Box>
        </SortableContext>
    );
}

export default ListCards;

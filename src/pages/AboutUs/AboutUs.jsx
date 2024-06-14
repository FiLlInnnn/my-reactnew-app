import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AboutUs() {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stack
          direction="column-reverse"
          justifyContent="flex-end"
          alignItems="stretch"
          spacing={1}
        >
          <Item>
            <Link to={"/"}>
              <button>back to home</button>
            </Link>
          </Item>
        </Stack>
      </Box>
    </>
  );
}

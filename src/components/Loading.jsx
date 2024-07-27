import * as React from "react";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

export default function Loading() {
  return (
    <Stack
      sx={{
        marginTop: "15px",
        width: "100%",
        maxHeight: "50px",
        color: "grey.500",
      }}
      spacing={2}>
      <LinearProgress sx={{ height: "10px" }} color="secondary" />
    </Stack>
  );
}

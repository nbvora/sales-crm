import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface Paginationprops {
  primary?: boolean;
  backgroundColor?: any;
  size?: "medium";
  label?: string;
  onClick?: () => void;
}

export const PaginationButton: any = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: Paginationprops) => {
  return (
    <>
      <Stack spacing={2}>
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Stack>
    </>
  );
};

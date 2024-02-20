"use client";
import { Avatar, Sheet, Typography } from "@mui/joy";
import { useSession } from "next-auth/react";
import React from "react";
import { FaLock } from "react-icons/fa";
import Github from "../signIn/Github";

function RequireAuth() {
  return (
    <Sheet
      variant="plain"
      sx={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar
        sx={{ width: "100px", height: "100px", fontSize: "3rem" }}
        color="primary"
        variant="outlined"
      >
        <FaLock />
      </Avatar>
      <Typography level="h2" variant="soft" color="danger" sx={{ my: 3 }}>
        Access forbidden please Login first
      </Typography>
      <Github />
    </Sheet>
  );
}

export default RequireAuth;

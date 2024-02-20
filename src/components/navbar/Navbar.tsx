"use client";
import Box from "@mui/joy/Box";
import React from "react";

import {
  Button,
  Dropdown,
  Menu,
  MenuButton,
  MenuItem,
  Sheet,
  Typography,
  styled,
  Skeleton,
  Avatar,
} from "@mui/joy";
import { MdMenu } from "react-icons/md";

import ColorToggle from "@/src/components/color-toggle/ColorToggle";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import ActiveLink from "../active-link/ActiveLink";

import GithubSign from "../signIn/Github";

const Header = styled(Sheet)(({ theme }) => ({
  gap: 1,
  border: "none",
  display: "flex",
  flexDirection: "row",
  backdropFilter: "blur(8px)",
  borderColor: theme.palette.divider,
  borderWidth: "0px 0px thin",
  borderStyle: "solid",
  padding: 10,
  justifyContent: "space-between",
  alignItems: "center",
  gridColumn: "1 / -1",
  position: "fixed",
  top: 0,
  left: 0,
  overflow: "hidden",
  zIndex: 1100,
  width: "100%",
}));

function Navbar() {
  const { data, status } = useSession();

  return (
    <>
      <Header as="header" className="Header" sx={{ px: { xs: 2, md: 4 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexGrow: { md: 0, xs: 1 },
          }}
          component={Link}
          href="/"
        >
          <Image src="/Logo.svg" width="40" height={40} alt="BOT Logo" />{" "}
          <Typography
            level="title-lg"
            sx={{
              fontWeight: "bold",
              marginLeft: 1,
              // background:
              //   "linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)",
              // backgroundClip: "text",
              // WebkitTextFillColor: "transparent",
            }}
          >
            Flash Card
          </Typography>
        </Box>
        <Box
          sx={{
            display: { md: "flex", xs: "none" },
            flexDirection: "row",
            gap: 3,
            alignItems: "center",
            justifyContent: "center",
            // flexGrow: 1,
          }}
        >
          <ActiveLink href="/" name="Home" />
          <ActiveLink href="/create" name="Create" />

          <ActiveLink href="/public" name="Public Cards" />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {status === "loading" ? (
            <Skeleton
              animation="wave"
              variant="circular"
              width={48}
              height={48}
            />
          ) : status === "unauthenticated" ? (
            <GithubSign />
          ) : (
            <Dropdown>
              <MenuButton sx={{ padding: 0 }} variant="plain">
                <Avatar src={data?.user?.image}></Avatar>
              </MenuButton>
              <Menu sx={{ zIndex: "200000" }}>
                <MenuItem component={Link} href="/own-cards">
                  Cards
                </MenuItem>
                <MenuItem onClick={() => signOut()}>Logout</MenuItem>
              </Menu>
            </Dropdown>
          )}

          <Box
            sx={{
              display: { md: "none", xs: "flex" },
              flexDirection: "row",
              gap: 3,
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <Dropdown>
              <MenuButton
                size="sm"
                component={Button}
                color="primary"
                variant="solid"
              >
                <MdMenu />
              </MenuButton>
              <Menu sx={{ zIndex: "200000" }} color="neutral" variant="soft">
                <MenuItem color="neutral" component={Link} href="/">
                  Home
                </MenuItem>
                <MenuItem component={Link} href="/public">
                  Public Cards
                </MenuItem>
              </Menu>
            </Dropdown>
          </Box>
          <ColorToggle />
        </Box>
      </Header>
    </>
  );
}

export default Navbar;

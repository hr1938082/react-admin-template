import React, { memo, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import Tooltip from '@mui/material/Tooltip';
import HomeIcon from '@mui/icons-material/Home';
import Settings from "./Settings";

const AppBar = ({ open, setOpen }) => {

    const [Hours, setHours] = useState(new Date().getHours());
    useEffect(() => {
        const dateInterVal = setInterval(() => {
            setHours(new Date().getHours());
        }, 60000);

        return () => {
            clearInterval(dateInterVal);
        };
    }, [])
    return (
        <Box sx={{ backgroundColor: "primary.main", color: "common.white", display: 'flex', position: 'fixed', top: 0, left: 0, right: 0, zIndex: theme => theme.zIndex.appBar }}>
            <Box
                sx={{
                    width: import.meta.env.VITE_DRAWER_WIDTH,
                    borderRight: "1px solid",
                    borderColor: "background.default",
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <IconButton onClick={() => setOpen(!open)} size="large" edge="start" color="inherit" aria-label="menu" sx={{ ml: 1 }}>
                    <MenuRoundedIcon fontSize="inherit" />
                </IconButton>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mr: 3 }}>
                    <img src={`${location.origin}/images/logo.png`} alt="Logo" height={60} />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: { xs: 'flex-end', lg: 'space-between' }, alignItems: 'center' }}>
                <Box
                    sx={{
                        display: { xs: 'none', lg: "flex" },
                        pl: 3,
                        height: "80px",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        pb: 1,
                    }}
                >
                    <Typography
                        component="h1"
                        variant="h5"
                        sx={{
                            fontSize: "1.75rem",
                            fontWeight: 600,
                        }}
                    >
                        {
                            (
                                Hours >= 3 && Hours < 12
                                    ? "Good Morning"
                                    : Hours >= 12 && Hours < 17
                                        ? "Good Afternoon"
                                        : Hours >= 17 && Hours < 21
                                            ? "Good Evening"
                                            : "Good Night"
                            ) + " Hassan Raza"
                        }
                    </Typography>
                    <Typography sx={{ fontSize: ".9rem" }}>
                        What we do today is what matters most
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', pr: 3 }}>
                    <Box
                        sx={{
                            border: "1px solid white",
                            py: "3px",
                            width: "350px",
                            backgroundColor: "background.default",
                            borderRadius: "10px",
                            pl: "10px",
                            pr: "20px",
                            display: { xs: 'none', lg: 'flex' },
                            alignItems: "center",
                            mr: 2
                        }}
                    >
                        <SearchRoundedIcon />
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search"
                            inputProps={{ "aria-label": "search" }}
                        />
                    </Box>
                    <Tooltip title="Home">
                        <Box
                            sx={{
                                backgroundColor: "background.paper",
                                borderRadius: "50%",
                                mr: 2
                            }}
                        >
                            <IconButton color="primary" onClick={() => navigate('/')}>
                                <HomeIcon />
                            </IconButton>
                        </Box>
                    </Tooltip>
                    <Tooltip title="Notification">
                        <Box
                            sx={{
                                backgroundColor: "background.paper",
                                borderRadius: "50%",
                                mr: 2
                            }}
                        >
                            <IconButton color="primary">
                                <NotificationsRoundedIcon />
                            </IconButton>
                        </Box>
                    </Tooltip>
                    <Settings />
                </Box>
            </Box>
        </Box>
    );
};

export default memo(AppBar);

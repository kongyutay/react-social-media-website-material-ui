import { Avatar, AvatarGroup, Box, ImageList, Typography } from "@mui/material";
import React from "react";

const Rightbar = () => {
    return (
        <Box flex={2} p={2} sx={{display: {xs: "none", sm: "block"}}}>
            <Box position="fixed">
                <Typography variant="h6" fontWeight={100}>OnlineFriends</Typography>
                <AvatarGroup max={6}>
                    <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/8993561/pexels-photo-8993561.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/5682847/pexels-photo-5682847.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/6274712/pexels-photo-6274712.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/1772475/pexels-photo-1772475.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/4946515/pexels-photo-4946515.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/4420634/pexels-photo-4420634.jpeg?auto=compress&cs=tinysrgb&w=600" />
                </AvatarGroup>
                <Typography variant="h6" fontWeight={100}>Latest Photos Until 54:16</Typography>
                <ImageList>

                </ImageList>

            </Box>
        </Box>
    )
}

export default Rightbar
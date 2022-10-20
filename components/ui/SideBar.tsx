
import { useContext } from "react";

import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"

import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import { UIContext } from "../../context/ui";

const menuItems :string[] = ['Inbox' , 'Starred' , 'Send Email' , 'Drafts']


export const SideBar = () => {

    const {sideMenuOpen, closeSideMenu} = useContext(UIContext)

    return (
        <Drawer 
            anchor="left"
            open = {sideMenuOpen}
            onClose= {closeSideMenu}
        >
            <Box sx = {{width : 250}}>
                <Box sx={{padding : '5px 10px'}}>
                    <Typography variant="h4" onClick = {closeSideMenu} >Menu</Typography>
                    
                </Box>
                <List>
                    {
                        menuItems.map( (item, index) => (
                            <ListItem button key = {item + index} >
                                <ListItemIcon>
                                    {index % 2 ? <InboxOutlinedIcon/> : <EmailOutlinedIcon/> }
                                </ListItemIcon>
                                <ListItemText primary = {item} />
                            </ListItem>
                        ))
                    }
                </List>               
            </Box>
            <Divider></Divider>

        </Drawer>
    )
}
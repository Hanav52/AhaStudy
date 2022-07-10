import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function AccountMenu() {
  // local저장소
  const [LoginId, setLoginId] = useState();
  useEffect(() => {
    setLoginId(window.localStorage.getItem("LoginId"));
  },[])

  const history = useHistory();

  const token = window.localStorage.getItem("AccessToken");
  
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  const config = {
    'Authorization': 'Bearer ' + localStorage.getItem("AccessToken"),
    
  };


  const LogoutUser = () => {
    axios.post("http://bestinwoo.hopto.org:8080/auth/logout", config)
      .then(function (response) {
        localStorage.removeItem("LoginId");
        localStorage.removeItem("AccessToken");
        localStorage.removeItem("AccessTokenExpiresIn");
        localStorage.removeItem("RefreshToken");
        localStorage.removeItem("RefreshTokenExpiresIn");
        localStorage.removeItem("State");
        alert(response.data.data);
        history.push("/");
      }).catch(function (error) {
        console.log(error)
      }).then(function() {
          // 항상 실행
      });
  }
 

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Typography sx={{ minWidth: 100 }}>알림</Typography>
        <Typography sx={{ minWidth: 100 }}>{LoginId}</Typography>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0
            }
          }
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar /> 내 정보
        </MenuItem>
        <Divider />
        <MenuItem onClick={LogoutUser}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          로그아웃
        </MenuItem>
      </Menu>
      </div>
  );
}

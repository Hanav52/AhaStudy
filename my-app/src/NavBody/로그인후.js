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
import { Link, useHistory } from "react-router-dom";
import normal from '../내정보/normal.png'
import { PersonAdd } from '@mui/icons-material';
import Notification from "../알림/Notification";

export default function AccountMenu() {
  //api instance 생성
  const instance = axios.create({
    baseURL: 'http://bestinwoo.hopto.org:8080/',
  });

  // local저장소
  const [LoginId, setLoginId] = useState();
  useEffect(() => {
    setLoginId(window.localStorage.getItem("LoginId"));
  },[])
  // 프로필 가져오기
  const [detail, setDetail] = useState([]);

  useEffect(()=> {
      try {
      instance.get(`/user/${localStorage.getItem("UserId")}`)
      .then(function(response) {
        console.log(response.data.data);
        setDetail(response.data.data)
      })} catch(ex){
        console.log("오류")
      }
    },[])

  

    // 이미지 가져오기
  const [image, setImage] = useState("");

    useEffect(()=> {
      instance.get(`/image/${localStorage.getItem("imageId")}`)
        .then(function (response) {
          setImage(response.request.responseURL)
          localStorage.setItem("URL", response.request.responseURL)
      })
    },[])

  const history = useHistory();

  const LogoutUser = () => {
    axios.post("http://bestinwoo.hopto.org:8080/auth/logout",{} ,{
      headers: {
        'Authorization': `Bearer ` + window.localStorage.getItem("AccessToken")
      }
    })
      .then(function (response) {
        localStorage.removeItem("LoginId");
        localStorage.removeItem("AccessToken");
        localStorage.removeItem("AccessTokenExpiresIn");
        localStorage.removeItem("RefreshToken");
        localStorage.removeItem("RefreshTokenExpiresIn");
        localStorage.setItem("State", false);
        alert(response.data.data);
        history.push("/");
        history.go(0);
      }).catch(function (error) {
        alert("로그인이 만료되었습니다.");
        history.push("login");
        console.log(error)
      }).then(function() {
        localStorage.removeItem("State")
        
      });
  }
 

  const [anchorEl, setAnchorEl] = useState(null);
  //const [anchorEl1, setAnchorEl1] = useState(null);
  const open = Boolean(anchorEl);
  //const open1 = Boolean(anchorEl1);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // const handleClick1 = (event1) => {
  //   setAnchorEl1(event1.currentTarget);
  // };
  // const handleClose1 = () => {
  //   setAnchorEl1(null);
  // };
  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        {/* <Tooltip title="Notifications">
            <IconButton
              onClick={handleClick1}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open1 ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open1 ? "true" : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip> */}
        <Notification/>
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
            <Avatar sx={{ width: 32, height: 32 } } src={detail.profileImagePath === null ? normal : image}></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      {/* <Menu
        anchorEl={anchorEl1}
        id="account-menu"
        open={open1}
        onClose={handleClose1}
        onClick={handleClose1}
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
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
      </Menu> */}
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
        <MenuItem onClick={()=>history.go("/Profile")}>
          <Avatar src={detail.profileImagePath === null ? normal : image}/> 내 정보
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

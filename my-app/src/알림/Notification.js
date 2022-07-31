import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import * as StompJs from "@stomp/stompjs";
import * as SockJS from "sockjs-client";
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import { Alert, Avatar, ListItemIcon, Tooltip, Typography } from '@mui/material';
import { NotificationAdd, Notifications, PersonAdd } from '@mui/icons-material';
import { Link, useHistory } from 'react-router-dom';

function Notification() {
  const client = useRef({});
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState("");
  const history = useHistory();

  //api instance 생성
  const instance = axios.create({
    baseURL: 'http://bestinwoo.hopto.org:8080/',
  });

  useEffect(() => {
    connect();

    return () => disconnect();
  }, []);
  const configNoBearer = {
    headers: {
    'Authorization': 'Bearer ' + localStorage.getItem("AccessToken"),
}};

  const connect = () => {
    client.current = new StompJs.Client({
      brokerURL: "ws://bestinwoo.hopto.org:8080/ws/websocket", // 웹소켓 서버로 직접 접속
      //webSocketFactory: () => new SockJS("/ws/websocket"), // proxy를 통한 접속
      connectHeaders: {
        'Authorization': localStorage.getItem("AccessToken"),
      },
      debug: function (str) {
        console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        console.log("hi")
        subscribe();
      },
      onStompError: (frame) => {
        console.error(frame);
      },
    });

    client.current.activate();
  };

  const disconnect = () => {
    client.current.deactivate();
  };

  const subscribe = () => {
    client.current.subscribe(`/topic/notify/${localStorage.getItem("UserId")}`, ({ body }) => {
        setNoti((_chatMessages) => [..._chatMessages, JSON.parse(body)]);
        setCount(count+1);
    });
  };

    // 알림 가져오기
    const [noti, setNoti] = useState([]);
    const [count, setCount] = useState();
    const config = {
        headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("AccessToken"),
    }};
    const NNoti = () => {
        try {
        instance.get(`/notifications/${localStorage.getItem("UserId")}`, config)
        .then(function(response) {
        setNoti(response.data.data)
        setCount(response.data.count)
        console.log(response)
        })} catch(ex){
        console.log("오류")
        }
    }
    useEffect(() => {
      NNoti();
    },[])
    // 알림 삭제
    const Notidelete = (id) => {
      NNoti();
      try{
        instance.delete(`/notifications/${localStorage.getItem("notiId")}`, config)
        .then(function (response) {
          NNoti();
          setNoti(noti.filter(user => user.id !== id));
          setCount(count-1);
          //setAnchorEl(null);
            
        })
      }
      catch(e) {
        console.log(e)
      }
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const [visible, setVisible] = useState([]);
    
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
    setAnchorEl(null);
    };
    const ReadNoti = () => {
      NNoti();
      try {
        instance.post(`/notifications/${localStorage.getItem("notiId")}`, { } ,config)
        .then(function (response) {
          NNoti();
        })
        .then(function (error) {
          console.log(error)
        })
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="알림">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
          <Badge badgeContent={count} color="primary">
            <Notifications sx={{ width: 32, height: 32 }}></Notifications>
          </Badge>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
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
        {noti.map((_noti, index) => 
        <MenuItem key={index} >
        <div className="read" 
          onClick={() => { localStorage.setItem("postId", _noti.postId); localStorage.setItem("notiId", _noti.id); ReadNoti(); history.push("/detail");  }}
          style={_noti.viewYn ? {backgroundColor: "gray"} : {backgroundColor: "white"}} 
        >
        <Link>
          {index+1} : {_noti.message}
        </Link>
        </div>

          <button type="button" className="btn-close" onClick={() => {localStorage.setItem("notiId", _noti.id); Notidelete(_noti.id)}} ></button>
        </MenuItem>
        )}
      </Menu>
    </>
  );
}

export default Notification;

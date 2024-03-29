import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import * as StompJs from "@stomp/stompjs";
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { createTheme, ThemeProvider, Tooltip } from '@mui/material';
import { Notifications } from '@mui/icons-material';
import { useHistory } from 'react-router-dom';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { api, instance } from '../MyProfile/MyApi';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffc107',
    },
    secondary: {
      main: '#ffe082',
    },
  },
});

function Notification() {
  const client = useRef({});
  const history = useHistory();

  useEffect(() => {
    connect();

    return () => disconnect();
  }, []);

  const connect = () => {
    client.current = new StompJs.Client({
      brokerURL: `ws://${api}/ws/websocket`, // 웹소켓 서버로 직접 접속
      connectHeaders: {
        'Authorization': localStorage.getItem("AccessToken"),
      },
      debug: function (str) {
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        subscribe();
      },
      onStompError: (frame) => {
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
        })} catch(ex){
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
        })
      }
      catch(e) {
      }
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
    setAnchorEl(null);
    };
    const result = noti.filter(_noti => _noti.viewYn === false).length;
    const ReadNoti = (id) => {
      NNoti();
      try {
        instance.post(`/notifications/${localStorage.getItem("notiId")}`, { } ,config)
        .then(function (response) {
          NNoti();
        })
        .then(function (error) {
        })
      } catch (error) {
      }
    }
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="알림">
        <ThemeProvider theme={theme}>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : "알림이 없습니다."}
            aria-haspopup="true"
            aria-expanded={open ? "true" : "알림이 없습니다."}
            color="secondary"
          >
          <ThemeProvider theme={theme}>
          <Badge badgeContent={result} color="primary">
            <Notifications sx={{ width: 32, height: 32 }}></Notifications>
          </Badge>
          </ThemeProvider>
          </IconButton>
        </ThemeProvider>
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
        <div className='read'>
        <MenuItem key={index} style={_noti.viewYn ? {backgroundColor: '#ffebee'} : {backgroundColor: '#fff'}}>
        <div className="read1" 
          onClick={() => { localStorage.setItem("postId", _noti.postId); localStorage.setItem("notiId", _noti.id); ReadNoti(); history.push("/detail");  history.go(0);}} 
        >
          <CheckOutlinedIcon style={_noti.viewYn ? {color: "ff7473", marginRight: '5px'} : {color: 'black', marginRight: '5px'}}/>  {_noti.message}
        </div>
          <button type="button" style={{marginLeft: '5px'}} className="btn-close" onClick={() => {localStorage.setItem("notiId", _noti.id); Notidelete(_noti.id)}} ></button>
        </MenuItem>
        </div>
        )}
      </Menu>
    </>
  );
}

export default Notification;

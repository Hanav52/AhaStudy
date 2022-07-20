import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import App from '../../글작성/Modal';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function UpdateDetail() {
  const [open, setOpen] = useState(false);
  const token = window.localStorage.getItem("AccessToken");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  const Title = window.localStorage.getItem("titlevalue");
  const TagStroage = window.localStorage.getItem("localTags");
  const ContentValue = window.localStorage.getItem("contentvalue");
  let frm = new FormData();
  frm.append("title", Title);
  frm.append("content", ContentValue);
  frm.append("boardId", 1);
  frm.append("tags", TagStroage);
  let photoFile = document.getElementById("photo");
  frm.append("file", photoFile);
  
  const config = {
    'Authorization': 'Bearer ' + localStorage.getItem("AccessToken"),
    'Content-Type': 'multipart/form-data'
  };

  const handleClickOpen = () => {
    if(visible === null) {
      alert("로그인 후 이용해주세요.");
    } else {
      alert("글 작성하기");
      // 400000이하로 떨어지면
      if(diff2 < 400000) {
        axios.post("http://bestinwoo.hopto.org:8080/auth/reissue", {
          accessToken : AccessToken,
          refreshToken: RefreshToken
      })
      .then(function (response) {
        localStorage.removeItem("AccessToken");
        localStorage.removeItem("AccessTokenExpiresIn");
        localStorage.removeItem("RefreshToken");
        localStorage.removeItem("RefreshTokenExpiresIn");
        localStorage.setItem("AccessToken", response.data.accessToken);
        localStorage.setItem("AccessTokenExpiresIn", response.data.accessTokenExpiresIn);
        localStorage.setItem("RefreshToken", response.data.refreshToken);
        localStorage.setItem("RefreshTokenExpiresIn", response.data.refreshTokenExpiresIn);
        // 글작성하는 곳으로
        setOpen(true);
      }).catch(function (error) {
        console.log(error)
      }).then(function() {
          // 항상 실행
      });
      } else {
        // 글 작성하는 곳으로 이동
        setOpen(true);
      }
    }
  };
  const handleClose = () => { 
    setOpen(false);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    e.persist();

    let files = e.target.profile_files.files;
    let formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("file", files[i]);
    }
    const token = window.localStorage.getItem("AccessToken");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const Title = window.localStorage.getItem("titlevalue");
    const TagStroage = window.localStorage.getItem("localTags");
    const ContentValue = window.localStorage.getItem("contentvalue");
    formData.append("title", Title);
    formData.append("content", ContentValue);
    formData.append("boardId", 1);
    formData.append("tags", TagStroage);
  

    axios.post("http://bestinwoo.hopto.org:8080/post", formData, config).then(function (response) {
      console.log(response)
    }).catch(function (error) {
    }).then(function() {
        // 항상 실행
    }); 

  };
  // 토큰 재발행
  const history = useHistory();
  const t2 = new Date();
// localstorage에서 데이터 받아오기
  const [visible, setVisible] = useState();
  const [LoginId, setLoginId] = useState();
  const [AccessToken, setAccessToken] = useState();
  const [AccessTokenExpiresIn, setAccessTokenExpiresIn] = useState();
  const [RefreshToken, setRefreshToken] = useState();
  const [RefreshTokenExpiresIn, setRefreshTokenExpiresIn] = useState();
  // 날짜가 만료되면 액세스 토큰과 리프레쉬 토큰 api로 재발급받아 저장한다.
  useEffect(() => {
    setVisible(window.localStorage.getItem("State"));
    setLoginId(window.localStorage.getItem("LoginId"));
    setAccessToken(window.localStorage.getItem("AccessToken"));
    setAccessTokenExpiresIn(window.localStorage.getItem("AccessTokenExpiresIn"));
    setRefreshToken(window.localStorage.getItem("RefreshToken")); 
    setRefreshTokenExpiresIn(window.localStorage.getItem("RefreshTokenExpiresIn"));
},[]);
  const t1 = Number(AccessTokenExpiresIn);
  const diff2 = moment.duration(t1 - t2).asMilliseconds(); // 400000이하로 떨어지면
  
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        수정
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth='lg'
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          작성
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <App/>
          <p></p>
        </DialogContent>
        <DialogActions>
        <form onSubmit={(e) => onSubmit(e)}>
            <input
              type="file"
              name="profile_files"
              multiple="multiple"
            />
            <button type="submit" onClick={handleClose}>업로드</button>
            <button type="close" onClose={handleClose}>닫기</button>
        </form>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

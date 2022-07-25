import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import moment from 'moment';
import UpdateDetailModal from './UpdateDetailModal';
import UpdateCommentModal from './UpdateCommentModal';

export default function UpdateComment() {
    const [open, setOpen] = useState(false);
    //  /post에서 받아온 postId와 wirterLoginId 불러오기
    const postId = localStorage.getItem("postId");
    const CommentId = localStorage.getItem("CommentId");
    
    //api 헤더 부분
    const config = {
        'Authorization': `Bearer ` + window.localStorage.getItem("AccessToken")
      }

    const handleClickOpen = () => {
        if(visible === null) {
        alert("로그인 후 이용해주세요.");
        } else {
        // 400000이하로 떨어지면
        if(diff2 < 400000) {
            axios.post("http://bestinwoo.hopto.org:8080/auth/reissue", {
            accessToken : AccessToken,
            refreshToken: RefreshToken
        }, config)
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
        
        axios.patch(`http://bestinwoo.hopto.org:8080/reply/${CommentId}`, {
            comment: window.localStorage.getItem("comment"),
            postId : window.localStorage.getItem("postId")
        }, {
            headers: {
            'Authorization': `Bearer ` + window.localStorage.getItem("AccessToken")
        }})
        .then(function(response) {
          alert("수정 완료");
          history.go("/post")
        })
    }
    // 토큰 재발행
    //axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
    //axios.defaults.withCredentials = false;
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
      <Dialog open={open} onClose={handleClose} maxWidth='lg'>
        <DialogTitle>내용</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <UpdateCommentModal/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose}>취소</button>
            <form onSubmit={(e) => onSubmit(e)}>
          <button onClick={handleClose} >저장</button>
          </form>
        </DialogActions>
      </Dialog>
    </div>
  );
}

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
import App from './Modal';
import axios from "axios";
import { useState } from 'react';

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

export default function CustomizedDialogs() {
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
    setOpen(true);
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
        // 오류발생시 실행
    }).then(function() {
        // 항상 실행
    }); 

  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        글 쓰기
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          작성
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <App/>
          <p></p>
          {/* <form>
          <input type="file" name="photo" id="photo" />
          </form> */}
          
        </DialogContent>
        <DialogActions>
        <form onSubmit={(e) => onSubmit(e)}>
            <input
              type="file"
              name="profile_files"
              multiple="multiple"
            />
            <button type="submit" onClick={handleClose}>업로드</button>
          {/* <Button autoFocus onClick={handleClose}>
            저장하기
          </Button> */}
          </form>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

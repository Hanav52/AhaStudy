import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Users  ()  {
  const [userId, setUserId] = useState("sibar52");

  axios.get(`http://bestinwoo.hopto.org:8080/auth/user/${userId}`)
  .then(function (response) {
    console.log(response)
  }).catch(function (error) {
      // 오류발생시 실행
  }).then(function() {
      // 항상 실행
  });
    return (
        <h1>Users</h1>
    );
}

export default Users;
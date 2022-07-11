import React,{useState}  from 'react';

import moment from 'moment';
import Moment from 'react-moment';
import 'moment/locale/ko';

import { useInterval } from 'react-use';

const LiveTimeContainer = () => {
  const [seconds, setSeconds] = useState(Date.now());

  // useInterval
  useInterval(() => {
    setSeconds(Date.now());
  }, 1000);

  const startTime = new Date('2020-08-23T16:09'),
        nowTimeFormat = new Date(seconds);

  return (
      <>
    {startTime - nowTimeFormat > 0 ? 
     (<><Moment fromNow>{startTime}</Moment>&nbsp;접수 시작</>) : (<div>{'접수 중'}</div>)
    }  
    </>
  )
}
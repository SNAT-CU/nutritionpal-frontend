import React, { useEffect } from 'react';
import './App.css';
import { RequestOptions } from 'http';
import FoodSection from './Components/Diet/FoodSection';
import NavbarOne from './Components/Nav/NavbarOne';
import Index from './Components/Auth/Index';

function App() {
  useEffect(() => {
    // const myHeaders = new Headers();
    // myHeaders.append(
    //   'Authorization',
    //   'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjYwNzdBNzkyMERFNDM1NDQ5QkUxNEEwNTI5QkZFNjQxNUEzOTZFRjgiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJZSGVua2cza05VU2I0VW9GS2JfbVFWbzVidmcifQ.eyJuYmYiOjE2NTIwMDQyOTcsImV4cCI6MTY1MjA5MDY5NywiaXNzIjoiaHR0cHM6Ly9vYXV0aC5mYXRzZWNyZXQuY29tIiwiYXVkIjoiYmFzaWMiLCJjbGllbnRfaWQiOiI5ZWE0NWNkY2M2N2E0YWQ3YTA5ZjAyZjI1MzgxY2U0NSIsInNjb3BlIjpbImJhc2ljIl19.tzgsgEdmkLXCek-CfbUxuF2ZMLJrGpFg7_ScSEJ04jSwzxUz6BrW2HkmjBEfFREqpsAUCmV17QVwtDfvAi210B9KP_tr90_Ut72atWWukiOYEs8rMlEAj_D7ASrApaEwX4wvKOCt4VqPUamYi6VqfmV7hPndkJDyhcB0n9GiGJQeVvi7Gmz2wJNa-5jVvzqrt51TDAozxzWC9XHV-8_o83Hxtmc7HRgfUnWdcdLGRe3Ifr7eYJUy2LVaFhuKB_OB_SPxI-2q7KxcB_dWu5jXkMakQmEQh07T3ZJpHV4cvyBVE1OAd-TjE9a3Otg3W3xKy7Ky5YEW23zx3ZVsFFQWnR4DPJ8uRS85S37yeQnqOV3TRdC0nk18zuF6PCidQKcnReTISAi3F4uatGD3T3Aim_YhNX26FSibWZvABDBnEb6LAL_kGrYHr5z9aAfOVvaJVb0HDc2-WkzwXKb9ehXce-i0DkP_MWbI5K7_WhYhNrdGoZCMt2m-7iq-yo3elWTxSR7BX1hd4Mof0zhunySd9CnmD-AdpLFGkzFeMLTZlYSQkEGuI1YFD5lyf6gral1wDkSdFmfalZ3PNJcSS3QaEbs9a56pxlHveRrxkDX98tWQMr3lH4NqjtwIOgcf6VhZhMQ60jWtpxyttlZTub6GIXrl9GqtqPk0Tarz205Ubd8',
    // );
    // myHeaders.append('Content-Type', 'application/json');
    // myHeaders.append(
    //   'Cookie',
    //   'AWSALB=ABOjxXLJ5bnvsPAz8b+RmRiM+jHQvimhaLUGqEYXfgoyX1iOEgeAbbvhI28hQEmfi/RlyuuyvyOrKKTwmKy/q5DRqkEGVz91GL9Hi9hCVU3e7X2lbcpt+g2ojPff',
    // );

    fetch('https://thetanmayvaish.xyz/food', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <div>
      <NavbarOne />
      {/* <Index /> */}
      <FoodSection section="BREAKFAST" />
      <FoodSection section="LUNCH" />
      <FoodSection section="SNACKS" />
      <FoodSection section="DINNER" />
    </div>
  );
}

export default App;

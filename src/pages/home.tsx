import React, { useEffect } from 'react';
import { ShowModal, Button } from 'ukelli-ui';
import { getUsers } from '../auth/actions/apis';

const Popover = () => {
  useEffect(() => {
    getUsers().then((res) => {
      console.log(res)
    })
    return () => {
    };
  }, [])
  return (
    <div className="p20">欢迎到来</div>
  )
}

const HomePage = (props) => {
  return (
    <div className="home-page">
      <Button
        text="弹出层"
        onClick={(e) => {
          ShowModal({
            title: '欢迎',
            children: (
              <Popover />
            )
          });
        }} />
    </div>
  );
};

export default HomePage;

import React from 'react';
import { ShowModal, Button } from 'ukelli-ui';

const HomePage = (props) => {
  return (
    <div className="home-page">
      <Button
        text="Button"
        onClick={(e) => {
          ShowModal({
            title: '欢迎',
            children: (
              <div>欢迎到来</div>
            )
          });
        }} />
    </div>
  );
};

export default HomePage;

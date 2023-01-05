import React, { useState, useEffect } from 'react';
import Logo from './asset/logo-icon.svg'
import FlyOrg from './asset/flyorg.svg';

function FadeInOutMessage() {
    /*const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const timeout = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timeout);
    }, []);*/
  
    return (
      <div>
        {/* {isVisible ? ( */}
          <div className="animation">
                    <img src={FlyOrg} alt="flyOrg" />
                    <img src={Logo} alt="logo" />
    </div>
        {/* ) : null} */}
      </div>
    );
  }
export default FadeInOutMessage;  


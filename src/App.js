import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import ExpenseReport from './components/ExpenseReport';

import './App.css';

function App() {
  const [user, setUser] = useState({});
  const [oauthSuccess, setOauthSuccess] = useState(false);

  return(
    <div className="App">
      <Row>
        <div className="main-content col-12 ">
          {
            oauthSuccess
            ?
            <ExpenseReport name={user.name} />
            :
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              onSuccess={(response) => {
                if (response.profileObj) {
                  setOauthSuccess(true);
                  setUser(response.profileObj);
                }
              }}
              onFailure={(response) => console.log('FAILURE')}
              cookiePolicy={'single_host_origin'}
            />
        }
        </div>
      </Row>
    </div>
  );
}

export default App;

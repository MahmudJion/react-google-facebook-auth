import React, { useState } from 'react';
import './App.css';
import GoogleBtn from './GoogleBtn';
import FacebookLogin from 'react-facebook-login';
import { Card, Image } from 'react-bootstrap';

function App () {
    const [login, setLogin] = useState(false);
    const [data, setData] = useState({});
    const [picture, setPicture] = useState('');

    const responseFacebook = (response) => {
        console.log(response);
        setData(response);
        setPicture(response.picture.data.url);
        if (response.accessToken) {
            setLogin(true);
            console.log('Access token facebook-', response.accessToken);
        } else {
            setLogin(false);
        }
    }
    return (
        <div class="container">
            <GoogleBtn/>
            <Card style={{ width: '600px' }}>
                <Card.Header>
                    {!login &&
                        <FacebookLogin
                            appId="<YOUR APP ID>"
                            autoLoad={false}
                            fields="name,email,picture"
                            scope="public_profile,email"
                            callback={responseFacebook}
                            icon="fa-facebook" />
                    }
                    {login &&
                        <Image src={picture} roundedCircle />
                    }
                </Card.Header>
                {login &&
                    <Card.Body>
                        <Card.Title>{data.name}</Card.Title>
                        <Card.Text>
                            {data.email}
                        </Card.Text>
                    </Card.Body>
                }
            </Card>
        </div>
    );
}

export default App;

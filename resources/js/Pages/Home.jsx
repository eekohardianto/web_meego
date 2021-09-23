import React from 'react'
import App from '../Layouts/App';

export default function Home(props) {
    const {uname, upass} = props;
    return (
        <App title="Parsinta">
            Hi {uname}, and pass {upass} 
        </App>
    )
}

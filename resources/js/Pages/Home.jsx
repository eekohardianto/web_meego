import React from 'react'
import App from '../Layouts/App';

export default function Home(props) {
    const {uname, upass} = props;
    return (
        <App title="Parsinta">
            <div className="container">
            <div className="card">
                <div className="card-header">
                    hello world
                </div>
                <div className="card-body">
                Hi {uname}, and pass {upass} 
                </div>
            </div>
            </div>
           
            
        </App>
    )
}

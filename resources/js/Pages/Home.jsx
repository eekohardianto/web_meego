import React from 'react'

export default function Home(props) {
    const {uname, upass} = props;
    return (
        <div>
            Hi {uname}, and pass {upass} 
        </div>
    )
}

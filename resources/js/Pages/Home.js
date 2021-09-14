import React from 'react'

export default function Home(props) {
    const {unamex, upassx} = props;
    return (
        <div>
            Hi {unamex}, and pass {upassx}
        </div>
    )
}

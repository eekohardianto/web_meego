import React from 'react'
import { Head } from '@inertiajs/inertia-react'

export default function Guest({ children, title }) {
    return (
        <div>
            <Head title={`${title} | Parsinta`}/>
            {children}
        </div>
    )
}

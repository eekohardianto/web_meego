import React from 'react'
import { Head, Link } from '@inertiajs/inertia-react'

export default function Guest({ children, title }) {
return (
<div className="min-vh-100 d-flex align-items-center justify-content-center">

    <Head title={`${title} | Parsinta`} />
    <div className="col-md-4">
        <Link href="/">Logo</Link>
        {children}
    </div>

</div>
)
}

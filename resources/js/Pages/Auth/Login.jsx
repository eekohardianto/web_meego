import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import Guest from '../../Layouts/Guest'

export default function Login() {
    return (
        <Guest title="Login">
            <div className="card">
                <div className="card-header">Login</div>
                <div className="card-body">Login Form</div>
                <div className="card-footer">
                    <Link className="link-dark text-decoration-none" href="/register">Register</Link>
                </div>
            </div>
        </Guest>
    )
}

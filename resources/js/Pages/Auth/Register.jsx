import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import Guest from '../../Layouts/Guest'

export default function Register() {
    return (
        <Guest title="Register">
            <div className="card">
                <div className="card-header">Register</div>
                <div className="card-body">Register Form</div>
                <div className="card-footer">
                    <Link className="link-dark text-decoration-none" href="/login">Login</Link>
                </div>
            </div>
        </Guest>
    )
}

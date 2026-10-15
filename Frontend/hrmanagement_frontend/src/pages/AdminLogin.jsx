import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let [message, setMessage] = useState('');
    let [success, setSuccess] = useState(false);

    let navigate = useNavigate();

    let login = (event) => {
        event.preventDefault();

        if (username === 'admin' && password === 'admin123') {
            setMessage('Login successful! Redirecting...');
            setSuccess(true);

            setTimeout(() => {
                navigate('/admin-home');
            }, 1500);
        } else {
            setMessage('Invalid username or password');
            setSuccess(false);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card shadow-sm border-0">
                        <div className="card-body p-4">
                            <h2 className="text-center mb-4">
                                Admin Login
                            </h2>

                            <form onSubmit={login}>
                                <div className="mb-3">
                                    <label
                                        htmlFor="username"
                                        className="form-label"
                                    >
                                        Username
                                    </label>

                                    <input
                                        type="text"
                                        id="username"
                                        className="form-control"
                                        placeholder="Enter Username"
                                        value={username}
                                        onChange={(e) =>
                                            setUsername(e.target.value)
                                        }
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label
                                        htmlFor="password"
                                        className="form-label"
                                    >
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        id="password"
                                        className="form-control"
                                        placeholder="Enter Password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                >
                                    Admin Login
                                </button>
                            </form>

                            {message && (
                                <div
                                    className={`alert ${
                                        success
                                            ? 'alert-success'
                                            : 'alert-danger'
                                    } mt-3 mb-0`}
                                    role="alert"
                                >
                                    {message}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;

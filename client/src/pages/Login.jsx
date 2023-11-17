import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { AuthContext } from '../context/AuthContext';
import { AdminContext } from '../context/AdminContext';
import { backendUrl } from '../utils/Services';
// import { useCookies } from 'react-cookie';
// import { response } from 'express';


function Login() {
    const [fafaEye, setFafaEye] = useState(false);
    const [fafaEyes, setFafaEyes] = useState(false);
    const [fafaEyess, setFafaEyess] = useState(false);
    const [login, setLogin] = useState(true);

    const { setLoginInfo, errorResponse, loginInfo, handleLogin, isLoading, registerInfo, setRegisterInfo, registerUser } = useContext(AuthContext);

    const {settingsData} = useContext(AdminContext);

    const [isErrorResponse, setIsErrorResponse] = useState(false);

    useEffect(() => {
        if (errorResponse) {
            setIsErrorResponse(true);

            setTimeout(() => {
                setIsErrorResponse(false);
            }, 5000);
        }
    }, [errorResponse]);

    return (
        <>
            <div className="login-box" style={{ width: '450px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', overflow: 'auto' }} >
                {/* /.login-logo */}
                {login && (
                    <div className="card" id="loginPage" style={{ padding: '0px 20px 0px 20px', overflow: 'auto' }}>
                        <div className="card-body login-card-body">

                            <div style={{ textAlign: 'center' }}>
                                <img style={{ width: 120, height: 120, borderRadius: '50%' }} src={settingsData && `${backendUrl}/${settingsData.image}`} alt /></div>
                            <p style={{ textAlign: 'center', fontSize: 20 }}><strong>{settingsData && settingsData.title}</strong></p>
                            <form onSubmit={handleLogin}>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Username" value={loginInfo.username} onChange={(e) => setLoginInfo({ ...loginInfo, username: e.target.value })} />
                                    <div className="input-group-append" >
                                        <div className="input-group-text">
                                            <span className="fas fa-user" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type={fafaEyess ? 'text' : 'password'} className="form-control" placeholder="Password" value={loginInfo.password} onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })} />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span style={{ cursor: 'pointer' }} onClick={() => setFafaEyess(fafaEyess ? false : true)} className={fafaEyess ? 'fa fa-eye' : 'fa fa-eye-slash'} />
                                        </div>
                                    </div>
                                </div>

                                {isErrorResponse && errorResponse && (
                                    <p style={{ textAlign: 'center', color: errorResponse.error ? 'lightblue' : 'white', backgroundColor: errorResponse.error ? 'rgb(94, 94, 159)' : 'rgb(219, 164, 164)', padding: '5px', borderRadius: '5px' }}>
                                        {!errorResponse.error && errorResponse.message}
                                    </p>
                                )}

                                <div className="row" style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                                    <div className="col-8">
                                        <div className="icheck-primary" >
                                            <input type="checkbox" id="remember" style={{ marginRight: '6px' }} />
                                            <label htmlFor="remember">
                                                Remember Me
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                {/* login sign in */}
                                <div>
                                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                                </div>
                            </form>
                            {/* /.social-auth-links */}
                            <p className="mb-1">
                            </p>
                            <div style={{ textAlign: 'center', margin: '15px' }}>
                                <span>Don't have an account? <a href="#" onClick={() => setLogin(false)}>Register</a></span>
                            </div>
                        </div>
                        {/* /.login-card-body */}
                    </div>
                )}

                {/* ================================================= Register ======================================================= */}
                {!login && (
                    <div className="card" id="loginPage" style={{ padding: '0px 20px 0px 20px', overflow: 'auto' }}>
                        <div className="card-body login-card-body">

                            <div style={{ textAlign: 'center' }}>
                                <img style={{ width: 120, height: 120, borderRadius: '50%' }} src={settingsData && `${backendUrl}/${settingsData.image}`} alt /></div>
                            <p style={{ textAlign: 'center', fontSize: 20 }}><strong>{settingsData && settingsData.title}</strong></p>
                            <form onSubmit={registerUser}>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="First Name" value={registerInfo.firstName} onChange={(e) => setRegisterInfo((prev) => ({ ...prev, firstName: e.target.value }))} required />
                                    <div className="input-group-append" >
                                        <div className="input-group-text">
                                            <span className="fas fa-user" />
                                        </div>
                                    </div>
                                </div>

                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Middle Name" value={registerInfo.middleName} onChange={(e) => setRegisterInfo((prev) => ({ ...prev, middleName: e.target.value }))} />
                                    <div className="input-group-append" >
                                        <div className="input-group-text">
                                            <span className="fas fa-user" />
                                        </div>
                                    </div>
                                </div>

                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Last Name" value={registerInfo.lastName} onChange={(e) => setRegisterInfo((prev) => ({ ...prev, lastName: e.target.value }))} required />
                                    <div className="input-group-append" >
                                        <div className="input-group-text">
                                            <span className="fas fa-user" />
                                        </div>
                                    </div>
                                </div>

                                <div className="input-group mb-3">
                                    <input type={fafaEye ? 'text' : 'password'} className="form-control" placeholder="Password" value={registerInfo.password} onChange={(e) => setRegisterInfo((prev) => ({ ...prev, password: e.target.value }))} required />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span style={{ cursor: 'pointer' }} onClick={() => setFafaEye(fafaEye ? false : true)} className={fafaEye ? 'fa fa-eye' : 'fa fa-eye-slash'} />
                                        </div>
                                    </div>
                                </div>

                                <div className="input-group mb-3">
                                    <input type={fafaEyes ? 'text' : 'password'} className="form-control" placeholder="Confirm Password" value={registerInfo.confirmPassword} onChange={(e) => setRegisterInfo((prev) => ({ ...prev, confirmPassword: e.target.value }))} required />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span style={{ cursor: 'pointer' }} onClick={() => setFafaEyes(fafaEyes ? false : true)} className={fafaEyes ? 'fa fa-eye' : 'fa fa-eye-slash'} />
                                        </div>
                                    </div>
                                </div>

                                {isErrorResponse && errorResponse && (
                                    <p style={{ textAlign: 'center', color: errorResponse.error ? 'lightblue' : 'white', backgroundColor: errorResponse.error ? 'rgb(94, 94, 159)' : 'rgb(219, 164, 164)', padding: '5px', borderRadius: '5px' }}>
                                        {!errorResponse.error && errorResponse.message}
                                    </p>
                                )}
                                <div>
                                    <button type="submit" name="login" className="btn btn-primary btn-block">Register</button>
                                </div>
                            </form>
                            {/* /.social-auth-links */}
                            <p className="mb-1">
                            </p>
                            <div style={{ textAlign: 'center', margin: '15px' }}>
                                <span>Don't have an account? <a href="#" onClick={() => setLogin(true)}>Login</a></span>
                            </div>
                        </div>
                        {/* /.login-card-body */}
                    </div>
                )}
            </div>

            {/* fetching data screen */}
            {/* {isLoading && (
                <div className="popup">
                    <div className="modal-pop-up-loading">
                        <div className="modal-pop-up-loading-spiner"></div>
                        <p>Loading...</p>
                    </div>
                </div>
            )} */}
        </>
    )
}

export default Login
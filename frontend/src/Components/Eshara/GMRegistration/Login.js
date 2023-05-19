import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import swal from "sweetalert";
import axios from "axios";


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [uerId, setUserId] = useState("");
    const [user, setUser] = useState("");


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };


    function handleSearchClick() {
        axios
            .get('http://localhost:8070/officer/profile', {params: { email, password }})
            .then((response) => {
                setUser(response.data);
                sessionStorage.setItem('userID', response.data._id);
                sessionStorage.setItem('name', response.data.name);
                swal({
                    title: "Login Success !",
                    text: "Redirecting to your Profile..",
                    icon: "success",
                    timer: 2000,
                    button: false,
                });

                setTimeout(() => {
                    window.location.replace("http://localhost:3000/sidebar");
                }, 2000);
            })
            .catch((err) => {
                swal({
                    title: "Error!",
                    text: "User Not Found..",
                    type: "error",
                });
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearchClick();
    };

    return (
        <>

            <div className="container" style={{ paddingTop: "50px", paddingBottom: "95px", paddingLeft: "auto", paddingRight: "auto", alignSelf: "center", width: "50%" }}>
                <section>
                    <div className='row mb-5'>
                        <div className='col-10 mb-5'>
                            <img src="assets/img/logoWhite.png" style={{ width: "60%" }} />
                        </div>
                    </div>
                    {/* <h3>Log In</h3> */}

                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <div class="row mt-5">
                                <div class="col-3">
                                    <label for="code">Email</label>
                                </div>

                                <div class="col-6">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="phone1"
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="row mt-5">
                                <div class="col-3">
                                    <label for="price">Password</label>
                                </div>
                                <div class="col-6">
                                    <input
                                        type="password"
                                        class="form-control"
                                        value={password}
                                        onChange={handlePasswordChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="row mt-5">
                            <div className='col-7'>
                                <button type="submit" className='btn btn-primary'>Log In</button>
                                <h6><b>Do not have an account ?</b> &nbsp; <Link to={`/regGM`}>Sign up</Link> </h6>
                            </div>
                        </div>
                    </form>
                </section>
            </div >
        </>
    )
}

export default Login;
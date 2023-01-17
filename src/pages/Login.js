import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [categorydata, setCategorydata] = useState("");
    const navigate = useNavigate();


    const Submit = (e) => {
        const form = new FormData()
        form.append('userEmail', document.getElementById("subscribeid").value)
        form.append('userBirth', document.getElementById("subscribepw").value)
        form.append('userNickname', document.getElementById("subscribenickname").value)
        form.append('roles', "ROLE_USER")


        axios.post("/join", form)
            .then((res) => {
                alert("join.")
                console.log(res.data)
            })
        e.preventDefault()
    }
    const Submit2 = (e) => {
        const form = new FormData()
        const config = { "Content-Type": 'application/json' }
        form.append('userEmail', document.getElementById("loginid").value)

        axios.post("/login", form, config)
            .then((res) => {
                console.log(res.data)
                console.log(typeof (res.data))
                localStorage.setItem("Authorization", res.data)
                // setCategorydata(res.data)
                if (res.data === false) {
                    alert("login fail")
                } else {
                    axios.post("/test", form, { headers: { Authorization: res.data, } })
                        .then((res) => {
                            alert("test.")
                            console.log(res.data)
                            if (res.data === true) {
                                navigate('/main');
                            }
                        })
                }
            })
        e.preventDefault()
    }

    return (
        <div>
            <h1>회원가입</h1>
            <form onSubmit={Submit}>
                <textarea rows="1" cols="70" id="subscribeid" placeholder="id!" /><br />
                <textarea rows="1" cols="70" id="subscribepw" placeholder="pw" /><br />
                <textarea rows="1" cols="70" id="subscribenickname" placeholder="nickname" /><br />
                <input type="submit" value="Submit" />
            </form>
            <br /><br /><br /><br />
            <h1>로그인</h1>
            <form onSubmit={Submit2}>
                <textarea rows="1" cols="70" id="loginid" placeholder="id!" /><br />
                <textarea rows="1" cols="70" id="loginpw" placeholder="pw!" /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>

    );
}

export default Login;
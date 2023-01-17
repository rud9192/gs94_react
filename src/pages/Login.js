import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [categorydata, setCategorydata] = useState("");
    const navigate = useNavigate();
    const form = new FormData()

    const Submit = (e) => {
        form.append('userEmail', document.getElementById("id").value)
        form.append('userBirth', document.getElementById("pw").value)
        form.append('userNickname', document.getElementById("nickname").value)
        form.append('roles', "ROLE_USER")


        axios.post("/join", form)
            .then((res) => {
                alert("join.")
                console.log(res.data)
            })
        e.preventDefault()
    }
    const Submit2 = (e) => {
        const config = { "Content-Type": 'application/json' }
        form.append('email', document.getElementById("id").value)

        axios.post("/login", form, config)
            .then((res) => {
                alert("login.")
                console.log(res.data)
                localStorage.setItem("Authorization", res.data)
                setCategorydata(res.data)
            })
        axios.post("/test", form, { headers: { Authorization: categorydata, } })
            .then((res) => {
                alert("test.")
                console.log(res.data)
                if (res.data === true) {
                    navigate('/main');
                }
            })
        e.preventDefault()
    }

    const Submit3 = (e) => {
        const config = { "Content-Type": 'application/json' }
        form.append('email', "rudtjr91921@gmail.com")

        axios.post("/test", form, { headers: { Authorization: categorydata, } })
            .then((res) => {
                alert("test.")
                console.log(res.data)
            })
        e.preventDefault()
    }

    return (
        <div>
            <h1>회원가입</h1>
            <form onSubmit={Submit}>
                <textarea rows="1" cols="70" id="id" placeholder="id!" /><br />
                <textarea rows="1" cols="70" id="pw" placeholder="pw" /><br />
                <textarea rows="1" cols="70" id="nickname" placeholder="nickname" /><br />
                <input type="submit" value="Submit" />
            </form>
            <br /><br /><br /><br />
            <h1>로그인</h1>
            <form onSubmit={Submit2}>
                <textarea rows="1" cols="70" id="id" placeholder="id!" /><br />
                <textarea rows="1" cols="70" id="pw" placeholder="pw!" /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>

    );
}

export default Login;
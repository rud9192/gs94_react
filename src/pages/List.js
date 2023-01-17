import React, { useEffect, useState } from 'react';
import './pageCss/List.css'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/user";
import { Link } from "react-router-dom";
import { commenttgupdate } from '../store/comment';

function List() {
    const [userdata, setUserdata] = useState("");
    const [contentdata, setContentdata] = useState("");
    const category = useSelector((state) => state.category.value);
    const comment = useSelector((state) => state.comment.value);
    const dispatch = useDispatch()

    useEffect(() => {
        f1()
    }, [category.no]);
    const f1 = () => {
        try {
            axios.get("/board")
                .then((res) => {
                    setContentdata(res.data)
                    let result = []
                    for (let i = 0; i < res.data.length; i++) {
                        if (res.data[i].categoryno == category.no || category.no == 0) {
                            result.push(
                                <Link to={"/view/" + res.data[i].id}><li id="limarker">{res.data[i].boardtitle}</li></Link>
                            )
                        }
                    }
                    setUserdata(result)
                })
        } catch (error) {
            alert(error)
        }
    }
    return (
        <div>
            <div id="divli">
                <ul>
                    {userdata}
                </ul>
            </div>
        </div>
    );
}

export default List;
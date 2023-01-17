import React, {useEffect, useState} from 'react';
import axios from "axios";
import './pageCss/CommentView.css'
import {useDispatch, useSelector} from "react-redux";

function CommentView(props) {
    const [userdata, setUserdata] = useState("");
    const comment = useSelector((state) => state.comment.value);

    useEffect(() => {
        f1()
    }, [comment.commenttoggle]);
    const f1 = () => {
        try {
            axios.post("/comment/" + props.boardno)
                .then((res) => {
                    let result = []
                    for (let i = 0; i < res.data.length; i++) {
                        result.push(
                            <div id="div1">
                                <p align="right"><button id="commentdeletebtn" onClick={()=>{f2(res.data[i].id)}}>x</button></p>
                                <p align="left">{res.data[i].commentwriter}</p>
                                <p align="left">from {res.data[i].commentcontent}</p>
                            </div>
                        )
                    }
                    setUserdata(result)
                })
        } catch (error) {
            alert(error)
        }
    }
    const f2 = (i) => {
        axios.post("/comment/" + i, null, {
            params: {
                _method: 'delete'
            }
        })
            .then((res) => {
                f1();
            })
    }
    return (
        <div id="div2">
            <h5>Comment</h5>
            {userdata}
        </div>
    );
}

export default CommentView;
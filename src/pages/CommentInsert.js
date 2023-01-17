import React, {useEffect} from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {commenttgupdate} from "../store/comment";

function CommentInsert(props) {
    const navigate = useNavigate();
    const comment = useSelector((state) => state.comment.value);
    const dispatch = useDispatch()
    const Submit = (e) => {
        axios.post("/comment", null, {
            params: {
                commentwriter : document.getElementById("commentwriter").value,
                commentcontent: document.getElementById("commentcontent").value,
                boardno       : document.getElementById("boardno").value,
            }
        })
            .then((res) => {
                alert("추가되었습니다.")
                navigate('/view/:props.boardno')
                dispatch(commenttgupdate({commenttoggle: !comment.commenttoggle}))
            })
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={Submit} align="left">
                <textarea rows="5" cols="70" id="commentcontent" placeholder="Content!"/><br/>
                <textarea rows="1" cols="70" id="commentwriter" placeholder="Writer!"/><br/>
                <input type="hidden" id="boardno" value={props.boardNo}/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}

export default CommentInsert;
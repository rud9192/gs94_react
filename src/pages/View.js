import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './pageCss/View.css'
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {DeleteBoard} from "../components/DeleteBoard";
import {categorystoreupdate} from "../store/category";
import CommentView from "./CommentView";
import CommentInsert from "./CommentInsert";
import styled from "styled-components";

const Viewer = styled.div`
  width: calc(50% - 40px);
  height: 400px;
  padding: 20px;
  margin-top: 20px;
  border: 2px solid gray;
`;

const RowBox = styled.div`
  width: 100%;
  display: flex;
`;

function View() {
    const [usertitle, setUsertitle] = useState("");
    const [userdata, setUserdata] = useState("");
    const category = useSelector((state) => state.category.value);
    const no = useParams().boardno;
    const navigate = useNavigate();
    const dispatch = useDispatch()

    useEffect(() => {
        f1()
    }, [useParams().boardno]);

    const f1 = () => {
        try {
            axios.post("/board/" + no)
                .then((res) => {
                    setUsertitle(res.data[0].id)
                    let result = []
                    result.push(
                        res.data[0].boardcontent
                    )
                    setUserdata(result)
                })
        } catch (error) {
            alert(error)
        }
    }
    const f2 = (i) => {
        DeleteBoard(i)
        navigate('/');
        dispatch(categorystoreupdate({no: 0, title: "전체 보기"}))
    }

    return (
        <div>
            <div align="left">
                <a dangerouslySetInnerHTML={{__html: userdata}}>
                </a>
                <br/><br/><br/>
            </div>
            <div>
                <CommentView boardno={no}/>
                <CommentInsert boardNo={no}/>
            </div>
        </div>
    );
}

export default View;
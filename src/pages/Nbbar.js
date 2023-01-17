import React, {useEffect, useState} from 'react';
import {categorystoreupdate} from "../store/category"
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import './pageCss/Nbbar.css'

function Nbbar(props) {
    const [categorydata, setCategorydata] = useState("");
    const category = useSelector((state) => state.category.value);
    const dispatch = useDispatch()
    useEffect(() => {
        f1()
    }, [category.categorytoggle])
    const selectall = () => {
        dispatch(categorystoreupdate({no: 0, title: "전체 보기"}))
    }
    const f0 = (i, title) => {
        dispatch(categorystoreupdate({no: i, title: title, listtoggle: !category.listtoggle}))
    }
    const f1 = () => {
        axios.get("/category")
            .then((res) => {
                console.log(res.data)
                let result = []
                for (let i = 0; i < res.data.length; i++) {
                    result.push(
                        <button id="test_btn1" onClick={() => {
                            f0(res.data[i].id, res.data[i].categoryname)
                        }}>{res.data[i].categoryname}</button>,
                        <button id="test_btn2" onClick={() => {
                            f2(res.data[i].id)
                        }}>X</button>
                    )
                }
                setCategorydata(result)
            })
    }
    const Submit = (e) => {
        axios.post("/category", null, {
            params: {
                categoryname: document.getElementById("input1").value
            }
        }).then((res) => {
            dispatch(categorystoreupdate({categorytoggle: !category.categorytoggle}))
        })
        e.preventDefault()
    }
    const f2 = (i) => {
        axios.post("/category/" + i, null, {
            params: {
                _method: 'delete'
            }
        })
            .then((res) => {
                dispatch(categorystoreupdate({categorytoggle: !category.categorytoggle}))
            })
    }
    return (
        <div>
            <form onSubmit={Submit}>
                <input id="input1" type="text" name="inputcategoryName" placeholder="입력해주세요!"/>
                <input id="input2" type="submit" value="Submit"/>
            </form>
            <br />
            <div id="btn_group">
                <button id="test_btn3" onClick={() => {
                    selectall()
                }}>전체보기
                </button>
                {categorydata}
            </div>
        </div>

    );
}

export default Nbbar;
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {convertToRaw, EditorState} from "draft-js";
import draftjsToHtml from "draftjs-to-html";
import {Editor} from "react-draft-wysiwyg";


function Insert() {
    const [categorydata, setCategorydata] = useState("");
    const category = useSelector((state) => state.category.value);
    const navigate = useNavigate();
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [htmlString, setHtmlString] = useState("");
    const form = new FormData()

    useEffect(() => {
        f1()
    }, [])
    const updateTextDescription = async (state) => {
        await setEditorState(state);
        const html = draftjsToHtml(convertToRaw(editorState.getCurrentContent()));
        setHtmlString(html);
        console.log(htmlString)
    };
    const Submit = (e) => {
        form.append('boardtitle', document.getElementById("inputEmail").value)
        form.append('boardcontent', htmlString)
        form.append('Categoryno', document.getElementById("inputcategory").value)

        if (document.getElementById("inputcategory").value == 0) {
            alert("카테고리 선택해 주세요")
            e.preventDefault()
        } else {
            axios.post("/board", form)
                .then((res) => {
                    alert("추가되었습니다.")
                    navigate('/')
                })
        }
        e.preventDefault()
    }
    const uploadCallback = () => {
        console.log("이미지 업로드");
    };
    const f1 = () => {
        axios.get("/category")
            .then((res) => {
                let result = []
                for (let i = 0; i < res.data.length; i++) {
                    result.push(
                        <option value={res.data[i].id}>{res.data[i].categoryname}</option>
                    )
                }
                setCategorydata(result)
            })
    }
    return (
        <div>
            <form onSubmit={Submit}>
                {/*<textarea rows="40" cols="70" id="inputPassward" placeholder="Content!"/><br/>*/}
                <Editor
                    placeholder="게시글을 작성해주세요"
                    editorState={editorState}
                    onEditorStateChange={updateTextDescription}
                    toolbar={{
                        image: {uploadCallback: uploadCallback},
                    }}
                    localization={{locale: "ko"}}
                    editorStyle={{
                        height : "400px",
                        width  : "100%",
                        border : "3px solid lightgray",
                        padding: "20px",
                    }}
                />
                <textarea rows="1" cols="70" id="inputEmail" placeholder="Title!"/><br/>
                <select id="inputcategory">
                    {categorydata}
                </select>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default Insert;
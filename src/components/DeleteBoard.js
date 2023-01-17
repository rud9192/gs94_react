import axios from "axios";
import {useNavigate} from "react-router-dom";

export function DeleteBoard(i) {
    axios.post("/board/" + i, null, {
        params: {
            _method: 'delete'
        }
    })
        .then((res) => {
            alert("삭제되었습니다.")
        })
}
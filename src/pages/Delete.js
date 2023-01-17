import React, {useEffect, useState} from 'react';
import axios from "axios";

function Delete() {
    const [userdata, setUserdata] = useState("");
    useEffect(() => {
        f1()
    }, []);
    const f1 = () => {
        try {
            axios.get("/board")
                .then((res) => {
                    let result = []
                    for (let i = 0; i < res.data.length; i++) {
                        result.push(
                            <tr key={i}>
                                <td><a href={"/view/" + res.data[i].id}>{res.data[i].boardtitle}</a></td>
                                <td onClick={()=>{f2(res.data[i].id)}}>삭제</td>
                            </tr>
                        )
                    }
                    setUserdata(result)
                })
        } catch (error) {
            alert(error)
        }
    }
    const f2 = (i) => {
        axios.post("/board/" + i, null, {
            params: {
                _method: 'delete'
            }
        })
            .then((res) => {
                f1();
            })
    }
    return (
        <div>
            <table id="table">
                <tr>
                    <td>Title</td>
                    <td>Delete</td>
                </tr>
                {userdata}
            </table>
        </div>
    );
}

export default Delete;
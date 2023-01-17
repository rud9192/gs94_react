import React from 'react';
import {useDispatch} from "react-redux";
import {login} from "./store/user";

function SelectTopic(num) {
    const dispatch = useDispatch()
    return (
        dispatch(login({age : num}))
    );
}

export default SelectTopic;
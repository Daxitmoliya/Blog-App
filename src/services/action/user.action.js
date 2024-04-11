import axios from "axios"
import { CREATEUSERREJ, CREATEUSERREQ, DELETEUSERREJ, DELETEUSERREQ, GETUSERREJ, GETUSERREQ, GETUSERRES, SINGLEUSERREJ, SINGLEUSERREQ, SINGLEUSERRES, UPDATEUSERREJ, UPDATEUSERREQ, UPDATEUSERRES } from "../const"

const getUserReq = () => {
    return {
        type: GETUSERREQ
    }
}

const getUserRes = (data) => {
    return {
        type: GETUSERRES,
        payload: data
    }
}

const getUserRej = () => {
    return {
        type: GETUSERREJ,
    }
}

export const getUser = () => {
    return dispatch => {
        dispatch(getUserReq());
        axios.get(`http://localhost:3000/users`).then((res) => {
            // console.log(res.data);
            dispatch(getUserRes(res.data))
        }).catch((err) => {
            dispatch(getUserRej(err));
        })
    }
}

const createUserReq = () => {
    return {
        type: CREATEUSERREQ
    }
}

const createUserRes = (data) => {
    return {
        type: CREATEUSERREQ,
        payload: data
    }
}

const createUserRej = () => {
    return {
        type: CREATEUSERREJ,
    }
}

export const createUser = (data) => {
    return dispatch => {
        dispatch(createUserReq());
        axios.post(`http://localhost:3000/users`, data).then((res) => {
            dispatch(getUser());
        }).catch((err) => {
            dispatch(createUserRej(err));
        })
    }
}

const singleUserReq = () => {
    return {
        type: SINGLEUSERREQ
    }
}

const singleUserRes = (data) => {
    return {
        type: SINGLEUSERRES,
        payload: data
    }
}

const singleUserRej = () => {
    return {
        type: SINGLEUSERREJ,
    }
}

export const singleUser = (id, data) => {
    return async dispatch => {
        dispatch(singleUserReq());
        await axios.get(`http://localhost:3000/users/${id}`, data).then((res) => {
            // console.log(res.data);
            dispatch(singleUserRes(res.data))
        }).catch((err) => {
            dispatch(singleUserRej(err));
        })
    }
}

const updateUserReq = () => {
    return {
        type: UPDATEUSERREQ
    }
}

const updateUserRes = (data) => {
    return {
        type: UPDATEUSERRES,
        payload: data
    }
}

const updateUserRej = () => {
    return {
        type: UPDATEUSERREJ,
    }
}

export const updateUser = (id, data) => {
    return async dispatch => {
        dispatch(updateUserReq());
        await axios.put(`http://localhost:3000/users/${id}`, data).then((res) => {
            // console.log(res.data);
            dispatch(updateUserRes(res.data))
        }).catch((err) => {
            dispatch(updateUserRej(err));
        })
    }
}

const deleteUserReq = () => {
    return {
        type: DELETEUSERREQ
    }
}

const deleteUserRes = (id) => {
    return {
        type: DELETEUSERREQ,
        payload: id
    }
}

const deleteUserRej = () => {
    return {
        type: DELETEUSERREJ,
    }
}

export const deleteUser = (id) => {
    return async dispatch => {
        dispatch(deleteUserReq());
        await axios.delete(`http://localhost:3000/users/${id}`).then((res) => {
            dispatch(deleteUserRes(id))
        }).catch((err) => {
            dispatch(deleteUserRej(err));
        })
    }
}

import toast from "../store/ToastStore";
import { observer } from "mobx-react-lite";
import React, { useEffect, useRef, useState } from "react";
import s from "../styles/Toast.module.css";

const Toast = observer(() => {
    const [message, setMessage] = useState('');
    const [timeoutID, setTimeoutID] = useState(undefined)
    const toastRef = useRef(null);

    const clear = () => {
        clearTimeout(timeoutID);
    }

    const showToast = (addClass, customMessage) => {
        if (typeof timeoutID === "number") {
            clear();
        }
        setTimeoutID(undefined)
        setMessage(customMessage)
        toastRef.current.classList.add(s.show, addClass);
        setTimeoutID(() => setTimeout(() => {
            toastRef.current.classList.remove(s.show);
        }, 3000))
    }

    useEffect(() => {
        if (toast.toastType !== "") {
            toast.toastType === "success" ? showToast(s.success, toast.message) : toast.toastType === "error" ? showToast(s.error, toast.message) : showToast(s.info, toast.message)
        }

    }, [toast.triggered])

    return (
        <div className={s.toast} ref={toastRef}>
            <div className={s.toast_message}>
                {message}
            </div>
        </div>
    );
});

export default Toast;
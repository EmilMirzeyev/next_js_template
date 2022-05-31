
import toast from "../store/ToastStore";
import { observer } from "mobx-react-lite";
import React, { useEffect, useRef, useState } from "react";
import s from "../styles/Toast.module.css";

const Toast = observer(() => {

    return (
        <div className={s.toast}>
            {toast.toastList.map(item => (
                <div className={s.toast_message + " " + (item.type == "success" ? s.success : item.type == "error" ? s.error : s.info)} key={item.id}>
                    <p>{item.message}</p>
                </div>
            ))}
        </div>
    );
});

export default Toast;
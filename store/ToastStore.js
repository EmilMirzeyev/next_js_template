import { makeAutoObservable } from "mobx"

class ToastStore {
    toastType = ''
    triggered = false
    message = ''
    toastList = []

    constructor() {
        makeAutoObservable(this)
    }

    show(message, type) {
        const d = Date.now()
        this.toastList.push({
            id: d,
            message: message,
            type: type
        })
        setTimeout(() => {
            for (let i = 0; i < this.toastList.length; i++) {
                if (this.toastList[i].id == d) {
                    this.toastList.splice(i, 1)
                }

            }
        }, 3000)
    }

    successToast(message) {
        this.show(message, "success")

    }

    errorToast(message) {
        this.show(message, "error")

    }

    infoToast(message) {
        this.show(message, "info")

    }
}

export default new ToastStore()
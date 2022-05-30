import { makeAutoObservable } from "mobx"

class ToastStore {
    toastType = ''
    triggered = false
    message = ''

    constructor() {
        makeAutoObservable(this)
    }

    successToast(message) {
        this.toastType = 'success'
        this.triggered = !this.triggered        
        this.message = message
    }

    errorToast(message) {
        this.toastType = 'error'
        this.triggered = !this.triggered        
        this.message = message
        
    }

    infoToast(message) {
        this.toastType = 'info'
        this.triggered = !this.triggered        
        this.message = message
        
    }
}

export default new ToastStore()
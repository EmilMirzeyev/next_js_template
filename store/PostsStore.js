import { makeAutoObservable } from "mobx"

class Timer {
    posts = []

    constructor() {
        makeAutoObservable(this)
    }

    setPosts(data) {
        this.posts = data;
    }
}

export default new Timer()
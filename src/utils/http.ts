import axios, { AxiosRequestConfig } from 'axios'

interface IHttp {
    get<T>():Promise<T>
    upload<T>():Promise<T>
    download<T>():Promise<T>
    post<T>():Promise<T>
    put<T>():Promise<T>
    delete<T>():Promise<T>
}

const http:IHttp = {
    get() {
        return new Promise((resolve,reject) => {

        })
    },
    upload() {
        return new Promise((resolve,reject) => {

        })
    },
    download() {
        return new Promise((resolve,reject) => {

        })
    },
    post() {
        return new Promise((resolve,reject) => {

        })
    },
    put() {
        return new Promise((resolve,reject) => {

        })
    },
    delete() {
        return new Promise((resolve,reject) => {

        })
    }
}

export default http
import { defineStore } from 'pinia'
import axios from 'axios'

export const usestudentStore = defineStore("student", {
    state: () => {
        return {
            dataStudent: [],
        }
    },
    getters: {
        getStudent(state) {
            // console.log(state.dataStudent);
            return state.dataStudent
        }
    },
    actions: {
        async fetchStudent() {
            try {
                const data = await axios.get('http://localhost:8000/api/students')
                // console.log(data.data.students);
                this.dataStudent = data.data.students
            }
            catch (error) {
                alert(error)
                console.log(error);
            }
        }
    },
})

export function createStudentStore() {
    return usestudentStore()
}
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>Made By Getter</h1>
    <div v-for="student in getStudent" :key="student.id">
      {{ student.name }} || {{ student.course }} || {{ student.email }} || {{ student.phone }}
    </div>
    <h1>Made By Action</h1>
    <div v-for="student in dataStudent" :key="student.id">
      {{ student.name }} || {{ student.course }} || {{ student.email }} || {{ student.phone }}
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import { usestudentStore, createStudentStore } from '../store/studentStore'

export default {
  setup() {
    const store = usestudentStore()
    const msg = ref('Fetching Data Using Axios & Pinia')
    const getStudent = computed(() => {
      return store.getStudent
    })
    const dataStudent = computed(() => {
      return store.dataStudent
    })
    onMounted(() => {
      store.fetchStudent()
    })

    return {
      msg,
      getStudent,
      dataStudent
    }
  },
  created() {
    createStudentStore() // Memasang Pinia pada aplikasi
  }
}
</script>

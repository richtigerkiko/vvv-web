<template>
    <div id="Round">
        <Clock :canvasID="index" :exercise="currentExercise" @countdownReady="changeExerciseClock" :key="currentExercise.id"/>
        <h3>{{ currentExercise.displayName }}</h3>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Clock from '@/components/training/Clock.vue'
import { trainingStore } from '@/store/trainingStore'
import { Exercise, Training } from '@/models/index'
import { ExercisePause } from '@/data'

export default defineComponent({
    props: {
        training: {
            type: Object as PropType<Training>,
            required: true
        }
    },
    data() {
        return {
            currentExercise: {} as Exercise,
            isPause: true,
            currentExerciseIndex: 0
        }
    },
    methods: {
        changeExerciseClock(){
            if(this.isPause){
                this.isPause = false
                this.currentExercise = new ExercisePause(this.training.pauseDuration!)
            }
            else{
                if(this.currentExerciseIndex < this.training.exercises!.length){
                    this.isPause = true
                    this.currentExercise = this.training.exercises![this.currentExerciseIndex]!
                    this.currentExerciseIndex++ 
                }
                else{
                    this.$emit('finishedRound')
                }
            }
        }
    },
    components:{
        Clock
    },
    created(){
        this.changeExerciseClock()
    }
})
</script>
<template>
    <div id="Round">
        <h3>{{ currentRound }}</h3>
        <Clock :canvasID="index" :exercise="currentExercise" @countdownReady="changeExerciseClock" :key="currentExercise.id"/>
        <p>Current</p>
        <h3>{{ currentExercise.displayName }}</h3>
        <p>Next</p>
        <h3>{{ nextExercise.displayName }}</h3>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Clock from '@/components/training/Clock.vue'
import { Exercise, Training } from '@/models/index'
import { ExercisePause } from '@/data'

import  horn01URL from '@/assets/audio/horns/horn01.mp3'
import  pause01URL from '@/assets/audio/pause/pause01.mp3'

export default defineComponent({
    props: {
        training: {
            type: Object as PropType<Training>,
            required: true
        },
        currentRound: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            currentExercise: {} as Exercise,
            isPause: true,
            currentExerciseIndex: 0,
            nextExercise: {} as Exercise,
            horn01Sound: new Audio(horn01URL),
            pause01Sound: new Audio(pause01URL)
        }
    },
    methods: {
        changeExerciseClock(){
            if(this.isPause && this.currentExerciseIndex < this.training.exercises!.length){
                this.goNextSet()
            }
            else{
                if(this.currentExerciseIndex < this.training.exercises!.length){
                    this.goPause()
                }
                else{
                    this.goFinish()
                }
            }
        },
        goPause(){
            this.horn01Sound.play()
            this.isPause = true
            this.currentExercise = this.training.exercises![this.currentExerciseIndex]!
            this.currentExerciseIndex++ 
            if(this.currentExerciseIndex < this.training.exercises!.length)
            this.nextExercise = this.training.exercises![this.currentExerciseIndex]!
        },
        goNextSet() {
                this.pause01Sound.play()
                this.isPause = false
                this.currentExercise = new ExercisePause(this.training.pauseDuration!)
                this.nextExercise = this.training.exercises![this.currentExerciseIndex]!
        },
        goFinish() {
            this.$emit('finishedRound')
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
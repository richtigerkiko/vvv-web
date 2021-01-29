<template>
    <Round :key="currentRound" @finishedRound="changeRound" :training="training"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Round from '@/components/training/Round.vue'
import { trainingStore } from '@/store/trainingStore'

export default defineComponent({
    setup(){
        return {
            training: trainingStore.getState()
        }
    },
    data() {
        return {
            currentRound: 1,
            isFinished: false
        }
    },
    methods: {
        changeRound(){
            if(!this.isFinished){
                return;
            }
            else{
                if(this.currentRound <= this.training.rounds!){
                    this.currentRound++
                }
                else{
                    this.isFinished = true
                    return
                }
            }
        }
    },
    components:{
        Round
    }
})
</script>

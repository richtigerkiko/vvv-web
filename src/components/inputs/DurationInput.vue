<template>
    <div class="durationInput">
        <input type="number" min="0" max="59" step="1" v-model="minutes" @change="emitValue"><span>m</span>
        <input type="number" min="1" max="59" step="1" v-model="seconds" @change="emitValue"><span>s</span>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        defaultDuration: {
            type: String,
            default: "00:00:00"
        }
    },
    data() {
        return {
            minutes: 0,
            seconds: 1
        }
    },
    methods: {
        emitValue() {
            let returnString = ""
            if(this.validate59(this.minutes)){
                returnString += "00:" + this.minutes.toLocaleString('en-US', {
                    minimumIntegerDigits: 2,
                    useGrouping: false
                })
            }
            else{
                this.minutes = 0
                returnString += "00:00"
            }

            if(this.validate59(this.seconds)){
                returnString += ":" + this.seconds.toLocaleString('en-US', {
                    minimumIntegerDigits: 2,
                    useGrouping: false
                })
            }
            else{
                this.seconds = 0
                returnString += ":00"
            }
            console.log(returnString)
            this.$emit('input-duration', returnString)
        },
        validate59(validationValue: number) {
            if(validationValue < 0 || validationValue > 59) return false
            else return true
        }
    },
    mounted() {
        const durationSplit = this.defaultDuration.split(":")
        this.minutes = Number.parseInt(durationSplit[1])
        this.seconds = Number.parseInt(durationSplit[2])
    }
})
</script>

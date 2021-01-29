<template>
    <form v-on:submit.prevent id="trainingForm">
      <div class="baseSettings">
        <div class="trainingtitleinput">
          <label for="titleInput">titel:</label>
          <input type="text" id="titleInput" v-model="training.displayName" />
        </div>
        <div class="roundsandpause">
          <div class="pauseinput">
            <label for="pauseinput">pause:</label>
            <input type="time" id="pauseinput" v-model="training.pauseDuration"  step="1" min="00:00:00" max="00:12:00"/>
          </div>
          <div class="roundinput">
            <label for="roundinput">rounds:</label>
            <input
              type="number"
              min="1"
              max="12"
              id="roundinput"
              v-model="training.rounds"
            />
          </div>
        </div>
      </div>
      <div class="exercises">
        <h3>sets</h3>
        <div
          v-for="(exercise, index) in training.exercises"
          v-bind:key="exercise.id"
          class="excersise"
        >
          <span> {{ index + 1 }} . </span
          ><input
            type="text"
            name="exerciseName"
            placeholder="Name"
            v-model="exercise.displayName"
          />
          <input type="time" v-model="exercise.exerciseDuration" step="1" min="00:00:00" max="00:12:00"/>
          <button @click="deleteExercise(exercise.id)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
              />
            </svg>
          </button>
        </div>
        <div class="addexcersise">
          <button @click="addExercise">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus-circle-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="gosave">
          <button class="goButton" @click="goToRound">
              Go
          </button>
            <button class="saveButton" @click="saveTraining">
              Save
          </button>
      </div>
    </form>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Exercise, Training, ExerciseState } from "@/models/index"
import { trainingStore } from "@/store/trainingStore"
import { v4 as uuid } from "@lukeed/uuid"
import { createTraining } from '@/graphql/mutations'
import { API } from "aws-amplify"

export default defineComponent({
    setup(){
        return {
            training: trainingStore.getState()
        }
    },
  methods: {
    addExercise() {
        let defaultDuration = "00:30"
     if(this.training.exercises![this.training.exercises!.length - 1]){
         defaultDuration = this.training.exercises![this.training.exercises!.length! - 1]!.exerciseDuration as string
     }
      this.training.exercises!.push({
        id: uuid(),
        displayName: "laufen",
        exerciseDuration: defaultDuration,
        state: ExerciseState.NOTSTARTET
      });
    },
    deleteExercise(id: string) {
      const indexOfItem = this.training.exercises!.findIndex(x => x!.id === id)
      if (indexOfItem !== -1) {
        this.training.exercises!.splice(indexOfItem, 1)
      }
    },
    goToRound(){
      this.$router.push({name: "round"})
    },
    saveTraining(){
      return null
    }
  },
  mounted() {
    this.addExercise()
  }
})
</script>
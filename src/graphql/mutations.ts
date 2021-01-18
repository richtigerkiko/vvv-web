/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTraining = /* GraphQL */ `
  mutation CreateTraining(
    $input: CreateTrainingInput!
    $condition: ModelTrainingConditionInput
  ) {
    createTraining(input: $input, condition: $condition) {
      id
      start
      displayName
      rounds
      pauseDuration
      totalDuration
      exercises {
        items {
          id
          displayName
          iconUrl
          exerciseDuration
          state
          trainingID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTraining = /* GraphQL */ `
  mutation UpdateTraining(
    $input: UpdateTrainingInput!
    $condition: ModelTrainingConditionInput
  ) {
    updateTraining(input: $input, condition: $condition) {
      id
      start
      displayName
      rounds
      pauseDuration
      totalDuration
      exercises {
        items {
          id
          displayName
          iconUrl
          exerciseDuration
          state
          trainingID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTraining = /* GraphQL */ `
  mutation DeleteTraining(
    $input: DeleteTrainingInput!
    $condition: ModelTrainingConditionInput
  ) {
    deleteTraining(input: $input, condition: $condition) {
      id
      start
      displayName
      rounds
      pauseDuration
      totalDuration
      exercises {
        items {
          id
          displayName
          iconUrl
          exerciseDuration
          state
          trainingID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createExercise = /* GraphQL */ `
  mutation CreateExercise(
    $input: CreateExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    createExercise(input: $input, condition: $condition) {
      id
      displayName
      iconUrl
      exerciseDuration
      state
      trainingID
      training {
        id
        start
        displayName
        rounds
        pauseDuration
        totalDuration
        exercises {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateExercise = /* GraphQL */ `
  mutation UpdateExercise(
    $input: UpdateExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    updateExercise(input: $input, condition: $condition) {
      id
      displayName
      iconUrl
      exerciseDuration
      state
      trainingID
      training {
        id
        start
        displayName
        rounds
        pauseDuration
        totalDuration
        exercises {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteExercise = /* GraphQL */ `
  mutation DeleteExercise(
    $input: DeleteExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    deleteExercise(input: $input, condition: $condition) {
      id
      displayName
      iconUrl
      exerciseDuration
      state
      trainingID
      training {
        id
        start
        displayName
        rounds
        pauseDuration
        totalDuration
        exercises {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;

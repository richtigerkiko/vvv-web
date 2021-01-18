/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTraining = /* GraphQL */ `
  query GetTraining($id: ID!) {
    getTraining(id: $id) {
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
export const listTrainings = /* GraphQL */ `
  query ListTrainings(
    $filter: ModelTrainingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrainings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getExercise = /* GraphQL */ `
  query GetExercise($id: ID!) {
    getExercise(id: $id) {
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
export const listExercises = /* GraphQL */ `
  query ListExercises(
    $filter: ModelExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

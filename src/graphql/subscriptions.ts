/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTraining = /* GraphQL */ `
  subscription OnCreateTraining {
    onCreateTraining {
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
export const onUpdateTraining = /* GraphQL */ `
  subscription OnUpdateTraining {
    onUpdateTraining {
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
export const onDeleteTraining = /* GraphQL */ `
  subscription OnDeleteTraining {
    onDeleteTraining {
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
export const onCreateExercise = /* GraphQL */ `
  subscription OnCreateExercise {
    onCreateExercise {
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
export const onUpdateExercise = /* GraphQL */ `
  subscription OnUpdateExercise {
    onUpdateExercise {
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
export const onDeleteExercise = /* GraphQL */ `
  subscription OnDeleteExercise {
    onDeleteExercise {
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

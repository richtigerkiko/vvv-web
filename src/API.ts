/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTrainingInput = {
  id?: string | null,
  start?: string | null,
  displayName: string,
  rounds?: number | null,
  pauseDuration?: string | null,
  totalDuration?: string | null,
};

export type ModelTrainingConditionInput = {
  start?: ModelStringInput | null,
  displayName?: ModelStringInput | null,
  rounds?: ModelIntInput | null,
  pauseDuration?: ModelStringInput | null,
  totalDuration?: ModelStringInput | null,
  and?: Array< ModelTrainingConditionInput | null > | null,
  or?: Array< ModelTrainingConditionInput | null > | null,
  not?: ModelTrainingConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ExerciseState {
  NOTSTARTET = "NOTSTARTET",
  STARTED = "STARTED",
  PAUSED = "PAUSED",
  ENDED = "ENDED",
}


export type UpdateTrainingInput = {
  id: string,
  start?: string | null,
  displayName?: string | null,
  rounds?: number | null,
  pauseDuration?: string | null,
  totalDuration?: string | null,
};

export type DeleteTrainingInput = {
  id?: string | null,
};

export type CreateExerciseInput = {
  id?: string | null,
  displayName: string,
  iconUrl?: string | null,
  exerciseDuration?: string | null,
  state?: ExerciseState | null,
  trainingID: string,
};

export type ModelExerciseConditionInput = {
  displayName?: ModelStringInput | null,
  iconUrl?: ModelStringInput | null,
  exerciseDuration?: ModelStringInput | null,
  state?: ModelExerciseStateInput | null,
  trainingID?: ModelIDInput | null,
  and?: Array< ModelExerciseConditionInput | null > | null,
  or?: Array< ModelExerciseConditionInput | null > | null,
  not?: ModelExerciseConditionInput | null,
};

export type ModelExerciseStateInput = {
  eq?: ExerciseState | null,
  ne?: ExerciseState | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateExerciseInput = {
  id: string,
  displayName?: string | null,
  iconUrl?: string | null,
  exerciseDuration?: string | null,
  state?: ExerciseState | null,
  trainingID?: string | null,
};

export type DeleteExerciseInput = {
  id?: string | null,
};

export type ModelTrainingFilterInput = {
  id?: ModelIDInput | null,
  start?: ModelStringInput | null,
  displayName?: ModelStringInput | null,
  rounds?: ModelIntInput | null,
  pauseDuration?: ModelStringInput | null,
  totalDuration?: ModelStringInput | null,
  and?: Array< ModelTrainingFilterInput | null > | null,
  or?: Array< ModelTrainingFilterInput | null > | null,
  not?: ModelTrainingFilterInput | null,
};

export type ModelExerciseFilterInput = {
  id?: ModelIDInput | null,
  displayName?: ModelStringInput | null,
  iconUrl?: ModelStringInput | null,
  exerciseDuration?: ModelStringInput | null,
  state?: ModelExerciseStateInput | null,
  trainingID?: ModelIDInput | null,
  and?: Array< ModelExerciseFilterInput | null > | null,
  or?: Array< ModelExerciseFilterInput | null > | null,
  not?: ModelExerciseFilterInput | null,
};

export type CreateTrainingMutationVariables = {
  input: CreateTrainingInput,
  condition?: ModelTrainingConditionInput | null,
};

export type CreateTrainingMutation = {
  createTraining:  {
    __typename: "Training",
    id: string,
    start: string | null,
    displayName: string,
    rounds: number | null,
    pauseDuration: string | null,
    totalDuration: string | null,
    exercises:  {
      __typename: "ModelExerciseConnection",
      items:  Array< {
        __typename: "Exercise",
        id: string,
        displayName: string,
        iconUrl: string | null,
        exerciseDuration: string | null,
        state: ExerciseState | null,
        trainingID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTrainingMutationVariables = {
  input: UpdateTrainingInput,
  condition?: ModelTrainingConditionInput | null,
};

export type UpdateTrainingMutation = {
  updateTraining:  {
    __typename: "Training",
    id: string,
    start: string | null,
    displayName: string,
    rounds: number | null,
    pauseDuration: string | null,
    totalDuration: string | null,
    exercises:  {
      __typename: "ModelExerciseConnection",
      items:  Array< {
        __typename: "Exercise",
        id: string,
        displayName: string,
        iconUrl: string | null,
        exerciseDuration: string | null,
        state: ExerciseState | null,
        trainingID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTrainingMutationVariables = {
  input: DeleteTrainingInput,
  condition?: ModelTrainingConditionInput | null,
};

export type DeleteTrainingMutation = {
  deleteTraining:  {
    __typename: "Training",
    id: string,
    start: string | null,
    displayName: string,
    rounds: number | null,
    pauseDuration: string | null,
    totalDuration: string | null,
    exercises:  {
      __typename: "ModelExerciseConnection",
      items:  Array< {
        __typename: "Exercise",
        id: string,
        displayName: string,
        iconUrl: string | null,
        exerciseDuration: string | null,
        state: ExerciseState | null,
        trainingID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateExerciseMutationVariables = {
  input: CreateExerciseInput,
  condition?: ModelExerciseConditionInput | null,
};

export type CreateExerciseMutation = {
  createExercise:  {
    __typename: "Exercise",
    id: string,
    displayName: string,
    iconUrl: string | null,
    exerciseDuration: string | null,
    state: ExerciseState | null,
    trainingID: string,
    training:  {
      __typename: "Training",
      id: string,
      start: string | null,
      displayName: string,
      rounds: number | null,
      pauseDuration: string | null,
      totalDuration: string | null,
      exercises:  {
        __typename: "ModelExerciseConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateExerciseMutationVariables = {
  input: UpdateExerciseInput,
  condition?: ModelExerciseConditionInput | null,
};

export type UpdateExerciseMutation = {
  updateExercise:  {
    __typename: "Exercise",
    id: string,
    displayName: string,
    iconUrl: string | null,
    exerciseDuration: string | null,
    state: ExerciseState | null,
    trainingID: string,
    training:  {
      __typename: "Training",
      id: string,
      start: string | null,
      displayName: string,
      rounds: number | null,
      pauseDuration: string | null,
      totalDuration: string | null,
      exercises:  {
        __typename: "ModelExerciseConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteExerciseMutationVariables = {
  input: DeleteExerciseInput,
  condition?: ModelExerciseConditionInput | null,
};

export type DeleteExerciseMutation = {
  deleteExercise:  {
    __typename: "Exercise",
    id: string,
    displayName: string,
    iconUrl: string | null,
    exerciseDuration: string | null,
    state: ExerciseState | null,
    trainingID: string,
    training:  {
      __typename: "Training",
      id: string,
      start: string | null,
      displayName: string,
      rounds: number | null,
      pauseDuration: string | null,
      totalDuration: string | null,
      exercises:  {
        __typename: "ModelExerciseConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTrainingQueryVariables = {
  id: string,
};

export type GetTrainingQuery = {
  getTraining:  {
    __typename: "Training",
    id: string,
    start: string | null,
    displayName: string,
    rounds: number | null,
    pauseDuration: string | null,
    totalDuration: string | null,
    exercises:  {
      __typename: "ModelExerciseConnection",
      items:  Array< {
        __typename: "Exercise",
        id: string,
        displayName: string,
        iconUrl: string | null,
        exerciseDuration: string | null,
        state: ExerciseState | null,
        trainingID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTrainingsQueryVariables = {
  filter?: ModelTrainingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTrainingsQuery = {
  listTrainings:  {
    __typename: "ModelTrainingConnection",
    items:  Array< {
      __typename: "Training",
      id: string,
      start: string | null,
      displayName: string,
      rounds: number | null,
      pauseDuration: string | null,
      totalDuration: string | null,
      exercises:  {
        __typename: "ModelExerciseConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetExerciseQueryVariables = {
  id: string,
};

export type GetExerciseQuery = {
  getExercise:  {
    __typename: "Exercise",
    id: string,
    displayName: string,
    iconUrl: string | null,
    exerciseDuration: string | null,
    state: ExerciseState | null,
    trainingID: string,
    training:  {
      __typename: "Training",
      id: string,
      start: string | null,
      displayName: string,
      rounds: number | null,
      pauseDuration: string | null,
      totalDuration: string | null,
      exercises:  {
        __typename: "ModelExerciseConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListExercisesQueryVariables = {
  filter?: ModelExerciseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExercisesQuery = {
  listExercises:  {
    __typename: "ModelExerciseConnection",
    items:  Array< {
      __typename: "Exercise",
      id: string,
      displayName: string,
      iconUrl: string | null,
      exerciseDuration: string | null,
      state: ExerciseState | null,
      trainingID: string,
      training:  {
        __typename: "Training",
        id: string,
        start: string | null,
        displayName: string,
        rounds: number | null,
        pauseDuration: string | null,
        totalDuration: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateTrainingSubscription = {
  onCreateTraining:  {
    __typename: "Training",
    id: string,
    start: string | null,
    displayName: string,
    rounds: number | null,
    pauseDuration: string | null,
    totalDuration: string | null,
    exercises:  {
      __typename: "ModelExerciseConnection",
      items:  Array< {
        __typename: "Exercise",
        id: string,
        displayName: string,
        iconUrl: string | null,
        exerciseDuration: string | null,
        state: ExerciseState | null,
        trainingID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTrainingSubscription = {
  onUpdateTraining:  {
    __typename: "Training",
    id: string,
    start: string | null,
    displayName: string,
    rounds: number | null,
    pauseDuration: string | null,
    totalDuration: string | null,
    exercises:  {
      __typename: "ModelExerciseConnection",
      items:  Array< {
        __typename: "Exercise",
        id: string,
        displayName: string,
        iconUrl: string | null,
        exerciseDuration: string | null,
        state: ExerciseState | null,
        trainingID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTrainingSubscription = {
  onDeleteTraining:  {
    __typename: "Training",
    id: string,
    start: string | null,
    displayName: string,
    rounds: number | null,
    pauseDuration: string | null,
    totalDuration: string | null,
    exercises:  {
      __typename: "ModelExerciseConnection",
      items:  Array< {
        __typename: "Exercise",
        id: string,
        displayName: string,
        iconUrl: string | null,
        exerciseDuration: string | null,
        state: ExerciseState | null,
        trainingID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateExerciseSubscription = {
  onCreateExercise:  {
    __typename: "Exercise",
    id: string,
    displayName: string,
    iconUrl: string | null,
    exerciseDuration: string | null,
    state: ExerciseState | null,
    trainingID: string,
    training:  {
      __typename: "Training",
      id: string,
      start: string | null,
      displayName: string,
      rounds: number | null,
      pauseDuration: string | null,
      totalDuration: string | null,
      exercises:  {
        __typename: "ModelExerciseConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateExerciseSubscription = {
  onUpdateExercise:  {
    __typename: "Exercise",
    id: string,
    displayName: string,
    iconUrl: string | null,
    exerciseDuration: string | null,
    state: ExerciseState | null,
    trainingID: string,
    training:  {
      __typename: "Training",
      id: string,
      start: string | null,
      displayName: string,
      rounds: number | null,
      pauseDuration: string | null,
      totalDuration: string | null,
      exercises:  {
        __typename: "ModelExerciseConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteExerciseSubscription = {
  onDeleteExercise:  {
    __typename: "Exercise",
    id: string,
    displayName: string,
    iconUrl: string | null,
    exerciseDuration: string | null,
    state: ExerciseState | null,
    trainingID: string,
    training:  {
      __typename: "Training",
      id: string,
      start: string | null,
      displayName: string,
      rounds: number | null,
      pauseDuration: string | null,
      totalDuration: string | null,
      exercises:  {
        __typename: "ModelExerciseConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

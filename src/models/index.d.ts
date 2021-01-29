import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum ExerciseState {
  NOTSTARTET = "NOTSTARTET",
  STARTED = "STARTED",
  PAUSED = "PAUSED",
  ENDED = "ENDED"
}



export declare class Training {
  readonly id: string;
  readonly start?: string;
  readonly displayName: string;
  readonly rounds?: number;
  readonly pauseDuration?: string;
  readonly totalDuration?: string;
  readonly exercises?: (Exercise | null)[];
  constructor(init: ModelInit<Training>);
  static copyOf(source: Training, mutator: (draft: MutableModel<Training>) => MutableModel<Training> | void): Training;
}

export declare class Exercise {
  readonly id: string;
  readonly displayName: string;
  readonly iconUrl?: string;
  readonly exerciseDuration: string;
  readonly state?: ExerciseState | keyof typeof ExerciseState;
  readonly training?: Training;
  constructor(init: ModelInit<Exercise>);
  static copyOf(source: Exercise, mutator: (draft: MutableModel<Exercise>) => MutableModel<Exercise> | void): Exercise;
}
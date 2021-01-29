import { Exercise, ExerciseState } from "@/models";
import { v4 as uuid } from "@lukeed/uuid";

export class ExercisePause implements Exercise {
    id: string = uuid();
    displayName = 'Pause';
    iconUrl?: string | undefined = undefined;
    exerciseDuration: string;
    state: ExerciseState = ExerciseState.NOTSTARTET;

    constructor(durationString: string){
        this.exerciseDuration = durationString
    }
}

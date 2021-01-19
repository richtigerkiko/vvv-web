// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ExerciseState = {
  "NOTSTARTET": "NOTSTARTET",
  "STARTED": "STARTED",
  "PAUSED": "PAUSED",
  "ENDED": "ENDED"
};

const { Training, Exercise } = initSchema(schema);

export {
  Training,
  Exercise,
  ExerciseState
};
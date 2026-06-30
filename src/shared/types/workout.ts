export type WorkoutType = "run" | "bike" | "strength" | "walk" | "swim";

export type Workout = {
  id: string;
  type: WorkoutType;
  title: string;
  date: string;
  duration: number;
  distance?: number;
  avgHeartRate?: number;
  avgPace?: string;
  trainingLoad?: number;
};

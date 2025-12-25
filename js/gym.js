function saveWorkout() {
  let id = "gym-" + Date.now();
  let workout = {
    id,
    day: day.value,
    exercise: exercise.value,
    sets: sets.value,
    reps: reps.value,
    weight: weight.value,
    date: new Date().toLocaleDateString()
  };

  localStorage.setItem(id, JSON.stringify(workout));
  msg.innerText = "✅ Workout saved";
}

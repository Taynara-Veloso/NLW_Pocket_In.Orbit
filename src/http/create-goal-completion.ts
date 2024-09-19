export async function createGoalCompletion(goalId: string) {
  await fetch('http://localhost:3333/goals-completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      goalId,
    }),
  })
}

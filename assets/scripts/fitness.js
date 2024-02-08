var exerciseTile = document.querySelector("#exercise-container")

function displayExercises(exercises) {
    exerciseTile.innerHTML = ""; //clear any previous content
    exercises.forEach(function(exercise){
        var exerciseElement = document.createElement("div");
        exerciseElement.innerHTML = `
        <h3>${exercise.name}</h3>
        <p>Type: ${exercise.type}</p>
        <p>Muscle: ${exercise.muscle}</p>
        <p>Equipment: ${exercise.equipment}</p>
        <p>Difficulty: ${exercise.difficulty}</p>
        <p>Instructions: ${exercise.instructions}</p>
    `;
    exerciseTile.appendChild(exerciseElement);
    });
}

fetch('https://api.api-ninjas.com/v1/exercises?type=cardio&difficulty=beginner', {
    method: "GET",
    headers: {
        "X-Api-Key": "QpX1H+b49TjWLAvZBLwEFQ==fFPfr9qGtWP5KJg0"
    }
})

.then(function(response) {
    return response.json();
})

.then(function(data) {
    console.log(data)
    displayExercises(data);
})
.catch(function(error) {
    console.log('Error fetching exercise data:', error);
});
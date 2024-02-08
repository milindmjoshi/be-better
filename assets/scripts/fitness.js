var exerciseTile = document.querySelector("#exercise-container")

function displayExercises(exercises) {
        var randomIndex = Math.floor(Math.random() * exercises.length);
        var randomExercise = exercises[randomIndex]
        
        var exerciseElement = document.createElement("div");
        exerciseElement.innerHTML = `
        <h2 style ="color: teal;">${randomExercise.name}</h2>
        <p style ="color: teal;">Type: ${randomExercise.type}</p>
        <p style ="color: teal;">Muscle: ${randomExercise.muscle}</p>
        <p style ="color: teal;">Equipment: ${randomExercise.equipment}</p>
        <p style ="color: teal;">Difficulty: ${randomExercise.difficulty}</p>
        <p style ="color: teal;">Instructions: ${randomExercise.instructions}</p>
    `;

    exerciseTile.innerHTML = ""; //clear any previous content
    exerciseTile.appendChild(exerciseElement);
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
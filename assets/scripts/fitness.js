var exerciseTile = document.querySelector("#exercise-container")

function displayExercises(exercises) {
        var randomIndex = Math.floor(Math.random() * exercises.length);
        var randomExercise = exercises[randomIndex]
        
        var exerciseElement = document.createElement("div");
        exerciseElement.innerHTML = `
        <h2 style ="color: gold; font-size: 20px">${randomExercise.name}</h2>
        <p><span style ="color: gold;">Type:</span> ${randomExercise.type}</p>
        <p><span style ="color: gold;">Muscle:</span> ${randomExercise.muscle}</p>
        <p><span style ="color: gold;">Equipment:</span> ${randomExercise.equipment}</p>
        <p><span style ="color: gold;">Difficulty:</span> ${randomExercise.difficulty}</p>
        <p><span style ="color: gold;">Instructions:</span> ${randomExercise.instructions}</p>
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
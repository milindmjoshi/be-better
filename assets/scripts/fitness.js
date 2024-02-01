const settings = {
    async: true,
    crossDomain: true,
    url: 'https://youtube-trending.p.rapidapi.com/trending?country=US&type=Fitness',
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '18d8053150mshe91e7ced9dede79p12feb9jsn91c1435a3b0b',
		'X-RapidAPI-Host': 'youtube-trending.p.rapidapi.com'
    }
};

function displayVideos(videos) {
    const videoContainer = $('#video-container');
    //to clear previous videos
    videoContainer.empty();

        const videoId = video.id;
        const videoTitle = video.title;

        //this should embed the youtube video using the video ID not sure whats wrong
        videoContainer.append(`
        <div>
            <iframe width="300" height="200" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
            <p>${videoTitle}</p>
        </div>
    `);
    }
//display a loading message while they wait on the video to load
function displayLoadingMessage() {
    const videoContainer = $('video-container');
    videoContainer.empty();

    videoContainer.append('<p>Loading...</p>');
}

displayLoadingMessage();
//make the request
$.ajax(settings)
    .done(function(response){
        console.log(response);
        const videos = response.items;

        if (videos && videos.length > 0) {
        displayVideo(videos[0]);
        } else {
        $('#video-container').html('<p>No videos available.</p>');
        }
    })




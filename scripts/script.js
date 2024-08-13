document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('video_modal');
    const closeBtn = document.querySelector('.close_btn');
    const youtubeVideo = document.getElementById('youtube_video');
  

    // add click evento to all review buttons
    document.querySelectorAll('.review_btn').forEach(button => {
		button.addEventListener('click', function () {
			const videoID = this.getAttribute('data-video');
			youtubeVideo.src = `https://www.youtube.com/embed/${videoID}`;
			modal.style.display = 'block';
		});
    });
  

    // close the modal when the user clicks the close button
    closeBtn.onclick = function () {
		modal.style.display = 'none';
		youtubeVideo.src = ''; // Clears the video when closing
    }
  
	
    // close the modal when the user clicks away from the modal content
    window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = 'none';
			youtubeVideo.src = ''; // Clears the video when closing
		}
    }
});
  
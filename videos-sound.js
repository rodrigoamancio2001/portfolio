const videos = document.querySelectorAll('.two-images video');

videos.forEach(video => {
    video.addEventListener('click', () => {
        const isMuted = video.muted;

        // silenciar todos
        videos.forEach(v => v.muted = true);

        // se estava muted, ativa som; se não, fica muted
        video.muted = !isMuted;
    });
});
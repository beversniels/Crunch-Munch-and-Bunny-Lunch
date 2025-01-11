// JavaScript Document

        let currentAudio = null;

        function playSound(soundFile) {
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
            currentAudio = new Audio(soundFile);
            currentAudio.play();
        }
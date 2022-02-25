const fs = require('fs');
// Import deepgram node SDK
const {Deepgram} = require('@deepgram/sdk');
// Import api key from config.js (please see readme file to create this)
const {apiKey} = require('./config');
// Set the media file path name
const pathToFile = './commercial_mono.wav'
// Set search term or phrase
const searchTerm = 'chrome cast'

// Init deepgram SDK
const deepgram = new Deepgram(apiKey);

//Load file into a buffer using file system import above
const fileBuffer = fs.readFileSync(pathToFile);

// transcribe file and pass params for the pre recorded file we are demoing, dont forget we are expecting a promise
deepgram.transcription.preRecorded({
    buffer: fileBuffer,
    mimetype: 'audio/wav'
}, {
    search: searchTerm
})
.then((transcription) => {
    console.dir(transcription, {depth: null});
})
.catch((err) => {
    console.log(err)
});
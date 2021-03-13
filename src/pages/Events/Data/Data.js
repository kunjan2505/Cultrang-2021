import quizPoster from '../poster/quiz_poster.png';
import sketchingPoster from '../poster/sketching.png';
import treasureHuntPoster from '../poster/treasure_hunt.png';
import instrumentsPoster from '../poster/Harmony.png';
import poetryPoster from '../poster/ikraar_poster.png';
import vocalPoster from '../poster/Symphony.png';
import photographyPoster from '../poster/VividSnaps.png';

import danceIcon from '../Event-SVG/dancer.svg';
import musicIcon from '../Event-SVG/music-note.svg';
import debateIcon from '../Event-SVG/debate.svg';
import videoEditingIcon from '../Event-SVG/video editing.svg';
import paintingIcon from '../Event-SVG/paint-palette.svg';
import sketchIcon from '../Event-SVG/sketch.svg';
import quizIcon from '../Event-SVG/quiz.svg';
import poetryIcon from '../Event-SVG/poetry.svg';
import photographyIcon from '../Event-SVG/camera.svg'
import treasureIcon from '../Event-SVG/treasure.svg';
import vocalIcon from '../Event-SVG/microphone.svg';
const events = [
    {
        id:"dancetilldawn",
        eventName:"SOLO DANCE",
        eventNickName: "Dance Till Dawn ",
        eventDetails : " Here’s something that’ll make you tap your feet. No, literally, tap your feet. If you’re into solo or duet, would you like to move it, move it?",
        deadline : "1st April, 2021",
        icon: danceIcon
    },
    {
        id:"symphony",
        eventName: "Solo Vocals" ,
        eventNickName: "Symphony ",
        eventDetails : " If you’ve got the voice, we’ve got the mic! Here’s a competition to bring out your inner virtuoso, and perhaps blow the roof off the place.",
        poster: vocalPoster,
        icon: vocalIcon,
        deadline :" 1st April, 2021",
        
    },
    {
        id:"harmony",
        eventName:"Instrumental " ,
        eventNickName: 'Harmony',
        eventDetails :"If you’re anything like us, you’ve probably tried to impersonate Beethoven or Slash a million times. While wearing retro outfits and growing your hair way too long isn’t what we expect, we wouldn’t mind a great solo!",
        deadline : " 1st April, 2021",
        poster: instrumentsPoster,
        icon: musicIcon
    },
    {
        id:"debate",
        eventName: "DEBATE" ,
        eventNickName: 'Debatocalypse',
        eventDetails : "There’s no point in having an opinion if you can’t voice it. If you have a way of bringing conviction to your points, we have the perfect competition for you!",
        deadline : " 1st April, 2021",
        icon: debateIcon
    },
    {
        id:"filmwars",
        eventName: "Video Editing" ,
        eventNickName: "Filmwars",
        eventDetails : "While great acting is required to make a good movie, the lack of proper editing can even make Captain America look like a clown. So, be there and make sure you clip it the right way! ",
        deadline : " 1st April, 2021",
        icon: videoEditingIcon


    },
    {
        id:"brushhour",
        eventName: "Painting" ,
        eventNickName: 'Brush Hour',
        eventDetails : "This is the perfect event for you, if you have a way of making things alive with the stroke of a brush. Vicente van Go make it happen! ",
        deadline : " 1st April, 2021",
        icon: paintingIcon
    },
    {
        id:"etchasketch",
        eventName: "SKETCHING" ,
        eventNickName: "Etch-a-Sketch",
        eventDetails : "If you like to bring things to life by no brush but just pencils, we’ve got you covered with our sketching event. Bring those pencils, show us the magic of that one stroke ",
        deadline : " 1st April, 2021",
        icon: sketchIcon,
        poster: sketchingPoster
    },
    {
        id:"qb",
        eventName: "QUIZZING " ,
        eventNickName: "Quizzaholic Bandits",
        eventDetails : "Get your antennae raised for we got you a chance to prove your genius.",
        deadline : " 1st April, 2021",
        icon: quizIcon,
        poster : quizPoster
    },
    {
        id:"ikraar",
        eventName: "POETRY  " ,
        eventNickName: "Ikraar",
        eventDetails : " Showcase your inner Wordsworth. Spill that ink, let those words flow as we wait for your poetry to leave us spellbound",
        icon: poetryIcon,
        poster: poetryPoster,
        deadline : " 1st April, 2021"
    },
    {
        id:"vividsnaps",
        eventName: " Photography" ,
        eventNickName: "Vivid Snaps",
        eventDetails : "Photography is an art of observation, it’s about finding something interesting in an ordinary place. If the picture clicked by you can communicate a visual narrative, come along and let the pictures tell us their story.",
        deadline : " 1st April, 2021",
        icon: photographyIcon,
        poster: photographyPoster
    },
    {
        id:"thunt",
        eventName: "Treasure Hunt" ,
        eventNickName: "Treasure Hunt ",
        eventDetails: "Treasure Hunt takes you on a cryptic, interactive journey into the secret nooks and crannies and on an adventure like no other. The event is crammed with activities and puzzles, which means that all team members will have the opportunity to use their particular skills and emerge victorious as a team",
        deadline : " 1st April, 2021",
        icon: treasureIcon,
        poster: treasureHuntPoster
    }
];
export default events;
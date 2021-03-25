import quizPoster from '../poster/quiz_poster.png';
import sketchingPoster from '../poster/sketching.png';
import treasureHuntPoster from '../poster/treasure_hunt.png';
import instrumentsPoster from '../poster/Harmony.png';
import poetryPoster from '../poster/ikraar_poster.png';
import vocalPoster from '../poster/Symphony.png';
import photographyPoster from '../poster/VividSnaps.png';
import dancePoster from '../poster/solo_dance.png';
import debatePoster from '../poster/debate_poster.png';
import filmWarsPoster from '../poster/film_wars.png';
import brushHourPoster from '../poster/BrushHour.png';

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
        eventDetails : "Dancing is so much more than just grooving on the dance floor to your favorite tunes. Dance is art in motion, it’s the embodiment of rhythm. If you’re someone who brings the fire to the dance floor, we have got the perfect event for you! Come along and dance to your own rhythm.",
        deadline : "1st April, 2021",
        icon: danceIcon,
        poster: dancePoster
    },
    {
        id:"symphony",
        eventName: "Solo Vocals" ,
        eventNickName: "Symphony ",
        eventDetails : " If you’ve got the voice, we’ve got the mic! But it takes more than just a mic to create something beautiful. Here’s a competition to bring out your inner virtuoso, and perhaps blow the roof off the place.",
        poster: vocalPoster,
        icon: vocalIcon,
        deadline :" 7th April, 2021",
        
    },
    {
        id:"harmony",
        eventName:"Instrumental " ,
        eventNickName: 'Harmony',
        eventDetails :" If you’re anything like us, you’ve probably tried to impersonate Beethoven or Slash a million times, and fantasised about being a rock star. While wearing retro outfits and growing your hair way too long isn’t what we expect, we wouldn’t mind a great solo!",
        deadline : " 7th April, 2021",
        poster: instrumentsPoster,
        icon: musicIcon
    },
    {
        id:"debate",
        eventName: "DEBATE" ,
        eventNickName: 'Debatocalypse',
        eventDetails : " There’s no point in having an opinion if you can’t voice it. Change only happens when the idea is backed by concrete arguments and is robust to counter claims. If you have a way of bringing conviction to your points, we have the perfect competition for you!",
        deadline : " 7th April, 2021",
        icon: debateIcon,
        poster: debatePoster
    },
    {
        id:"filmwars",
        eventName: "Video Editing" ,
        eventNickName: "Filmwars",
        eventDetails : "  While great acting is required to make a good movie, the lack of proper editing can even make Captain America look like a clown. Besides, making things emerge from thin air is what makes someone the modern Picasso! Be there and make sure you clip it the right way!",
        deadline : " 7th April, 2021",
        icon: videoEditingIcon,
        poster: filmWarsPoster


    },
    {
        id:"brushhour",
        eventName: "Painting" ,
        eventNickName: 'Brush Hour',
        eventDetails : "This is the perfect event for you, if you have a way of making things come alive with the stroke of a brush. Besides, who wants to live in a world without colours, so dark and gloomy? Vicente van Go paint it!",
        deadline : " 7th April, 2021",
        icon: paintingIcon,
        poster: brushHourPoster
    },
    {
        id:"etchasketch",
        eventName: "SKETCHING" ,
        eventNickName: "Etch-a-Sketch",
        eventDetails : "If you like to bring things to life by no brush but just pencils, and of course if you don’t mind getting a ton of graphite on your fingers, we’ve got you covered with our sketching event. Bring those pencils, show us the magic of that one stroke!",
        deadline : " 7th April, 2021",
        icon: sketchIcon,
        poster: sketchingPoster
    },
    {
        id:"qb",
        eventName: "QUIZZING " ,
        eventNickName: "Quizzaholic Bandits",
        eventDetails : "Get your antennae raised for we got you a chance to prove your genius. In the battle of wits involving familiarity and knowledge of various cultures across the world, with the added incentive of the tag of a trivia maestro, will you come out on top, or end up being trivial?",
        deadline : " 7th April, 2021",
        icon: quizIcon,
        poster : quizPoster
    },
    {
        id:"ikraar",
        eventName: "POETRY  " ,
        eventNickName: "Ikraar",
        eventDetails : "  Years of evidence still might not be enough for a scientist. But for a poet, a momentary inspiration is all it takes! Showcase your inner Wordsworth, a pill that ink, let those words flow as we wait for your poetry to leave us spellbound.",
        icon: poetryIcon,
        poster: poetryPoster,
        deadline : " 7th April, 2021"
    },
    {
        id:"vividsnaps",
        eventName: " Photography" ,
        eventNickName: "Vivid Snaps",
        eventDetails : "In a world so full of wonderful spectacles and untamed beauty, Photography is about finding something interesting in an ordinary place. If the picture clicked by you can communicate a visual narrative, send a message, or simply be an indulgence for the serene admirers, come along and let the pictures tell us their story.",
        deadline : " 7th April, 2021",
        icon: photographyIcon,
        poster: photographyPoster
    },
    {
        id:"thunt",
        eventName: "Treasure Hunt" ,
        eventNickName: "Treasure Hunt ",
        eventDetails: " Treasure Hunt takes you on a cryptic, interactive journey into the secret nooks and crannies and on an adventure like no other. The event is crammed with activities and puzzles that challenge your wits and require you to engage all your mental faculties in an intriguing environment, which means that all team members will have the opportunity to use their particular skills and, perhaps, emerge victorious as a team.",
        deadline : " 7th April, 2021",
        icon: treasureIcon,
        poster: treasureHuntPoster
    }
];
export default events;
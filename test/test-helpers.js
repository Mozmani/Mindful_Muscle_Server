const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


function makeUsersArray() {
  return [
    {
      id: 1,
      user_name: 'DemoMan1',
      password: 'thisISsecure1$',
    },
    {
      id: 2,
      user_name: 'test-user-2',
      password: 'password',

    },
    {
      id: 3,
      user_name: 'test-user-3',
      password: 'password',
    },
    {
      id: 4,
      user_name: 'test-user-4',
      password: 'password',

    },
  ];
}

function makeExercisesArray(){
return [
  {
    "id": 1,
    "exercise_name": "Tri-plane lunges (weighted)",
    "target": "Warmup",
    "exercise_priority": 1,
    "equipment_value": 3,
    "exercise_description": "A simple lunge exercise that functions as a warm up exercise as well as an endurance exercise.",
    "instructions": "Stand with your feet hip-width apart, keep your back straight, your shoulders back and your abs tight. Take a step forward and slowly bend both knees, until your back knee is just above the floor. Stand back up and repeat the movement. Alternate legs until set is complete. Perform in all three directions.",
    "link": "https://www.youtube.com/embed/5DfCBBPgxE0",
    "lose_weight": true,
    "gain_muscle": true,
    "gain_strength": true,
    "endurance": true
},
{
    "id": 2,
    "exercise_name": "Tri-plane lunges",
    "target": "Warmup",
    "exercise_priority": 1,
    "equipment_value": 1,
    "exercise_description": "A simple lunge exercise that functions as a warm up exercise as well as an endurance exercise.",
    "instructions": "Stand with your feet hip-width apart, keep your back straight, your shoulders back and your abs tight. Take a step forward and slowly bend both knees, until your back knee is just above the floor. Stand back up and repeat the movement. Alternate legs until set is complete. Perform in all three directions.",
    "link": "https://www.youtube.com/embed/qm5D40RTSQk",
    "lose_weight": true,
    "gain_muscle": true,
    "gain_strength": true,
    "endurance": true
},
{
    "id": 3,
    "exercise_name": "Scissor hops",
    "target": "Warmup",
    "exercise_priority": 3,
    "equipment_value": 1,
    "exercise_description": "A simple warm up exercise",
    "instructions": "Jump while performing scissor like motions with your legs",
    "link": "https://www.youtube.com/embed/QrBOCqscdwc",
    "lose_weight": true,
    "gain_muscle": false,
    "gain_strength": false,
    "endurance": true
},
{
    "id": 4,
    "exercise_name": "Barbell Squats",
    "target": "Lowerbody",
    "exercise_priority": 1,
    "equipment_value": 3,
    "exercise_description": "An intense leg exercise ",
    "instructions": "Refer to the video for detailed instructions",
    "link": "https://www.youtube.com/embed/Dy28eq2PjcM",
    "lose_weight": true,
    "gain_muscle": true,
    "gain_strength": true,
    "endurance": true
},
{
    "id": 5,
    "exercise_name": "Barbell Hip Thrusts",
    "target": "Lowerbody",
    "exercise_priority": 1,
    "equipment_value": 3,
    "exercise_description": "An intense exercise isolating the glute muscles strength and function",
    "instructions": "Refer to the video for detailed instructions",
    "link": "https://www.youtube.com/embed/Zp26q4BY5HE",
    "lose_weight": true,
    "gain_muscle": true,
    "gain_strength": true,
    "endurance": true
},
{
    "id": 6,
    "exercise_name": "Barbell Reverse Lunges",
    "target": "Lowerbody",
    "exercise_priority": 1,
    "equipment_value": 3,
    "exercise_description": "A great exercise for your legs",
    "instructions": "Refer to the video for detailed instructions",
    "link": "https://www.youtube.com/embed/R-g5yPNYv2k",
    "lose_weight": true,
    "gain_muscle": true,
    "gain_strength": true,
    "endurance": true
},
{
    "id": 7,
    "exercise_name": "Alternate Single Leg Box Squat",
    "target": "Lowerbody",
    "exercise_priority": 2,
    "equipment_value": 1,
    "exercise_description": "A great leg exercise",
    "instructions": "Watch video for instructions.",
    "link": "https://www.youtube.com/embed/uJ4eA2wUXdw",
    "lose_weight": true,
    "gain_muscle": true,
    "gain_strength": true,
    "endurance": true
},
{
    "id": 8,
    "exercise_name": "1 1/2 Bottomed Out squats",
    "target": "Lowerbody",
    "exercise_priority": 1,
    "equipment_value": 1,
    "exercise_description": "A great leg exercise that strengthens them in their weakest spot",
    "instructions": "Watch video for instructions.",
    "link": "https://www.youtube.com/embed/T8TeqgiwM-o",
    "lose_weight": true,
    "gain_muscle": true,
    "gain_strength": true,
    "endurance": true
},
{
    "id": 9,
    "exercise_name": "Jump Squats",
    "target": "Lowerbody",
    "exercise_priority": 1,
    "equipment_value": 1,
    "exercise_description": "A intense endurance exercise for the lower body.",
    "instructions": "Perform a Squat to jump motion, making sure to land softly.",
    "link": "https://www.youtube.com/embed/0LGJZqKfpXs",
    "lose_weight": true,
    "gain_muscle": true,
    "gain_strength": true,
    "endurance": true
},
{
    "id": 10,
    "exercise_name": "Assisted Pistol Squats",
    "target": "Lowerbody",
    "exercise_priority": 1,
    "equipment_value": 1,
    "exercise_description": "Pistol Squats using a chair, bedsheet / door, or any other sturdy fixture",
    "instructions": "Watch video for instructions.",
    "link": "https://www.youtube.com/embed/un5Wbnczt9s",
    "lose_weight": true,
    "gain_muscle": true,
    "gain_strength": true,
    "endurance": true
},
{
    "id": 11,
    "exercise_name": "Bulgarian Split Squats with chair",
    "target": "Lowerbody",
    "exercise_priority": 3,
    "equipment_value": 1,
    "exercise_description": "An intense exercise for your legs",
    "instructions": "Watch video for instructions",
    "link": "https://www.youtube.com/embed/T--Sg-g0vnw",
    "lose_weight": true,
    "gain_muscle": true,
    "gain_strength": true,
    "endurance": true
},
{
    "id": 12,
    "exercise_name": "Step Downs",
    "target": "Lowerbody",
    "exercise_priority": 3,
    "equipment_value": 1,
    "exercise_description": "A step exercise that is harder than it looks!",
    "instructions": "When stepping down make sure to hing at the hips and keep your knee above your toes.",
    "link": "https://www.youtube.com/embed/vXMB-9Yb9V4",
    "lose_weight": true,
    "gain_muscle": true,
    "gain_strength": true,
    "endurance": true
},
{
    "id": 13,
    "exercise_name": "Bench Press",
    "target": "Upperbody",
    "exercise_priority": 1,
    "equipment_value": 3,
    "exercise_description": "An intense chest exercise",
    "instructions": "Refer to the video for detailed instructions",
    "link": "https://www.youtube.com/embed/gRVjAtPip0Y",
    "lose_weight": false,
    "gain_muscle": true,
    "gain_strength": true,
    "endurance": false
},
{
    "id": 14,
    "exercise_name": "Barbell Overhead Press",
    "target": "Upperbody",
    "exercise_priority": 1,
    "equipment_value": 3,
    "exercise_description": "A great exercise for your shoulders and upper body",
    "instructions": "Refer to the video for detailed instructions",
    "link": "https://www.youtube.com/embed/F3QY5vMz_6I",
    "lose_weight": false,
    "gain_muscle": true,
    "gain_strength": true,
    "endurance": false
},
{
    "id": 15,
    "exercise_name": "Incline Bench Press",
    "target": "Upperbody",
    "exercise_priority": 2,
    "equipment_value": 3,
    "exercise_description": "A great exercise for the upper chest muscles",
    "instructions": "Refer to the video for detailed instructions",
    "link": "https://www.youtube.com/embed/jPLdzuHckI8",
    "lose_weight": false,
    "gain_muscle": true,
    "gain_strength": true,
    "endurance": false
},
{
  "id": 16,
  "exercise_name": "Resistence Band Chest Fly",
  "target": "Upperbody",
  "exercise_priority": 2,
  "equipment_value": 2,
  "exercise_description": "A great exercise for chest muuscle isolation.",
  "instructions": "Watch video for instructions.",
  "link": "https://www.youtube.com/embed/yVcEkvgymt8",
  "lose_weight": false,
  "gain_muscle": true,
  "gain_strength": true,
  "endurance": false
},
{
  "id": 17,
  "exercise_name": "Power Push Aways",
  "target": "Upperbody",
  "exercise_priority": 2,
  "equipment_value": 1,
  "exercise_description": "A great exercise for shoulder muscles",
  "instructions": "Watch video for instructions.",
  "link": "https://www.youtube.com/embed/u5FgbAVFEh0",
  "lose_weight": true,
  "gain_muscle": true,
  "gain_strength": true,
  "endurance": false
},
{
  "id": 18,
  "exercise_name": "Rotational Pushups",
  "target": "Upperbody",
  "exercise_priority": 2,
  "equipment_value": 1,
  "exercise_description": "A great upperbody and core exercise.",
  "instructions": "Watch video for instructions.",
  "link": "https://www.youtube.com/embed/SIXuGSOL3_8",
  "lose_weight": false,
  "gain_muscle": true,
  "gain_strength": true,
  "endurance": true
},
{
  "id": 19,
  "exercise_name": "Daimond Pushups",
  "target": "Upperbody",
  "exercise_priority": 1,
  "equipment_value": 1,
  "exercise_description": "A push up variation that incorporates more tricep activation",
  "instructions": "Perform push ups with a narrow hand placement forming your fingers into a diamond.",
  "link": "https://www.youtube.com/embed/kGhDnFwMY3E",
  "lose_weight": false,
  "gain_muscle": true,
  "gain_strength": true,
  "endurance": true
},
{
  "id": 20,
  "exercise_name": "Pike Push Ups",
  "target": "Upperbody",
  "exercise_priority": 3,
  "equipment_value": 1,
  "exercise_description": "An intense upper body exercise.",
  "instructions": "Watch video for instructions.",
  "link": "https://www.youtube.com/embed/HT4G-uWcVcc",
  "lose_weight": false,
  "gain_muscle": true,
  "gain_strength": true,
  "endurance": true
},
{
  "id": 21,
  "exercise_name": "Push Ups With Shoulder Raise",
  "target": "Upperbody",
  "exercise_priority": 1,
  "equipment_value": 1,
  "exercise_description": "A more advanced push up that adds shoulder isolation.",
  "instructions": "Perform a classic push up and at the top point raise one arm up straight to shoulder level. repeat with other arm on next push up and repeat.",
  "link": "https://www.youtube.com/embed/ZOqYv0Z5CuA",
  "lose_weight": true,
  "gain_muscle": true,
  "gain_strength": true,
  "endurance": true
},
{
  "id": 22,
  "exercise_name": "Chin Ups",
  "target": "Back",
  "exercise_priority": 1,
  "equipment_value": 3,
  "exercise_description": "An intense back and arm exercise",
  "instructions": "Refer to the video for detailed instructions",
  "link": "https://www.youtube.com/embed/brhRXlOhsAM",
  "lose_weight": true,
  "gain_muscle": true,
  "gain_strength": true,
  "endurance": true
},
{
  "id": 23,
  "exercise_name": "Barbell Deadlifts",
  "target": "Back",
  "exercise_priority": 1,
  "equipment_value": 3,
  "exercise_description": "One of the best exercises you can perform for you entire posterior chain",
  "instructions": "Refer to the video for detailed instructions",
  "link": "https://www.youtube.com/embed/ytGaGIn3SjE",
  "lose_weight": true,
  "gain_muscle": true,
  "gain_strength": true,
  "endurance": true
},
{
  "id": 24,
  "exercise_name": "Barbell Rows",
  "target": "Back",
  "exercise_priority": 1,
  "equipment_value": 3,
  "exercise_description": "A great compound back exercise",
  "instructions": "Refer to the video for detailed instructions",
  "link": "https://www.youtube.com/embed/T3N-TO4reLQ",
  "lose_weight": false,
  "gain_muscle": true,
  "gain_strength": true,
  "endurance": true
},
{
  "id": 25,
  "exercise_name": "Cable rows",
  "target": "Back",
  "exercise_priority": 2,
  "equipment_value": 3,
  "exercise_description": "A standard exercise for improving back strength",
  "instructions": "Refer to the video for detailed instructions",
  "link": "https://www.youtube.com/embed/sP_4vybjVJs",
  "lose_weight": false,
  "gain_muscle": true,
  "gain_strength": true,
  "endurance": true
},
{
  "id": 26,
  "exercise_name": "Single Arm Row",
  "target": "Back",
  "exercise_priority": 2,
  "equipment_value": 3,
  "exercise_description": "A great exercise for the back muscles",
  "instructions": "Refer to the video for detailed instructions",
  "link": "https://www.youtube.com/embed/EEFHHOCfHgw",
  "lose_weight": false,
  "gain_muscle": true,
  "gain_strength": false,
  "endurance": false
},
{
  "id": 27,
  "exercise_name": "Resistence Band Bent Over Rows",
  "target": "Back",
  "exercise_priority": 1,
  "equipment_value": 2,
  "exercise_description": "A great exercise for your back muscles.",
  "instructions": "Pull the band towards your chest with your shoulder blades coming inwards while standing on the band and hinged at the hips.",
  "link": "https://www.youtube.com/embed/vR9KcvzLqVo",
  "lose_weight": true,
  "gain_muscle": true,
  "gain_strength": true,
  "endurance": true
},
{
  "id": 28,
  "exercise_name": "Resistence Band Rows",
  "target": "Back",
  "exercise_priority": 1,
  "equipment_value": 2,
  "exercise_description": "A great exercise for the back muscles",
  "instructions": "Watch the video for further instruction",
  "link": "https://www.youtube.com/embed/lHuGxZZ09nY",
  "lose_weight": true,
  "gain_muscle": true,
  "gain_strength": true,
  "endurance": true
},
{
  "id": 29,
  "exercise_name": "Push Ups",
  "target": "Back",
  "exercise_priority": 1,
  "equipment_value": 1,
  "exercise_description": "The classic back and chest exercise",
  "instructions": "To preform a push up, it is recomended that you watch this video explaining the specific details. While this exercise may seem simple, the form is crucial.",
  "link": "https://www.youtube.com/embed/-Mbr55h3BeQ",
  "lose_weight": true,
  "gain_muscle": true,
  "gain_strength": true,
  "endurance": true
},
{
  "id": 30,
  "exercise_name": "Inverted Rows With Closed Door",
  "target": "Back",
  "exercise_priority": 1,
  "equipment_value": 1,
  "exercise_description": "A great exercise for your back muscles",
  "instructions": "Adjusting your position can increase or lower your resistence. Watch video for instructions.",
  "link": "https://www.youtube.com/embed/kcjRwGy7UGM",
  "lose_weight": true,
  "gain_muscle": true,
  "gain_strength": true,
  "endurance": true
},
{
  "id": 31,
  "exercise_name": "Back Widows",
  "target": "Back",
  "exercise_priority": 1,
  "equipment_value": 1,
  "exercise_description": "A great exercise for upper back strength and stabilization.",
  "instructions": "watch the video for instructions.",
  "link": "https://www.youtube.com/embed/FkrK0yS9dcI",
  "lose_weight": true,
  "gain_muscle": true,
  "gain_strength": true,
  "endurance": true
},
{
  "id": 32,
  "exercise_name": "Bird-dogs",
  "target": "Back",
  "exercise_priority": 1,
  "equipment_value": 1,
  "exercise_description": "A Great exercise for your posterior chain!",
  "instructions": "While on hands and knees, position your body in a 90 degree angle keeping your shoulder and hips at the same level. From this position, raise one arm and opposite leg at the same time and hold for brief pause. Slowly return to position and repeat with opposit arm and leg!",
  "link": "https://www.youtube.com/embed/dDMvch2Z9yY",
  "lose_weight": true,
  "gain_muscle": true,
  "gain_strength": true,
  "endurance": true
},
{
  "id": 33,
  "exercise_name": "Resistence Band Standing Trunk Rotation",
  "target": "Core",
  "exercise_priority": 3,
  "equipment_value": 2,
  "exercise_description": "A trunk rotation exercise to hit isolated ab muscles.",
  "instructions": "Watch video for instructions",
  "link": "https://www.youtube.com/embed/hf3WAC-N7ao",
  "lose_weight": true,
  "gain_muscle": false,
  "gain_strength": false,
  "endurance": true
},
{
  "id": 34,
  "exercise_name": "Resistence Band Woodchops",
  "target": "Core",
  "exercise_priority": 4,
  "equipment_value": 2,
  "exercise_description": "A dynamic core exercise using a resistence band.",
  "instructions": "Watch video for instructions.",
  "link": "https://www.youtube.com/embed/0eS-xaNv3XI",
  "lose_weight": true,
  "gain_muscle": false,
  "gain_strength": false,
  "endurance": true
},
{
  "id": 35,
  "exercise_name": "Planks",
  "target": "Core",
  "exercise_priority": 1,
  "equipment_value": 1,
  "exercise_description": "A great exercise for your core",
  "instructions": "Watch video for instructions",
  "link": "https://www.youtube.com/embed/pSHjTRCQxIw",
  "lose_weight": true,
  "gain_muscle": true,
  "gain_strength": true,
  "endurance": true
},
{
  "id": 36,
  "exercise_name": "Side Planks",
  "target": "Core",
  "exercise_priority": 4,
  "equipment_value": 1,
  "exercise_description": "A variation of planks for the obliques",
  "instructions": "Watch video for instructions",
  "link": "https://www.youtube.com/embed/K2VljzCC16g",
  "lose_weight": false,
  "gain_muscle": true,
  "gain_strength": true,
  "endurance": true
},
{
  "id": 37,
  "exercise_name": "Russian Twist",
  "target": "Core",
  "exercise_priority": 4,
  "equipment_value": 1,
  "exercise_description": "A strong core exercise",
  "instructions": "While seated with knees slightly bent, rotate hands from side to side using trunk rotation.",
  "link": "https://www.youtube.com/embed/KJbMeSAAZVI",
  "lose_weight": true,
  "gain_muscle": true,
  "gain_strength": true,
  "endurance": true
},
{
  "id": 38,
  "exercise_name": "Leg Lift With Hip Raise",
  "target": "Core",
  "exercise_priority": 2,
  "equipment_value": 1,
  "exercise_description": "A great exercise to target the lower abs.",
  "instructions": "Watch video for instructions",
  "link": "https://www.youtube.com/embed/-SNWwnBJEKM",
  "lose_weight": true,
  "gain_muscle": true,
  "gain_strength": true,
  "endurance": true
},
{
  "id": 39,
  "exercise_name": "Alternating Heel Touches",
  "target": "Core",
  "exercise_priority": 4,
  "equipment_value": 1,
  "exercise_description": "A great endurance exercise for the core.",
  "instructions": "Watch video for instructions",
  "link": "https://www.youtube.com/embed/J9eSDQh3P1o",
  "lose_weight": true,
  "gain_muscle": false,
  "gain_strength": false,
  "endurance": true
},
{
  "id": 40,
  "exercise_name": "Seated Scissor Kick",
  "target": "Core",
  "exercise_priority": 2,
  "equipment_value": 1,
  "exercise_description": "A great endurance exercise for the core.",
  "instructions": "Watch video for instructions",
  "link": "https://www.youtube.com/embed/_qH5YwnWdtc",
  "lose_weight": true,
  "gain_muscle": true,
  "gain_strength": true,
  "endurance": true
},
{
  "id": 41,
  "exercise_name": "Heel Touches",
  "target": "Core",
  "exercise_priority": 4,
  "equipment_value": 1,
  "exercise_description": "A difficult core exercise",
  "instructions": "Watch video for instructions",
  "link": "https://www.youtube.com/embed/1wDaez-3oW8",
  "lose_weight": true,
  "gain_muscle": false,
  "gain_strength": false,
  "endurance": true
},
{
  "id": 42,
  "exercise_name": "Plank Step-Up",
  "target": "Core",
  "exercise_priority": 4,
  "equipment_value": 1,
  "exercise_description": "A difficult core and upper body exercise",
  "instructions": "Watch video for instructions",
  "link": "https://www.youtube.com/embed/L4oFJRDAU4Q",
  "lose_weight": true,
  "gain_muscle": true,
  "gain_strength": true,
  "endurance": true
},
{
  "id": 43,
  "exercise_name": "Cross Crunch",
  "target": "Core",
  "exercise_priority": 3,
  "equipment_value": 1,
  "exercise_description": "A great diagonal core exercise",
  "instructions": "Watch video for instructions",
  "link": "https://www.youtube.com/embed/bEYv_MMlWhs",
  "lose_weight": true,
  "gain_muscle": false,
  "gain_strength": false,
  "endurance": true
},
{
  "id": 44,
  "exercise_name": "Bicycle Crunch",
  "target": "Core",
  "exercise_priority": 1,
  "equipment_value": 1,
  "exercise_description": "A difficult diagonal core exercise",
  "instructions": "Watch video for instructions",
  "link": "https://www.youtube.com/embed/9FGilxCbdz8",
  "lose_weight": true,
  "gain_muscle": true,
  "gain_strength": true,
  "endurance": true
},
{
  "id": 45,
  "exercise_name": "Ab Roll-Out",
  "target": "Core",
  "exercise_priority": 4,
  "equipment_value": 1,
  "exercise_description": "A rolling exercise to target the core veritcally.",
  "instructions": "Watch video for instructions",
  "link": "https://www.youtube.com/embed/m0XGiuXv_74",
  "lose_weight": true,
  "gain_muscle": false,
  "gain_strength": true,
  "endurance": true
},
{
  "id": 46,
  "exercise_name": "Super Man",
  "target": "Core",
  "exercise_priority": 2,
  "equipment_value": 1,
  "exercise_description": "A great exercise to strengthen the posterior chain and core.",
  "instructions": "Watch video for instructions",
  "link": "https://www.youtube.com/embed/z6PJMT2y8GQ",
  "lose_weight": true,
  "gain_muscle": true,
  "gain_strength": true,
  "endurance": true
},
{
  "id": 47,
  "exercise_name": "Iso-Reverse Crunch",
  "target": "Core",
  "exercise_priority": 1,
  "equipment_value": 1,
  "exercise_description": "A great lower core exercise.",
  "instructions": "Watch video for instructions",
  "link": "https://www.youtube.com/embed/S1NY8Pn3PYM",
  "lose_weight": true,
  "gain_muscle": false,
  "gain_strength": true,
  "endurance": true
},
{
  "id": 48,
  "exercise_name": "Seated Ab Circles",
  "target": "Core",
  "exercise_priority": 3,
  "equipment_value": 1,
  "exercise_description": "A challenging exercise for the core.",
  "instructions": "Watch video for instructions",
  "link": "https://www.youtube.com/embed/GOFlI29WqCI",
  "lose_weight": true,
  "gain_muscle": false,
  "gain_strength": true,
  "endurance": true
},
{
  "id": 49,
  "exercise_name": "Farmers Carry",
  "target": "Postural",
  "exercise_priority": 1,
  "equipment_value": 3,
  "exercise_description": "A great exercise to improve grip strength",
  "instructions": "Refer to the video for detailed instructions",
  "link": "https://www.youtube.com/embed/rt17lmnaLSM",
  "lose_weight": true,
  "gain_muscle": true,
  "gain_strength": true,
  "endurance": true
},
{
  "id": 50,
  "exercise_name": "Overhead Farmers Carry",
  "target": "Postural",
  "exercise_priority": 1,
  "equipment_value": 3,
  "exercise_description": "an overhead carry exercise to improve grip strength and upper quarter stability.",
  "instructions": "Refer to the video for detailed instructions",
  "link": "https://www.youtube.com/embed/A1qx6m67T9A",
  "lose_weight": false,
  "gain_muscle": true,
  "gain_strength": true,
  "endurance": true
},
{
  "id": 51,
  "exercise_name": "Resistence Band Face Pulls",
  "target": "Postural",
  "exercise_priority": 1,
  "equipment_value": 2,
  "exercise_description": "A great postural exercise for your upper back and shoulders.",
  "instructions": "Watch video for instructions",
  "link": "https://www.youtube.com/embed/eIq5CB9JfKE",
  "lose_weight": false,
  "gain_muscle": true,
  "gain_strength": true,
  "endurance": true
},
{
  "id": 52,
  "exercise_name": "Resistence Band High To Low Rows",
  "target": "Postural",
  "exercise_priority": 2,
  "equipment_value": 2,
  "exercise_description": "A great postural exercise for your middle back muscles.",
  "instructions": "Watch the video for instructions",
  "link": "https://www.youtube.com/embed/NMjPoyI0zyE",
  "lose_weight": false,
  "gain_muscle": true,
  "gain_strength": true,
  "endurance": true
},
{
  "id": 53,
  "exercise_name": "Lat Floor Slide",
  "target": "Postural",
  "exercise_priority": 1,
  "equipment_value": 1,
  "exercise_description": "A great exercise for lat activation",
  "instructions": "Watch video for instructions.",
  "link": "https://www.youtube.com/embed/vPGuYEtbu9A",
  "lose_weight": true,
  "gain_muscle": true,
  "gain_strength": true,
  "endurance": true
},
{
  "id": 54,
  "exercise_name": "Bridge (With Or Without Belt)",
  "target": "Postural",
  "exercise_priority": 1,
  "equipment_value": 1,
  "exercise_description": "A great exercise for glute activation / isolation",
  "instructions": "Watch video for instructions",
  "link": "https://www.youtube.com/embed/wPM8icPu6H8",
  "lose_weight": true,
  "gain_muscle": true,
  "gain_strength": true,
  "endurance": true
},
{
  "id": 55,
  "exercise_name": "Prone Y-T-I",
  "target": "Postural",
  "exercise_priority": 3,
  "equipment_value": 1,
  "exercise_description": "A great exercise to activate the the small back muscles that are important for posture.",
  "instructions": "Watch video for instructions",
  "link": "https://www.youtube.com/embed/yjcoVkZv55E",
  "lose_weight": false,
  "gain_muscle": true,
  "gain_strength": true,
  "endurance": false
},
{
  "id": 56,
  "exercise_name": "Bicep Curls",
  "target": "Accessory",
  "exercise_priority": 3,
  "equipment_value": 3,
  "exercise_description": "A great bicep exercise",
  "instructions": "Using dumbells or a bar, flex your elbows with the weight, keeping your elbows in the same position.",
  "link": "https://www.youtube.com/embed/Nkl8WnH6tDU",
  "lose_weight": false,
  "gain_muscle": true,
  "gain_strength": false,
  "endurance": false
},
{
  "id": 57,
  "exercise_name": "Skull crushers",
  "target": "Accessory",
  "exercise_priority": 3,
  "equipment_value": 3,
  "exercise_description": "A great exercise for tricep strength",
  "instructions": "Refer to the video for detailed instructions",
  "link": "https://www.youtube.com/embed/QXzhjRnYRT0",
  "lose_weight": false,
  "gain_muscle": true,
  "gain_strength": false,
  "endurance": false
},
{
  "id": 58,
  "exercise_name": "Dips",
  "target": "Accessory",
  "exercise_priority": 1,
  "equipment_value": 1,
  "exercise_description": "A great tricep exercise",
  "instructions": "Watch video for instructions",
  "link": "https://www.youtube.com/embed/0326dy_-CzM",
  "lose_weight": true,
  "gain_muscle": true,
  "gain_strength": true,
  "endurance": true
},
{
  "id": 59,
  "exercise_name": "Dumbell Lateral Raises",
  "target": "Accessory",
  "exercise_priority": 2,
  "equipment_value": 3,
  "exercise_description": "a great exercise for the deltoid muscle",
  "instructions": "Refer to the video for detailed instructions",
  "link": "https://www.youtube.com/embed/WJm9zA2NY8E",
  "lose_weight": false,
  "gain_muscle": true,
  "gain_strength": true,
  "endurance": false
},
{
  "id": 60,
  "exercise_name": "Resistence Band Reverse Fly",
  "target": "Accessory",
  "exercise_priority": 1,
  "equipment_value": 2,
  "exercise_description": "A great exercise for your back muscles as well as building good posture.",
  "instructions": "Watch video for instructions.",
  "link": "https://www.youtube.com/embed/arw9w79rUPI",
  "lose_weight": false,
  "gain_muscle": true,
  "gain_strength": true,
  "endurance": true
},
{
  "id": 61,
  "exercise_name": "Resistence Band Bicep Curls",
  "target": "Accessory",
  "exercise_priority": 2,
  "equipment_value": 2,
  "exercise_description": "A great Arm work out",
  "instructions": "Using a band, flex your elbows with the weight, keeping your elbows in the same position.",
  "link": "https://www.youtube.com/embed/FVCmVLwRNe0",
  "lose_weight": false,
  "gain_muscle": true,
  "gain_strength": true,
  "endurance": true
},
{
  "id": 62,
  "exercise_name": "Resistence Band Overhead Tricep Extensions",
  "target": "Accessory",
  "exercise_priority": 1,
  "equipment_value": 2,
  "exercise_description": "A great triceps exercise",
  "instructions": "Extend your arms upwards with your elbow as the fulcrum over your head as you stand on top of the band.",
  "link": "https://www.youtube.com/embed/a5rUdCeTtSE",
  "lose_weight": false,
  "gain_muscle": true,
  "gain_strength": true,
  "endurance": false
},
{
  "id": 63,
  "exercise_name": "Resistence Band Lateral Raises",
  "target": "Accessory",
  "exercise_priority": 1,
  "equipment_value": 2,
  "exercise_description": "A great isolation exercise for your shoulders",
  "instructions": "watch video for instructions",
  "link": "https://www.youtube.com/embed/-fjIqkPHz8c",
  "lose_weight": true,
  "gain_muscle": true,
  "gain_strength": true,
  "endurance": true
},
{
  "id": 64,
  "exercise_name": "Plank Push Aways",
  "target": "Accessory",
  "exercise_priority": 1,
  "equipment_value": 1,
  "exercise_description": "A great exercise for serratus anterior activation",
  "instructions": "Watch video for instructions",
  "link": "https://www.youtube.com/embed/tIap-_QHdv0",
  "lose_weight": true,
  "gain_muscle": true,
  "gain_strength": true,
  "endurance": true
},
{
  "id": 65,
  "exercise_name": "Closed Door Bicep Curls",
  "target": "Accessory",
  "exercise_priority": 1,
  "equipment_value": 1,
  "exercise_description": "Bicep curls using a bed sheet and a closed door!",
  "instructions": "Watch video for instructions.",
  "link": "https://www.youtube.com/embed/jR1wy7NtKAo",
  "lose_weight": false,
  "gain_muscle": true,
  "gain_strength": false,
  "endurance": true
},
{
  "id": 66,
  "exercise_name": "Closed Door Overhead Tricep Extentsions",
  "target": "Accessory",
  "exercise_priority": 1,
  "equipment_value": 1,
  "exercise_description": "Tricep extensions using a bedsheet and a closed door",
  "instructions": "Watch video for instructions.",
  "link": "https://www.youtube.com/embed/nnMyjWCv0bg",
  "lose_weight": false,
  "gain_muscle": true,
  "gain_strength": false,
  "endurance": true
},
{
  "id": 67,
  "exercise_name": "Sliding Hamstring Curls",
  "target": "Accessory",
  "exercise_priority": 4,
  "equipment_value": 1,
  "exercise_description": "An accessory exercise for your hamstrings",
  "instructions": "Curl your legs towards your body",
  "link": "https://www.youtube.com/embed/oimeUrwxEo0",
  "lose_weight": false,
  "gain_muscle": false,
  "gain_strength": false,
  "endurance": true
},
{
  "id": 68,
  "exercise_name": "Step-Ups",
  "target": "Accessory",
  "exercise_priority": 2,
  "equipment_value": 1,
  "exercise_description": "An endurance exercise for the legs",
  "instructions": "Placing one foot on a step, stwep up and down with the other foot.",
  "link": "https://www.youtube.com/embed/dQqApCGd5Ss",
  "lose_weight": true,
  "gain_muscle": true,
  "gain_strength": false,
  "endurance": true
},
{
  "id": 69,
  "exercise_name": "Side Step-Ups",
  "target": "Accessory",
  "exercise_priority": 2,
  "equipment_value": 1,
  "exercise_description": "A step up variation for the glute medius",
  "instructions": "Watch video for instructions",
  "link": "https://www.youtube.com/embed/gk-xS6mjIms",
  "lose_weight": true,
  "gain_muscle": true,
  "gain_strength": true,
  "endurance": true
}
]
}

function makeExercisePlanArray(){
  return [
    {
      "id": 148,
      "user_id": "DemoMan1",
      "exercise_id": 8,
      "frequency": 1,
      "goal": "gain_strength"
  },
  {
      "id": 149,
      "user_id": "DemoMan1",
      "exercise_id": 2,
      "frequency": 1,
      "goal": "gain_strength"
  },
  {
      "id": 150,
      "user_id": "DemoMan1",
      "exercise_id": 9,
      "frequency": 1,
      "goal": "gain_strength"
  },
  {
      "id": 151,
      "user_id": "DemoMan1",
      "exercise_id": 10,
      "frequency": 1,
      "goal": "gain_strength"
  },
  {
      "id": 152,
      "user_id": "DemoMan1",
      "exercise_id": 21,
      "frequency": 1,
      "goal": "gain_strength"
  },
  {
      "id": 153,
      "user_id": "DemoMan1",
      "exercise_id": 19,
      "frequency": 1,
      "goal": "gain_strength"
  },
  {
      "id": 154,
      "user_id": "DemoMan1",
      "exercise_id": 30,
      "frequency": 1,
      "goal": "gain_strength"
  },
  {
      "id": 155,
      "user_id": "DemoMan1",
      "exercise_id": 29,
      "frequency": 1,
      "goal": "gain_strength"
  },
  {
      "id": 156,
      "user_id": "DemoMan1",
      "exercise_id": 31,
      "frequency": 1,
      "goal": "gain_strength"
  },
  {
      "id": 157,
      "user_id": "DemoMan1",
      "exercise_id": 32,
      "frequency": 1,
      "goal": "gain_strength"
  },
  {
      "id": 158,
      "user_id": "DemoMan1",
      "exercise_id": 35,
      "frequency": 1,
      "goal": "gain_strength"
  },
  {
      "id": 159,
      "user_id": "DemoMan1",
      "exercise_id": 44,
      "frequency": 1,
      "goal": "gain_strength"
  },
  {
      "id": 160,
      "user_id": "DemoMan1",
      "exercise_id": 53,
      "frequency": 1,
      "goal": "gain_strength"
  },
  {
      "id": 161,
      "user_id": "DemoMan1",
      "exercise_id": 54,
      "frequency": 1,
      "goal": "gain_strength"
  },
  {
      "id": 162,
      "user_id": "DemoMan1",
      "exercise_id": 58,
      "frequency": 1,
      "goal": "gain_strength"
  },
  {
      "id": 163,
      "user_id": "DemoMan1",
      "exercise_id": 64,
      "frequency": 1,
      "goal": "gain_strength"
  }
  ]
}


function cleanTables(db) {
  return db.transaction(trx =>
    trx.raw(
      `TRUNCATE
      exercise_plan, 
      users,
      exercises
      `
    )
  )
 
}

function seedUsers(db, users) {
  const preppedUsers = users.map(user => ({
    ...user,
    password: bcrypt.hashSync(user.password, 1)
  }))
  return db.into('users').insert(preppedUsers)
    .then(() =>
      db.raw(
        `SELECT setval('users_id_seq', ?)`,
        [users[users.length - 1].id],
      )
    )
}



function seedPlans (db, plans){
  
  return db.into('exercise_plan').insert(plans)
    .then(() => 
      db.raw(
        `SELECT setval('exercise_plan_id_seq', ?)`,
        [plans[plans.length -1].id]
      )
    )

  
}

function seedExercises (db, exercises){
  
  return db.into('exercises').insert(exercises)
    .then(() => 
      db.raw(
        `SELECT setval('exercise_plan_id_seq', ?)`,
        [exercises[exercises.length -1].id]
      )
    )

  
}

function makeAuthHeader(user, secret = process.env.JWT_SECRET) {
  const token = jwt.sign({ user_id: user.id }, secret, {
    subject: user.user_name,
    algorithm: 'HS256',
  })
  return `Bearer ${token}`
}

function makeExerciseFixtures(){
  const testUsers = makeUsersArray()
  const testExercises = makeExercisesArray()
  const testPlans = makeExercisePlanArray()
  return {testUsers, testExercises, testPlans}
}

function findMyExercises(freq, exercise, goals, oldList) {
    let newList = []

    for (let i = 0; i < oldList.length; i++){
      
      if (oldList[i].exercise_priority <= freq && (oldList[i].equipment_value === 1 || oldList[i].equipment_value === Number(exercise)) ){
        
        
        for (let [key, value] of Object.entries(oldList[i])) {
            if(`${key}: ${value}` === goals ){
              newList.push(oldList[i])
            }
          }

      } 
    }
    return newList
  }

module.exports ={
  makeUsersArray,
  cleanTables,
  seedUsers,
  makeAuthHeader,
  makeExercisesArray,
  makeExerciseFixtures,
  seedPlans,
  seedExercises,
  findMyExercises
}
var admin = require("firebase-admin");
var serviceAccount = require("./config/tidedemo-96abf-firebase-adminsdk-credentials");

const idToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjMxZDZlYTVhYzVkMWMyZDQ2MDYyYTZlYTExNWE5M2Y4OTMxZDYxM2YifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdGlkZWRlbW8tOTZhYmYiLCJuYW1lIjoiRXJuZXN0byBMYXZhbCIsInBpY3R1cmUiOiJodHRwczovL2xoNS5nb29nbGV1c2VyY29udGVudC5jb20vLXBxT0NHcWlIVW9nL0FBQUFBQUFBQUFJL0FBQUFBQUFBQU1VL2Nub2NoZmJmcXBnL3Bob3RvLmpwZyIsImF1ZCI6InRpZGVkZW1vLTk2YWJmIiwiYXV0aF90aW1lIjoxNTE1MjQwMDAzLCJ1c2VyX2lkIjoiTTBxRXV3dDJaaWFBQ2ZUWjl0V2lwRTBMYnRFMyIsInN1YiI6Ik0wcUV1d3QyWmlhQUNmVFo5dFdpcEUwTGJ0RTMiLCJpYXQiOjE1MTUyNzQ3NjgsImV4cCI6MTUxNTI3ODM2OCwiZW1haWwiOiJlcm5lc3RvLmxhdmFsQHRpZGUuY2wiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNzIzMTcyOTEwMjY2OTYzODY4NiJdLCJlbWFpbCI6WyJlcm5lc3RvLmxhdmFsQHRpZGUuY2wiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.eb78Fc45hvNUi-igJXvFwY2ADZWzfpsjSt8vGk3DvjdGYugDPFnB2gQNktNU9WnqYeWMLUX0x4WIrbAcotq9nX38kG-0Rl5L_MR4Gx2jnKm4rQ-nEgSFS5-uyv4UE2nTT82nmqobkFKvM6tHX8D37yTnHuIL-KtqWQbpEH3lHAegh76Dz9ZrFLgOqeHaQQDNsvkuKV3i4NZptwaRcIh9HQTfpn-XPvT7oeDtoGAVQOqHPC6F74lZKvTIFbSRo8fOWVWaRoDRyQrKL8OfmvK1L6etHrx1t4F_Qikko8uXm7C2PZ-CbH1tSgzZEiGTwllGUrvgY-PB-ygz1VKZL_dUNg";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

admin.auth().verifyIdToken(idToken)
  .then(function(decodedToken) {
    var uid = decodedToken.uid;
    console.log('User ID', uid);
    console.log(decodedToken);
  }).catch(function(error) {
    console.log(error);
  });
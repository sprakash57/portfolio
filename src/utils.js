export const googleMapAPI = "AIzaSyCpnOUeoAn9tuAIE6nmf3teA9oLuPpR2eE";

export const weatherAPI = "b16f2ce13b743124891d61551c569230";

export const myResume = "https://drive.google.com/open?id=1LKq_ujqCk0-35mj9kfYKttEKVMvnAIo2";

export const staticMap = `https://www.google.com/maps/embed/v1/place?key=AIzaSyD1A_BRWOpUt21Ze3jvLvFCq-shAoujii0&q=18.60372692298375, 73.73677968978883&zoom=9`;

export const placeConfig = {
  provider: 'google',
  httpAdapter: 'https', // Default
  apiKey: googleMapAPI, // for Mapquest, OpenCage, Google Premier
  formatter: 'json' // 'gpx', 'string', ...
};

export const formatTime = (time) => {
  const date = new Date(time * 1000);
  let hh = date.getHours();
  let mm = date.getMinutes();

  if (hh < 10) hh = `0${hh}`;
  if (mm < 10) mm = `0${mm}`;
  if (hh > 12) {
    hh = hh - 12;
    return hh !== 11 ? `0${hh}:${mm} PM` : `${hh}:${mm} PM`
  }
  return `${hh}:${mm} AM`;
};
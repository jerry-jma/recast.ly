import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  // TODO
  var queryObj = {q: query, api: YOUTUBE_API_KEY};
  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: queryObj,
    success: (videos) => {
      callback(videos);
    },
    error: () => { console.error('youtube fetch error'); }
  });
};

export default searchYouTube;

"use strict";
exports.__esModule = true;
exports.getYouTubeThumbnail = exports.getYouTubeId = void 0;
// utils/youtube.ts
function getYouTubeId(url) {
    var match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : '';
}
exports.getYouTubeId = getYouTubeId;
function getYouTubeThumbnail(url) {
    var id = getYouTubeId(url);
    return id ? "https://img.youtube.com/vi/" + id + "/maxresdefault.jpg" : '';
}
exports.getYouTubeThumbnail = getYouTubeThumbnail;

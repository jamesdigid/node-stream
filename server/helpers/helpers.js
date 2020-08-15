const { spawn } = require('child_process');
const config = require('../config/default');

const generateStreamThumbnail = (stream_key) => {
    const cmd = config.rtmp_server.trans.ffmpeg;

    const args = [
        '-y',
        '-i', 'http://'+config.server.host+':8888/live/'+stream_key+'/index.m3u8',
        '-ss', '00:00:01',
        '-vframes', '1',
        '-vf', 'scale=-2:300',
        'server/thumbnails/'+stream_key+'.png',
    ];

    spawn(cmd, args, {
        detached: true,
        stdio: 'ignore'
    }).unref();
};


module.exports = {
    generateStreamThumbnail : generateStreamThumbnail
};


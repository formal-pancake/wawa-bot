require('dotenv').config();

module.exports = {
    apps: [{
        name: "Wawa",
        script: '.index.js',
        watch: './',
    }],

    deploy: {
        production: {
            user: 'pi',
            host: process.env.SERVER_IP,
            ref: 'origin/main',
            repo: 'git@github.com:***REMOVED***/wawa-bot.git',
            path: '/home/pi/bots/wawa',
            'pre-deploy-local': '',
            'post-deploy': 'npm install && pm2 reload ecosystem.config.cjs',
            'pre-setup': '',
            env: {
                TOKEN: process.env.TOKEN,
            }
        }
    }
};
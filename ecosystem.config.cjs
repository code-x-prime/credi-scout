module.exports = {
    apps: [
        {
            name: "credi-scout",
            script: "pnpm",
            args: "start",
            cwd: "/root/credi-scout",
            env: {
                NODE_ENV: "production",
                PORT: 7016
            }
        }
    ]
};
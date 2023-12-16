// Change this for PM2 as needed

module.exports = {
    apps: [
      {
        name: 'webhook-github',
        script: 'webhook',
        args: '-hooks /path/to/your/project/.git/hooks/custom-hooks.json -verbose -port 9001',
        interpreter: 'none',
      },
    ],
  };
  
## Setting Up GitHub Webhook for Auto Deployment

This project uses a GitHub webhook to automatically deploy changes committed to the repository on Linux. To set this up:

1. **Create a Webhook on GitHub:**
   - Go to your GitHub repository.
   - Navigate to `Settings` > `Webhooks`.
   - Click `Add webhook`.
   - In `Payload URL`, enter the URL where your server is hosted followed by the port number specified in your webhook script (e.g., `http://example.com:9001`).
   - Select `application/json` for the content type.
   - In `Secret`, enter a secure, random string. This will be used to validate received payloads.
   - Choose which events you would like to trigger this webhook.
   - Click `Add webhook`.

2. **Configure Your Server:**
   - Place the `deploy.sh` script in your server's desired directory. This script should contain commands to pull the latest changes from your repository and restart your application.
   - Ensure that `deploy.sh` has the necessary permissions to execute (`chmod +x deploy.sh`).
   - Update the `custom-hooks.json` file with the path to your `deploy.sh` script and your secret token.
   - Place `custom-hooks.json` in the `.git/hooks` directory.

3. **Setting Up PM2:**
   - Use the `ecosystem.config.js` file to configure PM2 for managing your webhook listener.
   - Start the webhook listener using PM2: `pm2 start ecosystem.config.js`.
   - Ensure PM2 restarts automatically on reboot: `pm2 startup`.

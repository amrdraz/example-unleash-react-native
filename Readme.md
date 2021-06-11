# Example Unleash React Native App

To try it out open 2 terminals, and start the expo app and proxy server

Start Expo app

```
cd app
yarn install
yarn start
```

Start Proxy Server

```
cd proxy
yarn install
yarn start
```

### Try App Over Web

You can preview the app by typing `w` in the expo terminal to see the web instance. You can edit the `demoApp.step1` in [the demo site](https://app.unleash-hosted.com/demo/api/)

### Try App Over Phone

You can scan the QR code using the expo app.
You will need to expose your localhost over the internet. I recommend ngrok.

```
ngrok http 3000
```

Then change the url in App.tsx

## Trying with your own unleash instance

1. run `docker compose up -d`
2. go to [`https://localhost:4242`](https://localhost:4242)
3. login with default user

```
user       admin
password   unleash4all
```

4. Create a Feature flag
5. Create an API key
6. update you docker-compose.yml `UNLEASH_API_TOKEN` with your token

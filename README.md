This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## DEMO: Send Real-time notifications


### Technologies

- Zustand
- Material UI
- Socket IO
- NextJS


You can see all devices are connected in our application and send a real-time custom notification 

![](https://user-images.githubusercontent.com/62184285/285294580-a42c2d24-ee19-4190-9999-23237c2a5bdb.gif)


However, the app is able to detect when a new device is connected or disconnected.

![](https://user-images.githubusercontent.com/62184285/285294588-f4f97a1e-7927-4a0f-a6d4-154026189ce0.gif)



## React Native 

These functionalities can also coexist with a native application, since we can consume them from our app. [Visit my project](https://github.com/oscarfarias/react-native-socket-alert-notifications)

### Don't forget

In both projects you must put the .env file

SOCKET_CLIENT = your local ip address for example

```bash
NO_FLIPPER=1
SOCKET_CLIENT=http://192.168.1.100:3000
SOCKET_CLIENT_PATH=/api/socketio
```


![](https://user-images.githubusercontent.com/62184285/285442128-f293b766-90e4-4a76-a99c-dbb5e8bfabb7.gif)
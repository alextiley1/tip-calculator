# Tip Calculator

This is a react native tip calculator that allows you to quickly and easily work out what your bill should be.
![Alt text](/screenshots/screenshot/calculator.png "Optional Title")

I created this app to test out react native.

## Dependancies

- NodeJs
- Yarn
- React Native
- Expo
- xCode
- Android Studio
- I like to use GenyMotion as my Android emulator

## Installation

- [Clone](https://github.com/alextiley1/tip-calculator.git) this repository to your machine

- Install dependancies:

```bash
yarn
```

## Usage

### Android

- Ensure you have an Android emulator running or a connected device, then run:

```bash
yarn android
```

if you are using Genymotion as your emulator, you need to ensure your android SDK is your global sdk and not Genymotions flavour, to change this open GenyMotion's preferences, go to the ADB tab and update the path to `/Users/[your-username]/Library/Android/sdk`, if you are on linux or a mac, any you should be good to go.

### iOS

- Ensure you have an iOS emulator running or a connected device, then run:

```bash
yarn ios
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Testing: TODO

## License

[MIT](https://choosealicense.com/licenses/mit/)

# Tip Calculator

This is a react native tip calculator that allows you to quickly and easily work out what your bill should be.

I created this app to test out react native.

![screenshot](/screenshots/calculator.png 'screenshot')

## Dependencies

- Node.js 20.19+ (22 LTS recommended)
- Yarn 1.x
- [Expo](https://docs.expo.dev/) (SDK 58, React Native 0.88, React 19)
- Xcode (for iOS builds) / Android Studio (for Android builds)

## Installation

- [Clone](https://github.com/alextiley1/tip-calculator.git) this repository to your machine

- Install dependencies:

```bash
yarn
```

## Usage

### Development server

```bash
yarn start
```

Scan the QR code with Expo Go, or press `a` / `i` / `w` to open Android, iOS or web.

### Native builds

The `android/` and `ios/` folders are generated on demand by `expo prebuild` and are not committed.

```bash
yarn android   # builds and runs on an Android emulator / device
yarn ios       # builds and runs on an iOS simulator / device
```

### Web

```bash
yarn web
```

### Checks

```bash
yarn test       # Jest + React Native Testing Library
yarn lint       # ESLint (eslint-config-expo + Prettier)
yarn typecheck  # TypeScript
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

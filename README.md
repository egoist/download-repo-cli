# download-repo-cli [![NPM version](https://img.shields.io/npm/v/download-repo-cli.svg)](https://npmjs.com/package/download-repo-cli) [![NPM downloads](https://img.shields.io/npm/dm/download-repo-cli.svg)](https://npmjs.com/package/download-repo-cli) [![Build Status](https://img.shields.io/circleci/project/egoist/download-repo-cli/master.svg)](https://circleci.com/gh/egoist/download-repo-cli)

> CLI tool to download GitHub repo.

## Install

```bash
$ npm install -g download-repo-cli
```

## Usage

```bash
$ download-repo reactjs/redux

$ download-repo https://github.com/egoist/tooling

$ download-repo git@github.com:egoist/nwjs.git

$ download-repo https://github.com/egoist/testen.git

# advanced

# by tag
$ download-repo reactjs/redux -t v4.0.0

# by branch
$ download-repo reactjs/redux -b next

# custom location
$ download-repo reactjs/redux -o ~/my-redux-copy
```

## Help

```bash
$ download-repo -h

CLI tool to download GitHub repo.

Usage:

  download-repo [repo|url]

  -o/--output     Output name, relative or absolute
  -t/--tag        Download by tag
  -b/--branch     Download by branch
  -v/--version    Print version
  -h/--help       Print help
```

## Related

- [download-repo](https://github.com/egoist/download-repo) - API of this module

## License

MIT © [EGOIST](https://github.com/egoist)

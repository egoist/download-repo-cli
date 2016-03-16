#!/usr/bin/env node
'use strict'
const meow = require('meow')
const update = require('update-notifier')
const main = require('./')
require('colorful').toxic()

const cli = meow(`
  ${`Usage:`.bold}

    download-repo [repo|url]

    -o/--output     Output name, relative or absolute
    -t/--tag        Download by tag
    -b/--branch     Download by branch
    -v/--version    Print version
    -h/--help       Print help
`, {
  alias: {
    v: 'version',
    h: 'help',
    t: 'tag',
    b: 'branch',
    o: 'output'
  }
})

update({pkg: cli.pkg}).notify()

main(cli).catch(e => console.log(e.stack.red))

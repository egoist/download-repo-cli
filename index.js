'use strict'
const path = require('path')
const co = require('co')
const gitUrlParse = require('git-url-parse')
const download = require('download-repo')
const kebabCase = require('lodash.kebabcase')
const figures = require('figures')

module.exports = co.wrap(function* (cli) {
  // get repo
  const repo = cli.input[0]

  // ensure repo
  if (!repo) {
    console.log('[Error] Expect repo slug!')
    return
  }

  // parse repo, get slug
  const parsed = gitUrlParse(repo)
  const slug = parsed.owner ? `${parsed.owner}/${parsed.name}` : repo

  // get branch ang tag
  const branch = cli.flags.branch
  const tag = cli.flags.tag

  // parse target and dir
  const output = cli.flags.output || `./${kebabCase(slug)}`
  const target = path.basename(output)
  const dir = path.dirname(output)

  // actually download now
  yield download(slug, {branch, tag, target, dir})

  // print success
  console.log(`${figures.tick.green} Done! cd ${output.cyan} to check it out.`)
})

'use strict'
const merge = 'webpack-merge')
const prodEnv = './prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})

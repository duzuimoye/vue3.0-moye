const fs = require('fs')
const path = require('path')

let packageJSON = JSON.parse(
  fs.readFileSync(path.resolve('package.json'), 'utf-8')
)
const AppVersion = packageJSON.version
const CanNotRefused = packageJSON.canNotRefused
const AppBuildTimestamp = new Date().getTime()
const HasCheckCount = 1
const isProd = process.env.npm_config_master

let staticPath = path.join(__dirname, isProd ? '../prod' : '../test')
let versionJson = {
  AppVersion,
  AppBuildTimestamp,
  HasCheckCount,
  CanNotRefused
}
console.log('开始写入版本管理')

function writeVersionToJson() {
  fs.writeFile(
    `${staticPath}/version.json`,
    JSON.stringify(versionJson, null, 2),
    'utf8',
    error => {
      if (error) {
        console.error(error)
        return false
      }
      console.log('version.json版本管理写入完成')
    }
  )
}

function writeVersionToIndex() {
  let data = fs.readFileSync(`${staticPath}/index.html`, 'utf-8')
  let versionHtml = data.replace(
    '</body></html>',
    `<script>window.AppVersion = "${AppVersion}";window.AppBuildTimestamp = ${AppBuildTimestamp};window.HasCheckCount = ${HasCheckCount};</script></body></html>`
  )
  fs.writeFile(`${staticPath}/index.html`, versionHtml, 'utf8', error => {
    if (error) {
      console.error(error)
      return false
    }
    console.log('index.html版本管理写入完成')
  })
}

writeVersionToJson()
writeVersionToIndex()

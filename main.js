const {app, BrowserWindow, Menu} = require('electron')
const url = require("url");
const path = require("path");

const {menuTemplate, isMac} = require('./electron/menuTemplate');

// Create the menu from the menuTemplate and set the menu as the application menu
const menu = Menu.buildFromTemplate(menuTemplate);
Menu.setApplicationMenu(menu);

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minHeight: 600,
    minWidth: 320,
    webPreferences: {
      nodeIntegration: true,
      preload: __dirname + '/preload.js'
    }
  })

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/workout-timer-electron/index.html`),
      protocol: "file:",
      slashes: true
    })
  );

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (!isMac) app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})

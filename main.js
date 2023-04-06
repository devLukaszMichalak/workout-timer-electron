const {app, BrowserWindow, Menu, dialog} = require('electron')
const url = require("url");
const path = require("path");

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

  // Create the menu from the menuTemplate and set the menu as the application menu
  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})

const menuTemplate = [
  {
    label: 'File',
    submenu: [
      {role: 'quit'}
    ]
  },
  {
    label: 'Edit',
    submenu: [
      {
        label: 'Reset timer', click: () => {
          const win = BrowserWindow.getFocusedWindow();
          win.webContents.send('reset-timer-item-clicked');
        }
      }
    ]
  },
  {
    label: 'Help',
    submenu: [
      {
        label: 'About', click: () => {
          const {version, author} = require('./package.json');
          const message = `Workout Timer v${version}\n\nCreated by ${author.name}`;
          dialog.showMessageBox({title: 'About', message: message, buttons: ['OK']});
        }
      }
    ]
  }
];

//if mac add empty object to menu
if (process.platform === 'darwin') {
  menuTemplate.unshift({})
}

const {app, BrowserWindow, shell, dialog} = require('electron');

const isMac = process.platform === 'darwin'

const aboutMenuItem = {
  label: 'About Workout Timer',
  click: () => {
    const message = `Workout Timer v1.0.0\n\nCreated by Łukasz Michalak`;
    dialog.showMessageBox({title: 'About', message: message, buttons: ['OK']});
  }
}

const resetTimerMenuItem = {
  label: 'Reset timer',
  accelerator: 'CmdOrCtrl+R',
  click: () => {
    const win = BrowserWindow.getFocusedWindow();
    win.webContents.send('reset-timer-item-clicked');
  }
}

const sourceCodeMenuItem = {
  label: 'Source code',
  click: async () => {
    await shell.openExternal('https://github.com/devLukaszMichalak/workout-timer-electron')
  }
}

const menuTemplate = [
    {
      label: 'File',
      submenu: [
        isMac ? {role: 'close'} : {role: 'quit'},
      ]
    },
    {
      label: 'Edit',
      submenu: [resetTimerMenuItem]
    },
    {
      role: 'help',
      submenu: [
        sourceCodeMenuItem,
        ...(!isMac ? [aboutMenuItem] : [])
      ]
    }
  ]

if (isMac) {
  menuTemplate.unshift({
    label: app.name,
    submenu: [
      aboutMenuItem,
      {role: 'quit'}
    ]
  })
}

module.exports.menuTemplate = menuTemplate;
module.exports.isMac = isMac;

'use strict';

const electron = require('electron');
const os = require('os');
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

var http = require('http')
var port = 8888,
    host = 'localhost'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
const exec = require('child_process').exec;
const ipcMain = require('electron').ipcMain;
ipcMain.on('start teamViewer', function(event, arg) {

  // console.log('__dirname', __dirname);
  // var cmd = 'open -n '+__dirname+'/../app/TeamViewerQS.app --args -AppCommandLineArg';
  //
  // exec(cmd, function(error, stdout, stderr) {
  //   console.log(error, stdout, stderr);
  // });

  var cmd = 'open -n '+__dirname+'/TeamViewerQS.app --args -AppCommandLineArg';

  exec(cmd, function(error, stdout, stderr) {
    console.log(error, stdout, stderr);
  });

  event.returnValue = 'success';
  return;
});

function createWindow () {
  // Create the browser window.
  // you can use any webserver library/framework you like (connect, express, hapi, etc)
  // var server = http.createServer(function(req, res) {
  //   // You can respond with a status `500` if you want to indicate that something went wrong
  //   res.writeHead(200, {'Content-Type': 'application/json'});
  //   // data passed to `electronWorkers.execute` will be available in req body
  //   res.end('Hello New York\n');
  //   console.log(req);
  //   req.pipe(res);
  // });
  //
  // server.listen(port, host);
  // console.log('=== server start ===');

  // var cmd = 'open -n ./TeamViewerQS.app --args -AppCommandLineArg';



  mainWindow = new BrowserWindow({width: 1200, height: 768});

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // Open the DevTools.
  mainWindow.webContents.openDevTools();



  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }




});

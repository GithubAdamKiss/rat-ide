import { BrowserWindow, ipcMain } from "electron";

const WindowFunc = (mainWindow: BrowserWindow) =>{

    ipcMain.on('btn-minimize',  async(event, arg)=>{
        event.preventDefault();
        mainWindow.minimize();
    })

    ipcMain.on('btn-maximize',async (event, arg)=>{
        event.preventDefault();
        if(!mainWindow.isMaximized()){
            mainWindow.maximize();
            return;
        }
        mainWindow.restore();
    })

    ipcMain.on('btn-close',async  (event, arg)=>{
        event.preventDefault();
        mainWindow.close();
    })

}


export default WindowFunc 
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import type { ContextBridge } from '@common/ContextBridge';
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('ContextBridge', {
  onNativeThemeChanged: (callback: () => void) => ipcRenderer.on('nativeThemeChanged', callback),
  themeShouldUseDarkColors: () => ipcRenderer.sendSync('themeShouldUseDarkColors'),
} as ContextBridge);

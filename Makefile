deploy:
	- rm -rf ~/Desktop/electron-quick-start-linux-x64
	cp -r electron-quick-start-linux-x64 ~/Desktop/electron-quick-start-linux-x64
	- sudo rm -rf /media/sf_demo/electron-quick-start-win32-x64
	sudo cp -r electron-quick-start-win32-x64 /media/sf_demo

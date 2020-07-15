---
title: Private Server General
toc: true
toc_label: "Table of Contents"
toc_icon: "cog"
toc_sticky: true
---
**Please read the instructions through once before beginning!**

We have tested this old client and it has bugs! These instructions, if followed, will help you avoid most common issues entirely!

## Getting Started

### Download Client
* [Create an Account](http://54.172.9.103/)
* Download the client for your PC
  * [Windows Client](https://drive.google.com/file/d/1KvKwGyeNcCEJEOeMhtYAgTQAg0Ih9asS/view?usp=sharing)
  * [Mac Client](https://drive.google.com/file/d/1ZJALMdm4kXjZ4VIXMsFWTfiUZXiSRSIe/view?usp=sharing)
  
*The realmlist is already set in these clients but if you already have a client set your realmlist to: 54.172.9.103*


### Run Your Client
* Unzip your client anywhere you like, just remember where it is!
* Run WoW on Microsoft Windows
  * Simply Run WoW.exe
* Run WoW on Mac
  * Right click World of Warcraft.app, it opens as a folder
  * Open the Contents folder, then the MacOS folder 
  * You will see a file called World of Warcraft, run it
* If asked to update hardware changes I recommend choosing 'No'
* Under Addons choose 'Enable out of date addons'

### :skull: Windows Bug Alert (Black Screen)!
* Exit the client, do not create a character yet!
* In your WoW client directory, open the file **WTF\Config** with notepad
* At the bottom of the file, on a new line, add the entry
* ```SET gxWindow "1"```
* Save and exit the file

### Create Your Character
* Start your client
* Create your character
* After first login, exit client and restart
 * this is a required step to update your stats after getting instant 60!
 
### Change Your Graphics Settings
* Hit Escape -> Video Settings
* If you monitor has a resolution greater than 1080p you will need to play in windowed mode!
  * Choose windowed mode and clicl 'apply'
  * Set the game resolution and refresh rate to match your desktop
  * Under multisampling choose 24 bit color and depth. For best quality choose 8x for performance choose 1x
  * If you want to play full screen, select the 'maximized' box
* All other settings are personal pref, I always disable 'full screen glow' shader
* Click 'apply'
 
### QoL Interface Settings
 * Hit Escape -> Interface Options -> Basic Tab
   * Adjust Mouse sensitivity if needed
   * Select Auto Self Cast
   * Select Enhanced Tooltips
   * Select Player Guild Names and Player Titles
   * Show or hide Helm/Cloak if desired
   * Select Instant Quest Text
   * Select Buff Durations
   * I prefer Camera Follow Sytle: Never
   * Adjust Mouse Look Speed and Max Camera Distance
 * Hit Escape -> Interface Options -> Advanced Tab
   * Under Raid and Party select Show Target of Target: Always
   * All other options here are personal pref
 
### Gearing Up
 * There are vendors behind where you first zone into Ironforge
  1. Train your weapons at the guy who looks like Herod
  2. Train and buy a mount from the Pack Mule
  3. Train your ablilities at your class trainer
  4. Learn your talents
  5. Gear is purchasable from your class trainer
  6. Goblins near the Mule do librams/enchants
  7. Pick up consumes and professions from the second pair of goblins

### Tips
* Ony bags can be purchased from the 'Miscellaneous' Goblin
* Filter out unavailable skills at your trainer so you can spam-click learn

## Troubleshooting
* You can exit your client and safely delete WDB, WTF, and Interface folders but beware this will remove your binds and addons.
* If you need to preserve your keybinds backup the file WTF\Account\<youraccount>\bindings-cache.wtf
* If that does not solve your issue please contact Hatredcopter on Discord.

### Full Repair Settings for Mac client not from my link
1. Change the name of WoW Classic.app to World of Warcraft.app
2. Delete the WDB folder
3. In the WTF folder, delete the Config.wtf file
4. Make sure that the World of Warcraft folder is read.write, including subfolders. GetInfo can do this.
5. Check that realmlist.wtf file only contains set realmlist logon.symmetrywow.com and that it has not acquired a .txt ending
6. Right click World of Warcraft.app, it opens as a folder. Open the Contents folder, then the MacOS folder. You will see a file called World of Warcraft
7. Right click that file, WoW should open as well as Terminal
8. If that works, make an alias of the World of Warcraft file and put it somewhere handy, easier than opening the package.

## Security
**Do not use your actual WoW info on the pserver!!!**

Here is my Checksum dump of the windows client:
```
PS C:\fciv> .\fciv.exe -md5 -sha1 "F:\Vanilla_WoW\World of Warcraft\WoW.exe"
//
// File Checksum Integrity Verifier version 2.05.
//
                MD5                             SHA-1
-------------------------------------------------------------------------
ccf83146dbb3d10ef826aa4de178a5be 893def24f703fd18c1514d31b92f00e616d8375f

Checksums for clients (Windows)
MD5:

ccf83146dbb3d10ef826aa4de178a5be WoW 1.12.1.exe

57c5c03097103e15f9abe2803aebdc3c Wow 2.4.3.exe

45892bdedd0ad70aed4ccd22d9fb5984 Wow 3.3.5a.exe

SHA-1:

893def24f703fd18c1514d31b92f00e616d8375f WoW 1.12.1.exe

a802af90d44c08875fa6949239044afa1a488f92 Wow 2.4.3.exe

178f78380affd260cb775d44397ba6b33ac05fdb Wow 3.3.5a.exe

SHA-256:

b4756d38ef207c02ed651f4952bd89a70b4857b73a33413339e1b285b28d2dc7 WoW 1.12.1.exe

8f8d7f4cf3909e61fd34b09df9c9b56c21aec76a9ad1883353f1fa5d9b8411e2 Wow 2.4.3.exe

aa63a5750d60ef16746c686b3d5e26876d98953eab08b1c026cd0faf78e88cb8 Wow 3.3.5a.exe
```

Still looking for Mac checksums. I also hooked up Wireshark to the client to make sure nothing funny was going on and it was clean. I am hosting the clients I have up on my personal google drive with 2FA so they should be totally clean. If anyone got clients from somewhere else I would check them out before using.

The only inbound ports open on the server side are WoW ports and I scanned it for outgoing nonsense and I ran it through an open source malware scanner (the github source) and found nothing suspicious.

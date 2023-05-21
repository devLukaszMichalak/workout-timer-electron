[Setup]
AppName=Workout Timer
AppVersion=1.0.2
AppPublisher=devLukaszMichalak
DefaultDirName={pf}\Workout Timer
DefaultGroupName=Workout Timer

[Files]
Source: "C:\Users\michalakl1\IdeaProjects\workout-timer-electron\out\Workout Timer-win32-x64\*"; DestDir: "{app}"; Flags: recursesubdirs

[Icons]
Name: "{commonprograms}\Workout Timer"; Filename: "{app}\Workout Timer.exe"; IconFilename: "{app}\resources\app\icon.ico"; WorkingDir: "{app}"
Name: "{commondesktop}\Workout Timer"; Filename: "{app}\Workout Timer.exe"; IconFilename: "{app}\resources\app\icon.ico"; WorkingDir: "{app}"
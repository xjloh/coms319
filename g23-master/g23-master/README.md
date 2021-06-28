# G23

To start the project:
    -run 'npm run start' in the root directory. This should start both frontend and backend
    -Optional: if issues persist try starting directories separately in different terminal windows
        -run 'npm run start' in both frontend and backend 
        -the port number in backend/app/index.js may need altered (sometimes it starts up on a different port for some reason)
        -the command to start the frontend isn't native to Windows 10 so it will need run in git bash if you're on windows
    
If you run into issues starting the project:
    -run 'npm install' in frontend and backend directories separately to install dependecies 
    -may need to install nodemon by itself in backend folder
        -'npm i nodemon@1.17.5'
    -run 'npm i -g parcel-bundler' & 'npm install -g foreman' in the root directory (g23)
        -if you run into permission issues preceed the command with 'sudo npm ...'
        -parcel is the bundler used by our front end

Sql stuff:
    -MySQL root user password is ab91c2e7f776bd1a
        -this is for our iastate server, but I haven't transferred anything to it yet
    -I switched to using postres SQL since I had a better example to go off of
        -you'll need to install posgres then run the following commands in a command prompt(git bash didn't work for me for some reason)
            -createdb -U posrgres socyetydb
            -psql -U postgres socyetydb
        -then run the npm configure script in backend

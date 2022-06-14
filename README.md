# 🦠 🎮 COVATARS

A digital version of the **Virus!** card game built on a MERN stack.
<br />
<br />
**Developed by:** [Maxton Davidson](https://github.com/mdavidson05), [Silvia Cecin](https://github.com/Scecin), [Mario A Gonzalez Robert](https://github.com/MagoroGraphics), [Valerie Bayard](https://github.com/Vallalika)
<br />
**Graphics by:** [Mario A Gonzalez Robert](https://github.com/MagoroGraphics)


<img width="700" alt="covatars" src="https://user-images.githubusercontent.com/101068957/173205054-64841028-e4ab-4460-8eb4-a1fd13a4a1ce.png">

## Install & Run
1. Make sure you have Express, MongoDb, Node and Node Package Manager all installed.
2. Open the command line and navigate to the folder where you want to install the game.
3. Copy-paste the below in the command line:

        git clone git@github.com:Vallalika/CodeClan_Virus_Game.git

    *The app folder is now created and should be visible.*
4. Navigate to the server folder then type the below to install all required packages:

        npm i

5. Create and seed the Mongo database from the same place.

        mongo < ./db/seeds.js

6. Run the server.

        npm run server:dev
   
   *That's the dev server now running. You can check everything worked ok by copy-pasting <code> localhost:9000 </code>  in Chrome's address bar.
   <br />
   Chrome should display all game cards as json.*
 
7. Open a new terminal window, leaving the dev server running.

8. Navigate to the client folder and install all required packages:

        npm i
         
9. Start the node server

        npm start
        
   *Chrome will now open and show the starting screen of the game. **Enjoy!*** 😊
   
<hr />

⚠ **Getting a black screen referring to handSelect.js in Chrome?**


If you get the above error, navigate to client/src/components and rename handSelect.js by **H**andSelect.js.
Go back to Chrome and refresh the browser. That should be it working now!

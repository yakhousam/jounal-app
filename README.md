# journal-app
https://journalapp-yakhousam.herokuapp.com/

# The frontend of the app is stored here
https://github.com/yakhousam/chingu-journal-app

I made a big mistake. I didn't folow the chingu advice whene they say use the technologie that you know better.
Few days before the prework starts, I know a little bit react so I started learning react hook and nextjs and since I have somme backend experience when I build this project https://mflix-yakhousam.herokuapp.com/ I said let mix all this things together and  a week after prework starts I build this https://github.com/yakhousam/journal-app whith nextjs and evrething works perfectly localy ( authentication CRUD opertations) so befor styling I tried to deploy the project to zeit whith (now) and that was a nightmare. I waste 3 days trying many configurations I found in google before I understand that what I used for my project is a custom server build whith express and I use passport to manage authenication and that why the deployement faild because zeit switched from now 1 to now 2 and that they don't support custom server or maybe I am wrong I do not know.
So what I did is split the project in tow parts backend and frontend and even the frontend in two parts auth and client because I didn't know how to redirect after authentication with react I guess I have to use react route but since the time is running out and after two days or three of sleeping just a few hours I came with this solution I just serve two different files, the login page if the user is not authenticated and the journal page when the user is authenticated and manage the authentication in the server side.

I apologize
the code is durty (lot off code commented and need to be refactored)
also the login with github doesn't work whene I submited the project I do not know why. I did the same things I did with my mflix project but this time it doesn't work I do not have time to fixe it since I deployed the project a few minites befor the deadline

Thank you Chingu team
sory for my bad english


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Purpose

The intent of this project is two-fold. There are two types of users the app should work for.<br>
1. Private lesson instructors should be able to use this app to easily add themselves to the job pool for any directors who are seeking teachers for their students.<br>
2. Directors should be able to easily find private lesson instructors to hire for their programs.

### User Features - Lesson Instructors
1. Be able to create a profile that lists their area of specialization (voice, violin, trumpet, etc.)<br>
2. Be able to show the area in which they are available to teach <br>
3. Be able to upload a photo to use as a profile picture<br>
4. Be able to make connections with other teachers who they know or have worked with in the past<br>

### User Features - Directors

1. Be able to search their local area for instructors based on instrument specialization listed on the instructors profile (voice, violin, trumpet, etc.)<br>
2. Be able to make connections with other teachers who they know or have worked with in the past<br>
3. Be able to view mutual connections between instructors and other teachers<br>
4. Be able to add endorsements to an instructors profile<br>

### Front-End

**User: private lesson instructor**
1. The user should be able to create a profile with information such as a profile picture, short bio, instrument played, location, etc.
2. The user should be able to see other teachers in their area and make connections, both with private instructors and directors

**User: directors**
1. The user should be able to create a profile with information such as a profile picture, short bio, school employed at, type of instructor they are looking for, etc.
2. The user should be able to see other teachers in their area and make connections
3. The user should be able to search for specific instruments (voice, violin, trumpet, etc.)

### Back-End

1. Server should connect to a database that stores user profiles with user objects containing information relevant to the front end 
2. Server should be able to respond to various calls such as GET, POST, and PUT
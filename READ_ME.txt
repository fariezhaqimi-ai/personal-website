========================================================================
             PERSONAL WEBSITE TEMPLATE - FULL USER GUIDE
========================================================================

Thank you for purchasing this premium Personal Website Template!

This package contains a fully functional, mobile-responsive, and modern 
website ready for you to customize. It requires NO complex software to edit.

------------------------------------------------------------------------
   TABLE OF CONTENTS
------------------------------------------------------------------------
1. Getting Started
2. Folder Structure
3. How to Edit Text
4. How to Change Images & Videos
5. Special Features (Family Image Map & Gallery)
6. Changing Colors (The Theme)
7. How to Publish Your Website (Go Live)
8. Support

------------------------------------------------------------------------
1. GETTING STARTED
------------------------------------------------------------------------
To view the website immediately:
1. Go to the folder where you extracted these files.
2. Double-click on "index.html".
3. The website will open in your default web browser (Chrome, Edge, etc.).

------------------------------------------------------------------------
2. FOLDER STRUCTURE
------------------------------------------------------------------------
Here is what each file does:

[Root Folder]
 ├── index.html         -> The HOME page (Intro & Menu).
 ├── biodata.html       -> The "About Me" page.
 ├── education.html     -> Your academic history & results table.
 ├── experience.html    -> Your work history timeline.
 ├── achievements.html  -> Your awards & certifications list.
 ├── family.html        -> Family section with clickable photo.
 ├── gallery.html       -> Photo grid & video player.
 ├── style.css          -> Controls all colors, fonts, and layout.
 ├── script.js          -> Controls the mobile menu.
 └── assets/
      ├── images/       -> PUT YOUR PHOTOS HERE.
      └── videos/       -> PUT YOUR VIDEOS HERE.

------------------------------------------------------------------------
3. HOW TO EDIT TEXT
------------------------------------------------------------------------
You can edit this website using any text editor.
Recommended: Notepad (Windows), TextEdit (Mac), or VS Code (Free).

1. Right-click on the HTML file you want to edit (e.g., 'biodata.html').
2. Select "Open with" -> "Notepad".
3. Look for the placeholder text. I have marked them like this:
   [Your Name], [Job Title], [Date Range]
4. Delete the placeholder and type your real information.
5. Save the file (File > Save).
6. Refresh your web browser to see the change.

------------------------------------------------------------------------
4. HOW TO CHANGE IMAGES & VIDEOS
------------------------------------------------------------------------
METHOD A (Easiest - Replace Files):
1. Rename your own photo to "profile.jpg".
2. Drag it into the "assets/images/" folder.
3. When asked to replace the existing file, click "Yes".
4. This will automatically update the photo on the website.

METHOD B (Code Change):
1. Put your new photo (e.g., "my-face.png") into "assets/images/".
2. Open the HTML file (e.g., index.html) in Notepad.
3. Find the line: <img src="assets/images/profile.jpg">
4. Change it to: <img src="assets/images/my-face.png">
5. Save.

------------------------------------------------------------------------
5. SPECIAL FEATURES GUIDE
------------------------------------------------------------------------
A. FAMILY IMAGE MAP (family.html)
   This page has a "Clickable Image".
   1. Replace 'assets/images/family-portrait.jpg' with your own family photo.
   2. To make the clickable areas match your photo faces, you need "coordinates".
   3. Go to a free website like "imagemap-generator.com".
   4. Upload your photo and draw rectangles around the faces.
   5. Copy the numbers (coords) it gives you.
   6. Open 'family.html' in Notepad and paste those numbers into the <area> tags.

B. VIDEO PLAYER (gallery.html)
   1. Put your video file (MP4 format) in "assets/videos/".
   2. Open 'gallery.html' in Notepad.
   3. Find <source src="assets/videos/vlog.mp4">.
   4. Change 'vlog.mp4' to your video filename.

------------------------------------------------------------------------
6. CHANGING COLORS (THE THEME)
------------------------------------------------------------------------
Want to change the Pastel Pink/Coral color?

1. Open 'style.css' in Notepad.
2. Look at the top for the ":root" section.
3. Find this line:
   --accent-color: #ff878d;
4. Change the hex code (#ff878d) to any color you like (e.g., #0000FF for Blue).
5. Save and refresh.

------------------------------------------------------------------------

------------------------------------------------------------------------
. SUPPORT
------------------------------------------------------------------------
If you need help customizing this template, please contact me.

Thank you for your business!
========================================================================
# BursaryToTeamDeskBenchProject

Currently in proof of concept stage.

# Purpose 

Create a listener that checks a MongoDB database for changes. These changes are then automatically added to a Team Desk database.

# 1 . Install Node
# 2 . Run the code run in a console with node installed
# 3 . Use node "nameofffile".js to run

# Setting Up MongoDB
1 . node demo_create_mongo_db.js
2 . node demo_mongodb_createcollection.js
3 . node demo_mongodb_insert.js (Add One Record)
    node demo_mongodb_insert_multiple.js (Add multiple Records)

4 . node demo_mongodb_findloop.js (Starts Checking For Changes)

# Progress 

1. Listener can check if an entry is added. Or multiple entries(up to 300 has been tested). These additions are put into an array and used as the request body to add to the Team Desk database.
2. Listener can detect changes to an entry already made. These are put in an array (separate from new entries) and used as the request body to update the Team Desk database.
3. Listener can detect deleted entries. These are put into an array and used as the request body to delete these entries.

# Team Desk Trial Version

Link to trial database this proof of concept was tested on: https://www.teamdesk.net/secure/api/v2/66139/D2726E2C4E584B93876110EDD0279FF8/Account/Default%20View/select.json

Note: Trial uses a temporary token which expires in 14 days.


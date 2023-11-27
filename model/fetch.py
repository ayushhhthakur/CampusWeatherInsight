# import firebase_admin
# from firebase_admin import credentials, db
# import os
# import json

# # Set up Firebase credentials
# cred = credentials.Certificate({
#   "type": "service_account",
#   "project_id": os.environ.get("REACT_APP_FIREBASE_PROJECT_ID"),
#   "private_key_id": os.environ.get("REACT_APP_FIREBASE_PRIVATE_KEY_ID"),
#   "private_key": os.environ.get("REACT_APP_FIREBASE_PRIVATE_KEY").replace("\\n", "\n"),
#   "client_email": os.environ.get("REACT_APP_FIREBASE_CLIENT_EMAIL"),
#   "client_id": os.environ.get("REACT_APP_FIREBASE_CLIENT_ID"),
#   "auth_uri": os.environ.get("REACT_APP_FIREBASE_AUTH_URI"),
#   "token_uri": os.environ.get("REACT_APP_FIREBASE_TOKEN_URI"),
#   "auth_provider_x509_cert_url": os.environ.get("REACT_APP_FIREBASE_AUTH_PROVIDER_X509_CERT_URL"),
#   "client_x509_cert_url": os.environ.get("REACT_APP_FIREBASE_CLIENT_X509_CERT_URL")
# })

# # Initialize the Firebase app
# firebase_admin.initialize_app(cred, {'databaseURL': os.environ.get("REACT_APP_FIREBASE_DATABASE_URL")})

# # Replace 'your_database_node' with the actual node in your database you want to listen to
# ref = db.reference('your_database_node')

# # Function to handle changes in the database
# def on_data_change(event):
#     data = event.data
#     with open('firebase_data.json', 'w') as json_file:
#         json.dump(data, json_file, indent=2)
#     print("Data updated and saved to firebase_data.json")

# # Set up the event listener
# ref.listen(on_data_change)

# # Keep the script running to continue listening for changes
# try:
#     while True:
#         pass
# except KeyboardInterrupt:
#     print("Stopping the script...")

import firebase_admin
from firebase_admin import credentials, db
import json
import time
import os

# Initialize Firebase
cred = credentials.Certificate("model\serviceAccountKey.json")
firebase_admin.initialize_app(cred, {'databaseURL': os.environ.get("REACT_APP_FIREBASE_DATABASE_URL")})

# Reference to the root of your Firebase Realtime Database
root_ref = db.reference('/')

# Function to handle new data added to the database
def handle_new_data(event):
    data = event.data
    with open('model/firebase_data.json', 'r') as json_file:
        try:
            existing_data = json.load(json_file)
        except json.decoder.JSONDecodeError:
            existing_data = []

    # Append new data to the existing data
    existing_data.append(data)

    with open('firebase_data.json', 'w') as json_file:
        json.dump(existing_data, json_file, indent=4)
    print('New data appended and saved to firebase_data.json')

# Set up a listener for changes in the database
data_ref = root_ref
data_ref.listen(handle_new_data)

# Keep the script running to continuously listen for changes
try:
    while True:
        time.sleep(1)
except KeyboardInterrupt:
    print('Exiting...')

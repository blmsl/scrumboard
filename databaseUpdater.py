import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)
fs = firestore.client()

teamId = 'imtaPFFgbkn5PrLzwzis'
boardId = '1I3Rm5JTqOqJuY4T2ebm'

todos = fs.collection(u'teams/' + teamId + '/boards/' + boardId + '/todo').get()
for todo in todos:
    print(todo.to_dict())
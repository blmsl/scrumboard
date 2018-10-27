import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)
fs = firestore.client()

teamId = 'imtaPFFgbkn5PrLzwzis'
boardId = 'L6tuzaNSOp1aeUHGp2hZ'

boardDoc = fs.document(u'teams/' + teamId + '/boards/' + boardId)

entryCollection = boardDoc.collection('entries')

collections = ['todo', 'inProgress', 'done']

for collection in collections:
    todos = boardDoc.collection(collection).get()
    for data in todos:
        id = data.id
        todo = data.to_dict()
        todo['state'] = collection
        print(todo)
        entryCollection.document(id).set(todo)
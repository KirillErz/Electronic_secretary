from flask import Flask, jsonify, request, session
from flask_cors import CORS, cross_origin
from flask_login import (
    LoginManager,
    UserMixin,
    current_user,
    login_required,
    login_user,
    logout_user,
)
from flask_wtf.csrf import CSRFProtect, generate_csrf

app = Flask(__name__, static_folder="public")
app.config.update(
    DEBUG=True,
    SECRET_KEY="secret_sauce",
    SESSION_COOKIE_HTTPONLY=True,
    REMEMBER_COOKIE_HTTPONLY=True,
    SESSION_COOKIE_SAMESITE="Lax",
)

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.session_protection = "strong"

csrf = CSRFProtect(app)
cors = CORS(
    app,
    resources={r"*": {"origins": "http://localhost:3000"}},
    expose_headers=["Content-Type", "X-CSRFToken"],
    supports_credentials=True,
)

# database
users = [
    {
        "id": 1,
        "username": "test",
        "password": "test",
    }
]

historyArr = [
    {

  "idTemplate": 14,
  "activeRule" : True,
  "processedDoc": 150,
  "nameRule": "ГИН01",
  "numDocument": "12334211234",
  "fromDocument": "Никитин. В.В",
  "toWhomDocument": "Воронцов М.Д.",
  "summary": "Краткое содержание (ключевые слова)",
  "documentPages": "Страница документа (Ключевые слова)",
  "authorResolution": "Ерзылев Кирилл",
  "keyWordResolution": "Ерзылев Кирилл",
  "chiefUgr": True,
  "ugrAttributeResponsible": False,
  "ugrAttributeControl": True,
  "ugrAttributePlus": False,
  "ugrNoteExecutor": "что то",
  "ugrWorkDay": 0,
  "resolutions": [
    {
      "toResolution": "Суровов",
      "attributeResponsible": False,
      "attributeControl": False,
      "attributePlus": True,
      "noteExecutor": "Примечание исполнителю",
      "workDay": "100"
    },
    {
      "toResolution": "РОманов ",
      "attributeResponsible": False,
      "attributeControl": True,
      "attributePlus": False,
      "noteExecutor": "так",
      "workDay": "10"
    }
  ],
  "assignment": "",
  "assignments": [
    {
      "toAssignment": "Филимонов",
      "attributeResponsible": False,
      "attributeControl": False,
      "attributePlus": False,
      "noteExecutor": "123123",
      "workDay": 0
    },
    {
      "toAssignment": "Селина",
      "attributeResponsible": True,
      "attributeControl": False,
      "attributePlus": False,
      "noteExecutor": "",
      "workDay": "1"
    }
  ]
    },
     {
  "idTemplate": 15,
   "activeRule" : False,
  "processedDoc": 150,
  "nameRule": "ГИН03",
  "numDocument": "12334211234",
  "fromDocument": "Никитин. В.В",
  "toWhomDocument": "Воронцов М.Д.",
  "summary": "Краткое содержание (ключевые слова)",
  "documentPages": "Страница документа (Ключевые слова)",
  "authorResolution": "Ерзылев Кирилл",
  "keyWordResolution": "Ерзылев Кирилл",
  "chiefUgr": True,
  "ugrAttributeResponsible": False,
  "ugrAttributeControl": True,
  "ugrAttributePlus": False,
  "ugrNoteExecutor": "что то",
  "ugrWorkDay": 0,
  "resolutions": [
    {
      "toResolution": "Суровов",
      "attributeResponsible": False,
      "attributeControl": False,
      "attributePlus": True,
      "noteExecutor": "Примечание исполнителю",
      "workDay": "100"
    },
    {
      "toResolution": "РОманов ",
      "attributeResponsible": False,
      "attributeControl": True,
      "attributePlus": False,
      "noteExecutor": "так",
      "workDay": "10"
    }
  ],
  "assignment": "",
  "assignments": [
    {
      "toAssignment": "Филимонов",
      "attributeResponsible": False,
      "attributeControl": False,
      "attributePlus": False,
      "noteExecutor": "123123",
      "workDay": 0
    },
    {
      "toAssignment": "Селина",
      "attributeResponsible": True,
      "attributeControl": False,
      "attributePlus": False,
      "noteExecutor": "",
      "workDay": "1"
    }
  ]
    },
    {
  "idTemplate": 16,
   "activeRule" : False,
  "processedDoc": 150,
  "nameRule": "ГИН02",
  "numDocument": "12334211234",
  "fromDocument": "Никитин. В.В",
  "toWhomDocument": "Воронцов М.Д.",
  "summary": "Краткое содержание (ключевые слова)",
  "documentPages": "Страница документа (Ключевые слова)",
  "authorResolution": "Ерзылев Кирилл",
  "keyWordResolution": "Ерзылев Кирилл",
  "chiefUgr": True,
  "ugrAttributeResponsible": False,
  "ugrAttributeControl": True,
  "ugrAttributePlus": False,
  "ugrNoteExecutor": "что то",
  "ugrWorkDay": 0,
  "resolutions": [
    {
      "toResolution": "Суровов",
      "attributeResponsible": False,
      "attributeControl": False,
      "attributePlus": True,
      "noteExecutor": "Примечание исполнителю",
      "workDay": "100"
    },
    {
      "toResolution": "РОманов ",
      "attributeResponsible": False,
      "attributeControl": True,
      "attributePlus": False,
      "noteExecutor": "так",
      "workDay": "10"
    }
  ],
  "assignment": "",
  "assignments": [
    {
      "toAssignment": "Филимонов",
      "attributeResponsible": False,
      "attributeControl": False,
      "attributePlus": False,
      "noteExecutor": "123123",
      "workDay": 0
    },
    {
      "toAssignment": "Селина",
      "attributeResponsible": True,
      "attributeControl": False,
      "attributePlus": False,
      "noteExecutor": "",
      "workDay": "1"
    }
  ]
    },
    {
  "idTemplate": 17,
   "activeRule" : False,
  "processedDoc": 150,
  "nameRule": "ГИН02",
  "numDocument": "12334211234",
  "fromDocument": "Никитин. В.В",
  "toWhomDocument": "Воронцов М.Д.",
  "summary": "Краткое содержание (ключевые слова)",
  "documentPages": "Страница документа (Ключевые слова)",
  "authorResolution": "Ерзылев Кирилл",
  "keyWordResolution": "Ерзылев Кирилл",
  "chiefUgr": True,
  "ugrAttributeResponsible": False,
  "ugrAttributeControl": True,
  "ugrAttributePlus": False,
  "ugrNoteExecutor": "что то",
  "ugrWorkDay": 0,
  "resolutions": [
    {
      "toResolution": "Суровов",
      "attributeResponsible": False,
      "attributeControl": False,
      "attributePlus": True,
      "noteExecutor": "Примечание исполнителю",
      "workDay": "100"
    },
    {
      "toResolution": "РОманов ",
      "attributeResponsible": False,
      "attributeControl": True,
      "attributePlus": False,
      "noteExecutor": "так",
      "workDay": "10"
    }
  ],
  "assignment": "",
  "assignments": [
    {
      "toAssignment": "Филимонов",
      "attributeResponsible": False,
      "attributeControl": False,
      "attributePlus": False,
      "noteExecutor": "123123",
      "workDay": 0
    },
    {
      "toAssignment": "Селина",
      "attributeResponsible": True,
      "attributeControl": False,
      "attributePlus": False,
      "noteExecutor": "",
      "workDay": "1"
    }
  ]
    },
    {
  "idTemplate": 18,
   "activeRule" : True,
  "processedDoc": 150,
  "nameRule": "ГИН020",
  "numDocument": "12334211234",
  "fromDocument": "Никитин. В.В",
  "toWhomDocument": "Воронцов М.Д.",
  "summary": "Краткое содержание (ключевые слова)",
  "documentPages": "Страница документа (Ключевые слова)",
  "authorResolution": "Ерзылев Кирилл",
  "keyWordResolution": "Ерзылев Кирилл",
  "chiefUgr": True,
  "ugrAttributeResponsible": False,
  "ugrAttributeControl": True,
  "ugrAttributePlus": False,
  "ugrNoteExecutor": "что то",
  "ugrWorkDay": 0,
  "resolutions": [
    {
      "toResolution": "Суровов",
      "attributeResponsible": False,
      "attributeControl": False,
      "attributePlus": True,
      "noteExecutor": "Примечание исполнителю",
      "workDay": "100"
    },
    {
      "toResolution": "РОманов ",
      "attributeResponsible": False,
      "attributeControl": True,
      "attributePlus": False,
      "noteExecutor": "так",
      "workDay": "10"
    }
  ],
  "assignment": "",
  "assignments": [
    {
      "toAssignment": "Филимонов",
      "attributeResponsible": False,
      "attributeControl": False,
      "attributePlus": False,
      "noteExecutor": "123123",
      "workDay": 0
    },
    {
      "toAssignment": "Селина",
      "attributeResponsible": True,
      "attributeControl": False,
      "attributePlus": False,
      "noteExecutor": "",
      "workDay": "1"
    }
  ]
    }
]


class User(UserMixin):
    ...


def get_user(user_id: int):
    for user in users:
        if int(user["id"]) == int(user_id):
            return user
    return None


@login_manager.user_loader
def user_loader(id: int):
    user = get_user(id)
    if user:
        user_model = User()
        user_model.id = user["id"]
        return user_model
    return None


@app.route("/api/ping", methods=["GET"])
def home():
    return jsonify({"ping": "pong!"})

@app.route("/api/history", methods=["GET"])
def history():
    # # for item in  history:
    #     return jsonify(item)
    return jsonify(historyArr)


@app.route("/api/addtemplate", methods=["POST"])
def template():
    # data = request.json
    return jsonify({"message": "Шаблон "" не удален" , "delete" : False},)

@app.route("/api/savetemplate", methods=["POST"])
def saveTemplate():
    data = request.json
    return jsonify(data)

@app.route("/api/deletetemplate", methods=["POST"])
def removeTemplate():
    data = request.json
    return jsonify(data)

@app.route("/api/activeRule", methods=["POST"])
def activeRule():
    data = request.json
    return jsonify({"message": "Start"})


@app.route("/api/getcsrf", methods=["GET"])
def get_csrf():
    token = generate_csrf()
    response = jsonify({"detail": "CSRF cookie set"})
    response.headers.set("X-CSRFToken", token)
    return response


@app.route("/api/login", methods=["POST"])
def login():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    for user in users:
        if user["username"] == username and user["password"] == password:
            user_model = User()
            user_model.id = user["id"]
            login_user(user_model)
            return jsonify({"login": True, "name": 'Ерзылев К.Г'}), 200
        else:
          return jsonify({"message": "ERROR: Unauthorized"}), 401


@app.route("/api/data", methods=["GET"])
@login_required
def user_data():
    user = get_user(current_user.id)
    return jsonify({"username": user["username"]})


@app.route("/api/getsession", methods=["GET"])
def check_session():
    if current_user.is_authenticated:
        return jsonify({"login": True, "id": 14,"name": "Воронцов М.Д."})

    return jsonify({"login": False})


@app.route("/api/logout", methods=["GET"])
@login_required
def logout():
    logout_user()
    return jsonify({"logout": True})


if __name__ == "__main__":
    app.run(debug=True)

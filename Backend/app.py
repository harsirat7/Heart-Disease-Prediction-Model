from flask import Flask, request, jsonify
from flask_cors import CORS
from heart import prediction;

app = Flask(__name__)
CORS(app)

print("server running...")

dataList=[];

@app.route("/predict", methods=["POST"])
def respondeFunction():
    data = request.get_json()

    dataList = []  

    dataList.append(int(data["age"]))

    if data["gender"] == "male":
        dataList.append(0)
    else:
        dataList.append(1)

    dataList.append(int(data["chestPain"]))
    dataList.append(int(data["restingBp"]))
    dataList.append(int(data["cholesterol"]))

    if data["sugar"] == "yes":
        dataList.append(1)
    else:
        dataList.append(0)

    dataList.append(int(data["ecg"]))
    dataList.append(int(data["heartRate"]))

    if data["angina"] == "yes":
        dataList.append(1)
    else:
        dataList.append(0)
    dataList.append(int(data["depression"]));
    dataList.append(int(data["slope"]))
    dataList.append(int(data["numVessels"]))
    dataList.append(int(data["thalassemia"]))

    result = prediction(dataList)

    return jsonify({
        "prediction": "Positive" if result[0] == 1 else "Negative"
    })  

if __name__ == "__main__":
    app.run(debug=True)
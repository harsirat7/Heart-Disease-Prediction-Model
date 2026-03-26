import pandas as pd;
from sklearn.svm import SVC;
from sklearn.model_selection import train_test_split;
from sklearn.metrics import accuracy_score;
from sklearn.preprocessing import StandardScaler;

# loading data
df=pd.read_csv("C:/Users/Harsirat/Desktop/Project/Heart Diseases Prediction/Backend/heart.csv");

# loading scaler
scaler=StandardScaler();

# loading model
model=SVC(C=100);

# feature selection
x=df.drop(columns=["target"]);
y=df["target"];

# data splting
x_train,x_test,y_train,y_test=train_test_split(x,y,random_state=42,test_size=0.2);

# data scaling
x_train_scaled=scaler.fit_transform(x_train);
x_test_scaled=scaler.transform(x_test);

# model training
model.fit(x_train_scaled,y_train);



def prediction(data):
    predictionData=scaler.transform([data])
    result=model.predict(predictionData);
    return result;
import pandas as pd;
from sklearn.svm import SVC;
from sklearn.model_selection import train_test_split;
from sklearn.metrics import accuracy_score;
from sklearn.preprocessing import StandardScaler;

# loading data
df=pd.read_csv("Backend/heart.csv");

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

# model prediction
y_prediction=model.predict(x_test_scaled);
y_training_prediction=model.predict(x_train_scaled);

# model evalution
print("Accuracy:",accuracy_score(y_test,y_prediction));
print("Accuracy on Training Data:",accuracy_score(y_train,y_training_prediction));


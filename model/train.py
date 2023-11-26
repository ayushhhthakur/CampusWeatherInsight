import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
import matplotlib.pyplot as plt

def get_hydrophonic_data_from_database():
    # Read the data from database using databse config (configFirebase)
    # Return the data
    return pd.read_csv('data/hydroponic.csv')
def preprocess(df):
    # Preprocess the data
    # Return the preprocessed data
    return df
def split_data(df):
    # Split the data into train and test
    # Return the splitted data
    return train_test_split(df, test_size=0.2)
def train_model(df):
    # Train the model
    # Return the trained model
    X = df[['Temperature', 'Humidity', 'Light', 'Moisture']]
    y = df['pH']
    model = LinearRegression()
    model.fit(X, y)
    return model
def evaluate_model(model, X_test, y_test):
    # Evaluate the model
    # Return the evaluation result
    y_pred = model.predict(X_test)
    return mean_squared_error(y_test, y_pred)
def save_model(model):
    # Save the model into model directory
    # Return the model path
    pass
def plot_result(model, X_test, y_test):
    # Plot the result
    # Return the plot
    y_pred = model.predict(X_test)
    plt.scatter(y_test, y_pred)
    plt.xlabel('Actual pH')
    plt.ylabel('Predicted pH')
    plt.title('Actual pH vs Predicted pH')
    plt.show()
def main():
    # Main function
    # Return the result
    df = get_hydrophonic_data_from_database()
    df = preprocess(df)
    X_train, X_test, y_train, y_test = split_data(df)
    model = train_model(X_train, y_train)
    mse = evaluate_model(model, X_test, y_test)
    print('MSE: ', mse)
    plot_result(model, X_test, y_test)
    save_model(model)
if __name__ == '__main__':
    main()

# - **get_hydrophonic_data_from_database()** function is used to get data from database. In this case, we use CSV file as database. But, you can use any database you want.
# - **preprocess()** function is used to preprocess the data. In this case, we don't do any preprocessing.
# - **split_data()** function is used to split the data into train and test. In this case, we split the data into 80% train data and 20% test data.
# - **train_model()** function is used to train the model. In this case, we use Linear Regression model.
# - **evaluate_model()** function is used to evaluate the model. In this case, we use Mean Squared Error (MSE) as the evaluation metric.
# - **save_model()** function is used to save the model into model directory.
# - **plot_result()** function is used to plot the result.
# - **main()** function is used to run the program.

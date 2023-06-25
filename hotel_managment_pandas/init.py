import pandas as pd
CSV_PATH = "./resources/hotel_records.csv"


def loadDataFrameFromCsv():
    try:
        df = pd.read_csv(CSV_PATH)
    except:
        print("error loading the csv file path")
        print(" program terminated ")
    return df


def loadDataFrameToCsv(df):
    try:
        print("     #### Saving Records To The Csv ####     ")
        df.to_csv(CSV_PATH, index=False)
        print(" #### records saved back to csv ####     ")
    except:
        print("error loading the dataFrame to the csv file path")
        print(" program terminated ")
        return df

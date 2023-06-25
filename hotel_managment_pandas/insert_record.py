from constants import CHECK_IN_COLUMN, CHECK_OUT_COLUMN


def insert_record(df):
    print("     ### Add new reservations record ###     ")
    input_values = []
    column_list = list(df.columns)
    for column in column_list:
        column_name = str(column).replace("_", " ")
        if (column not in [CHECK_OUT_COLUMN, CHECK_IN_COLUMN]):
            value = input(f"please provide {column_name} :")
            input_values.append(value)
        else:
            value = input(
                f"please provide {column_name} in format dd-mm-yyyy :")
            input_values.append(value)

    print(f"        ### new reservation to be inserted in records is ### \n", input_values)
    try:
        df.loc[df.index[-1]+1, :] = input_values  # statement to add new record
    except:
        print("     ### error while inserting record ###       ")
        exit()

    print("     ### new reservation made successfully ###       ")
    print("     ### last two reservations are ###       ")
    print(df.tail(2))
    return df

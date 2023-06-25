from constants import CHECK_IN_COLUMN, CHECK_OUT_COLUMN, NAME_COLUMN, IS_CHECKED_IN_COLUMN


def get_latest_reservation(df):
    print("     ### the last 5 reservations are ###         ")
    print(df.tail(5))
    return df


def get_reservation_by_name(df):
    print("     ### Search reservation record by name ###       ")
    all_names = list(df[NAME_COLUMN])
    print(f"        #### All Guests Name ####       \n")
    print(all_names)
    print("pls check the casing of the name")
    name = input(f"enter the Name to check reservation: ")
    if (name in all_names):
        try:
            record = df[df[NAME_COLUMN] == name]
            print(f"Record Found")
            print(record)
            return df
        except:
            print(" error occurred while fetching record with name", name)
            exit()
    else:
        print(f" record with {name} not found")
        return df


def get_reservation_by_check_in_date(df):
    print("     ### Search reservations record by check in date ###       ")
    current_check_in_dates = set(df[CHECK_IN_COLUMN])
    print("All distinct check in dates in the system")
    print(current_check_in_dates)
    query_date = input(f"enter the check-in date in format dd-mm-yyyy: ")
    if (query_date in current_check_in_dates):
        print(
            f"     ### reservations by check in date {query_date} found ###       ")
        records = df[df[CHECK_IN_COLUMN] == query_date]
        print(records)
    else:
        print(
            f"     ### reservation by check in date {query_date} not found ###       ")

    return df


def get_reservation_by_check_out_date(df):
    print("     ### Search reservations record by check out date ###     ")
    query_date = input(f"enter the check-out date in format dd-mm-yyyy: ")
    current_check_out_dates = list(df[CHECK_OUT_COLUMN])
    if (query_date in current_check_out_dates):
        print(
            f"     ### reservations by check out date {query_date} found ###       ")
        records = df[df[CHECK_OUT_COLUMN] == query_date]
        print(records)
    else:
        print(
            f"     ### reservation by check out date {query_date} not found ###       ")

    return df


def get_all_reservation_checked_in_status(df, checked_in_status):
    if checked_in_status:
        print("     ### all checked in reservations ###     ")
    else:
        print("     ### all checked in reservations ###     ")

    records = df[df[IS_CHECKED_IN_COLUMN] == checked_in_status]
    print(records)
    return df

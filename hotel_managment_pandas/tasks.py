from insert_record import insert_record
from delete_record import delete_record
from get_records import *
from init import loadDataFrameToCsv


def init_execute_task(df, option):
    if (option == "1"):
        return insert_record(df)
    elif (option == "2"):
        column = 'Name'
        return delete_record(df, column)
    elif (option == "3"):
        return get_latest_reservation(df)
    elif (option == "4"):
        return get_reservation_by_name(df)
    elif (option == "5"):
        return get_reservation_by_check_in_date(df)
    elif (option == "6"):
        return get_reservation_by_check_out_date(df)
    elif (option == "7"):
        return get_all_reservation_checked_in_status(df, True)
    elif (option == "8"):
        return get_all_reservation_checked_in_status(df, False)
    elif (option == "9"):
        return loadDataFrameToCsv(df)
    else:
        print("Invalid Option")
        return False


def taskList():
    TASK_DICT = {
        "1": "Making a new booking reservation",
        "2": "Deleting a booking reservation",
        "3": "See latest 5 reservations",
        "4": "Search a booking using name",
        "5": "Search a booking Using check-in date",
        "6": "Search a booking Using check-out date",
        "7": "See all guests who are checked in",
        "8": "See all guests who are checked out",
        "9": "Save reservations back to csv"
    }
    for key in TASK_DICT:
        print(f"     {key} --- {TASK_DICT[key]}      ",)

    operation_selected = input("select the task : ")
    if (not operation_selected.isdigit() or (operation_selected.lower() not in TASK_DICT.keys())):
        print(
            f"     #### INVALID TASK SELECTED  {operation_selected} ###      ")
        return "-1"
    else:
        return operation_selected

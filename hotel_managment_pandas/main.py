from init import loadDataFrameFromCsv
from tasks import init_execute_task, taskList
ACTIVE = True
DF = None


def main():
    global DF
    global ACTIVE
    print("     #### BOOTING UP THE APPLICATION  ###         ")
    print("     #### Hotel Management Software  ###         ")
    print("     #### loading csv data into the system  ###      ")
    DF = loadDataFrameFromCsv()
    print("     #### data has been successfully loaded into the system  ###      ")
    while ACTIVE:
        option = taskList()
        DF = init_execute_task(DF, option)
        print("     ###############      ")
        if (type(DF) == type(False)):
            ACTIVE = False
        else:
            print("SHOW TASK MENU ?")
            choice = input("Y/N: ")
            if (choice.lower() == 'y'):
                ACTIVE = True
            else:
                ACTIVE = False

    print("     #### SHUTING DOWN THE APPLICATION ###      ")
    print("     #### Have A Nice Day :D  ###      ")


if __name__ == '__main__':
    main()

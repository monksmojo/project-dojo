# <div align='center'>Hotel Management</div>

## A Hotel Management Software Project

> last updated - 26-06-2023

## The project is built on the following tech stack

1. python (3.11)
2. pandas
3. Numpy
4. Matplotlib
5. Csv Files

### Some prerequisite

```
> As of 2023 you can use py instead of python to run python scripts from cmd/powershell

> Advantage of py is u can select the version of python from which you want to build the project.

> for ex py -3.11 <script_name>.py
```

### The Project uses a virtual environment for easy setup

### you can install Virtualenv by running the following command:

> py -3.11 -m ensurepip [to install the virtualenv on windows]

### setting up the project method-1 on windows os

0. clone the project in your system
1. py -3.11 -m venv <virtual_env_name>
2. ./<virtual_env_name>/Scripts/activate
3. pip install -r requirements.txt

### set up project method-2 (manually) on windows os

### Step being used to setup the virtual environment

### Install Virtualenv. Once you have VirtualEnv installed,

0. clone the project in your system
1. py -3.11 -m venv <virtual_env_name>
2. ./<virtual_env_name>/Scripts/activate
3. pip install pandas
4. pip install matplotlib

### set up project method-2 (manually) on linux distribution

- will be updated soon

## The Hotel Management Application

#### 1. cli based application

#### 2. contains basic/beginner level functions of python,pandas and matplotlib

#### 3. reads the data from a csv file and convert it into dataFrame to perform operation

#### 4. a sample csv file is present in the repo in ./resources/hotel_records.csv with only 20 records

    -   sample csv has the following columns
    Name- name of the guest
    Contact_Number- contact number of the guest
    Address- address of the guest
    Check_In- guest check in date in format dd-mm-yyyy
    Check_Out- guest checkout date in format dd-mm-yyyy
    Room_Type- room type guest staying in pool-values [standard,deluxe,super deluxe,suite]
    Total_Price- price of the stay
    Is_Checked_In- is the guest checked in pool-value [True/False]
    Guest_Country- the guest country according to the citizenship

### Operations performed the Application

- reading data from the csv and creating a dataFrame from it
- adding a new record in the dataFrame
- deleting a record from the dataFrame
- searching the dataFrame for records based on various columns:
  - Name
  - Check in date / Check out date
  - Is Checked In / Is Checked out
- view latest reservation
- Plot the pie chart
- Plot the bar graph
- loading the dataFrame back to the csv

### file description

1. main.py

   > - starting point of the application
   > - shows the menu of the tasks operation application can perform
   > - and selections of the operations

2. init.py

   > - loadDataFrameFromCsv() loads the csv to the dataFrame  
   >   used in called in main.py
   > - loadDataFrameToCsv() saves the dataFrame back to csv used in tasks.py

3. constants.py

   > - contains the constants used in the applications

4. tasks.py

   > - taskList() contains a key value pair dictionary containing the task description application can perform used in main.py
   > - init_execute_task(df, option) contains the if-elif-else ladder to perform the operation on the df(dataFrame) based on the option selected from the taskList() function used in main.py

5. resource/hotel.records_csv

   > - contains sample csv from which df(dataFrame) is created
   > - used in init.py to convert to dataFrame and is used store the changes made to the dataFrame

6. insert_record.py

   > - insert_record(df) : takes dataFrame as an argument and returns a dataFrame
   > - it is used to add a new record in the dataFrame
   > - used in tasks.py

7. delete_record.py

   > - delete_record(df, column) : takes dataFrame and a column_name string as an argument and returns a dataFrame
   > - it is used to delete a record based on the column value
   > - used in tasks.py

8. get_records.py

   > - contains various filter functions used to search records in the dataFrame
   > - get_latest_reservation(df): takes dataFrame as an argument and returns a dataFrame and prints the last 5 reservations made
   > - get_reservation_by_name(df): takes dataFrame as an argument and returns a dataFrame and prints the reservation based on guest name provided
   > - get_reservation_by_check_in_date(df): takes dataFrame as an argument and returns a dataFrame and prints the reservation based on guest check in date (dd-mm-yyyy)
   > - get_reservation_by_check_out_date(df): takes dataFrame as an argument and returns a dataFrame and prints the reservation based on guest check out date (dd-mm-yyyy)
   > - get_all_reservation_checked_in_status(df, checked_in_status): takes dataFrame,checked_in_status boolean (True,False) as an argument and returns a dataFrame and prints the all the guest which are checked in (checked_in_status=True) or prints the all the guest which are not checked in (checked_in_status=False)

9. plot.py
   > - plot_guest_by_check_in_status(df) Plot the bar graph of guest by the there checked in status
   > - plot_guests_by_country(data_frame): Plot the pie chart of guest by the country 

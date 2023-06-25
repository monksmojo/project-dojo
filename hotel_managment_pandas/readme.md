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
2. py -3.11 -m venv <virtual_env_name> 
3. ./<virtual_env_name>/Scripts/activate
4. pip install -r requirements.txt


### set up project method-2 (manually) on windows os
### Step being used to setup the virtual environment
### Install Virtualenv. Once you have VirtualEnv installed, 
0. clone the project in your system
2. py -3.11 -m venv <virtual_env_name> 
3. ./<virtual_env_name>/Scripts/activate
4. pip install pandas
5. pip install matplotlib

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
- loading the dataFrame back to the csv



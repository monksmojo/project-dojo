def delete_record(df, column):
    all_names = list(df[column])
    print(f"        #### All Guests Name ####       \n")
    print(all_names)
    name = input(f"enter the {column} to delete its reservation: ")
    if (name in all_names):
        try:
            record_index = df[df[column] == name].index
            print(f"deleting the {str(record_index)} record with name {name} ")
            # axis 0 to drop a row/record
            df.drop(record_index, axis=0, inplace=True)
            return df
        except:
            print(" error occurred while deleting record of index ",
                  str(record_index))
            exit()
    else:
        print(f" record with {name} not found")
        return True

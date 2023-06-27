import pandas as pd
import matplotlib.pyplot as plt
from constants import GUEST_COUNTRY, IS_CHECKED_IN


def plot_guests_by_country(data_frame):
    print("     #### Plotting the pie chart of guest by the country ###     ")
    try:
        country_counts = data_frame[GUEST_COUNTRY].value_counts()
        plt.figure(figsize=(8, 6))
        plt.pie(country_counts, labels=country_counts.index, autopct='%1.1f%%')
        plt.title('Guests Residing in the Hotel by Country')
        plt.show()
    except:
        print("     #### ERROR ! Plotting the pie chart of guest by the country ###     ")
    return data_frame


def plot_guest_by_check_in_status(df):
    print("     #### Plotting the bar graph of guest by the checked in status ###     ")
    try:
        total_guest = len(df)
        guests_checked_in = len(df[df["Is_Checked_In"] == True])
        guests_not_checked_in = total_guest-guests_checked_in
        x_ticks_labels = ["Total Guests","Checked In Guests", "Checked Out Guests"]
        data = [total_guest, guests_checked_in, guests_not_checked_in]
        colors = ['orange', 'green', 'purple']
        plt.bar(x_ticks_labels,data, data=data, color=colors)
        plt.xlabel("Guests Status")
        plt.ylabel("Guests Count By Status")
        plt.title("Guests Status")
        plt.show()
    except:
        print("     #### ERROR ! Plotting the bar graph of guest by the checked in status ###     ")
    return df

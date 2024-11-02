import requests
from datetime import datetime

def get_flight_data(aircraft: str, distance: int):
    url = f"https://despouy.ca/flight-fuel-api/q/?aircraft={aircraft}&distance={distance}"

    params = {
        "icao": aircraft,
        "distance": distance
    }

    response = requests.get(url, params = params)

    # checking for successful connection
    if response.status_code == 200:
        flight_data = response.json()
        return flight_data
    
    else:
        print(f"Error: {response.status_code} - {response.text}")
        return None
    
# api call testing
aircraft = "60006b"
distance = 125

flight_data = get_flight_data(aircraft, distance)
if flight_data:
    print(flight_data)
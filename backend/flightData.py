import requests
import os
import psycopg2
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException

# Load environment variables from .env file
load_dotenv()

# Database connection details
SUPABASE_URL = os.getenv("user")
SUPABASE_PW = os.getenv("password")
SUPABASE_HOST = os.getenv("host")
SUPABASE_PORT = os.getenv("port")
SUPABASE_NAME = os.getenv("dbname")

DB = {
    "user": SUPABASE_URL,
    "password": SUPABASE_PW,
    "host": SUPABASE_HOST,
    "port": SUPABASE_PORT,
    "dbname": SUPABASE_NAME
}

app = FastAPI()

def connect_to_db():
    """Connect to the database and return the connection and cursor."""
    try:
        conn = psycopg2.connect(
            dbname=DB["dbname"],
            user=DB["user"],
            password=DB["password"],
            host=DB["host"],
            port=DB["port"]
        )
        cursor = conn.cursor()
        return conn, cursor
    except Exception as e:
        print("Error connecting to the database:", e)
        return None, None

def get_flight_data(aircraft: str, distance: int):
    """Fetch flight data from a public API."""
    url = f"https://despouy.ca/flight-fuel-api/q/?aircraft={aircraft}&distance={distance}"
    response = requests.get(url)

    if response.status_code == 200:
        return response.json()
    else:
        raise HTTPException(status_code=response.status_code, detail=response.text)

@app.get("/flight-data/{aircraft}/{distance}")
def read_flight_data(aircraft: str, distance: int):
    """API endpoint to get flight data."""
    flight_data = get_flight_data(aircraft, distance)
    return flight_data

@app.get("/db-status")
def db_status():
    """Check the status of the database connection."""
    conn, cursor = connect_to_db()
    if conn and cursor:
        cursor.close()
        conn.close()
        return {"status": "success", "message": "Connected to the database successfully."}
    else:
        raise HTTPException(status_code=500, detail="Failed to connect to the database.")

# To run the application, use the command:
# uvicorn flightData:app --reload
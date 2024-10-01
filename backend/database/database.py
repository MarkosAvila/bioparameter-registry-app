import os

from dotenv import load_dotenv
from sqlalchemy.orm import DeclarativeBase, sessionmaker

from database.engine import DatabaseConfig, create_engine_from_user_choice

# Carga las variables de entorno desde el archivo .env
load_dotenv()


# Accede a las variables de entorno
USER = os.getenv("USER")
PASSWORD = os.getenv("PASSWORD")
HOST = os.getenv("HOST")
DATABASE = os.getenv("DATABASE")
PORT = os.getenv("PORT")


class Base(DeclarativeBase):
    pass


# Creation of the engine
database_config = DatabaseConfig(
    user=USER,
    password=PASSWORD,
    host=HOST,
    port=PORT,
    database=DATABASE,
)

engine = create_engine_from_user_choice("sqlite", database_config)

session_local = sessionmaker(autocommit=False, autoflush=False, bind=engine)


def create_tables():
    Base.metadata.create_all(engine)

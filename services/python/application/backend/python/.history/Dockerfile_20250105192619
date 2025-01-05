# Użycie oficjalnego obrazu Python
FROM python:3.10-slim

# Ustaw zmienną środowiskową, aby Python nie buforował wyjścia
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Utwórz katalog roboczy
WORKDIR /app

# Skopiuj pliki aplikacji
COPY . /app

# Zainstaluj zależności
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Otwórz port
EXPOSE 5000

# Uruchom aplikację
CMD ["python", "app.py"]

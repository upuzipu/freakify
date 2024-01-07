##backend
####Для запуска необоходимо
- Прописать креды от бд в .env файле в корне freakify/backend
- Создать бд 
        CREATE DATABASE music
        WITH
        OWNER = postgres
        ENCODING = 'UTF8'
        LC_COLLATE = 'C'
        LC_CTYPE = 'C'
        ICU_LOCALE = 'ru'
        LOCALE_PROVIDER = 'icu'
        TABLESPACE = pg_default
        CONNECTION LIMIT = -1
        IS_TEMPLATE = False;
- зависимости 
        python3 -m pip install Django
        python3 -m pip install python-dotenv
- в корне с проектом написать 
        python3 manage.py migrate - для миграция бд
        python3 manage.py runserver
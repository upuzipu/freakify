## backend
#### Для запуска необоходимо
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

#### Описание api
- GET freakify/ - ручка которая выводит "ты пидор"
- GET songs/ - ручка которая выводит список песен, фильтруя по параметру ```name``` указанному в query параметрах (если не указано - возвращает всё)
    - response body
    - ```{
        result = 'success',
        body = [
            {
                id = "str",
                name = "name",
                artist = "artist_name",
                jenre = "jenre_name"
            }
        ]
        }
        ```
- GET songs/${song_id}/mp3 - получить по mp3 по id, ```songs/1/mp3```
- GET albums/ - ручка которая выводит список альбомов, фильтруя по параметру ```name``` указанному в query параметрах (если не указано - возвращает всё)
- GET albums/${album_id}/songs - выводит список всех песен по album_id
- GET playlists/ - ручка которая выводит список плейлистов, фильтруя по параметру ```name``` указанному в query параметрах (если не указано - возвращает всё)
- GET playlists/{playlist_id}/songs - выводит список всех песен в плейлисте по playlist_id
- POST playlists/create - создать плейлист (требуется аутентификация)
    - body:
    - 

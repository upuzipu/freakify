from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.db import connection

# Create your views here.
from django.http import HttpResponse
from ..models import *
import os
from django.core.serializers.json import DjangoJSONEncoder
from django.core.serializers import serialize
from ..utils import *
import json


class LazyEncoder(DjangoJSONEncoder):
    def default(self, obj):
        if isinstance(obj, Song):
            return str(obj)
        return super().default(obj) 
class LazyEncoder(DjangoJSONEncoder):
    def default(self, obj):
        if isinstance(obj, Artist):
            return str(obj)
        return super().default(obj) 

def getPahtByMusic(song: Song):
    pathToMusic = "freakify/recources/songs/" + song.song_url
    return pathToMusic
def getMusicByPathToResponse(pathToMusic):
     with open(pathToMusic, 'rb') as f:
        response = HttpResponse(f.read(),content_type = 'audio/mp3')
     response['Content-Length'] = os.path.getsize(pathToMusic)
     return response

def wrapMusicIntoResponse(song: Song):
    return getMusicByPathToResponse(getPahtByMusic(song))

def index(request):
    latest_music = Song.objects.filter().all()
    return wrapMusicIntoResponse(latest_music)

def getMusicByName(request):
    name = request.GET.get('name','')
    music = Song.objects.get(song_name__icontains = name)
    pathToMusic = getPahtByMusic(music)
    return getMusicByPathToResponse(pathToMusic)

    
@csrf_exempt
def register(request):
    cursor = connection.cursor()
    if request.method == 'POST':
        data = request.POST
        try:
            cursor.execute("call add_user(%s,%s,%s)",[data.get('username'),data.get('email'),hashPassword(data.get('password'))])
        finally:
            cursor.close()
        
    return HttpResponse("Registration done")

@csrf_exempt
def authorized(data):
    email = data['email']
    password = data['password']
    print(email)
    print(password)
    person = Person.objects.get(person_email__exact=email)
    print(person.person_id)
    passwords = UsersPassword.objects.get(person__exact=person.person_id)
    print(passwords.password)
    if passwords.password != hashPassword(password):
        returnErrorResponse(403, "Unauthorized")
    return returnSuccessResponse(200)


def listPlaylists(request):
    name = request.GET.get('name','')
    httpResponse = {}
    responses = []
    playlists = Playlist.objects.select_related('creator').filter(playlist_name__icontains=name).order_by('-update_time')
    for playlist in playlists:
        response = {}
        response['name'] = playlist.playlist_name
        response['creator'] = playlist.creator.person_nickname
        response['lastUpdated'] = str(playlist.update_time)
        responses.append(response)
    httpResponse["result"] = 'success'
    httpResponse["body"] = responses
    return HttpResponse(json.dumps(httpResponse))
    
def listAllSongsByPlaylistId(request):
    id = request.GET.get('playlistId','')
    songs = PlaylistSongs.objects.select_related('song').filter(playlist_id__exact=id)
    httpResponse = {}
    responses = []
    for i in songs:
        response = {}
        response['name'] = i.song.song_name
        response['artist'] =i.song.artist.nickname
        response['jenre'] = i.song.jenre.jenre_name
        responses.append(response)
    httpResponse["result"] = 'success'
    httpResponse["body"] = responses
    return HttpResponse(json.dumps(httpResponse))



    


        
        
        
        






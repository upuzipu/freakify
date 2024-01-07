from hashlib import pbkdf2_hmac
import json
# Create your views here.
from django.http import HttpResponse

def hashPassword(password):
    dk = pbkdf2_hmac('sha256', str.encode(password), b'shipim',1)
    return dk.hex()
def returnErrorResponse(code, description):
    return HttpResponse(json.dumps({"result":"failure", "code": code, "description": description}, ensure_ascii=False))
def returnSuccessResponse(code):
    return HttpResponse(json.dumps({"result":"success", "code": code}, ensure_ascii=False))

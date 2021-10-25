import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http';
import { RespuestaToHeadLines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CachupinService {

  constructor(private http: HttpClient) { }

  getTopHeadLines()
  {
    return this.http.get<RespuestaToHeadLines>
    ('https://newsapi.org/v2/top-headlines?language=es&category=science&apiKey=96908a6b5f9b4d37bb6b14ee00da426c');
  }




























}

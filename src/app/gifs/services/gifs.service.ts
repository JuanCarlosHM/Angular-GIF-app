import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GiphyResponse } from '../interfaces/giphyResponse.nterface';


@Injectable({providedIn: 'root'})
export class GifsService {

    private _serviceURL: string = 'https://api.giphy.com/v1/gifs';
    private _tagsHistory: string[] = []; 
    public gifList: Gif[] = [];

    constructor(private http: HttpClient) { 
        this.getFromLocalStorage();
        if(this._tagsHistory.length > 0) {
            this.addTag(this._tagsHistory[0]);
        }
    }

    get tagsHistory( ) {
        return [...this._tagsHistory]; 
    }

    addTag(tag: string): void {
        if(tag.length === 0) return; 
        this.organizeHistory(tag);
        this.searchTag(tag);
        this.saveToLocalStorage();
    }


    private organizeHistory(tag: string) {

        tag = tag.toLowerCase();

        if(this._tagsHistory.includes(tag)) {
            this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
        }

        this._tagsHistory.unshift(tag);
        console.log(this._tagsHistory);
        this._tagsHistory = this._tagsHistory.splice(0,10);
        
    }

    private searchTag(tag : string) : void {

        const params = new HttpParams()
        .set('api_key', GIPHY_API_KEY)
        .set('q', tag)
        .set('limit', '10');

        this.http.get<GiphyResponse>(`${this._serviceURL}/search`, { params: params })
        .subscribe(response => {
            console.log(response.data);
            this.gifList = response.data;
        });
    }

    private saveToLocalStorage():void {
        localStorage.setItem('history', JSON.stringify(this._tagsHistory));
    }
    
    private getFromLocalStorage(): void {
        const temporal = localStorage.getItem('history');
        if(!temporal) return; 
        this._tagsHistory = JSON.parse(temporal);
    }
    
}
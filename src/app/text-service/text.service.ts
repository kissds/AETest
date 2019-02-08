import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Word } from '../word.model';

@Injectable()
export class TextService {
    private _selectedWord: Word;
    private _words: Word[];
    private arrComma = [',', '.', '!'];

    private synonymSubject = new Subject<any>();

    constructor(private http: HttpClient) { }

    get selectedWord() {
        return this._selectedWord;
    }

    set selectedWord(selectedWord: Word) {
        this._selectedWord = selectedWord;
    }

    get words() {
        return this._words;
    }

    set words(words: Word[]) {
        this._words = words;
    }

    selectWord(index) {
        const comma = this.arrComma.find( elem => this._words[index].value.lastIndexOf(elem) >= 0);
        if (comma) {
            return;
        }
        this._selectedWord = this._words[index];
    }

    getMockText() {
        return new Promise<string>(function (resolve) {
            resolve('A year ago I was in the audience at a gathering of designers in San Francisco. ' +
                'There were four designers on stage, and two of them worked for me. I was there to support them. ' +
                'The topic of design responsibility came up, possibly brought up by one of my designers, I honestly don’t remember the details. ' +
                'What I do remember is that at some point in the discussion I raised my hand and suggested, to this group of designers, ' +
                'that modern design problems were very complex. And we ought to need a license to solve them.');
        });
    }

    getSynonym(): Observable<any> {
        return this.synonymSubject.asObservable();
    }

    getSyn() {
        const queryParameters = new HttpParams().set('rel_syn', this._selectedWord.value);
        return this.http.get('https://api.datamuse.com/words', { params: queryParameters }).toPromise().then( (data: any) => {
            this.synonymSubject.next(data);
        });

    }
}

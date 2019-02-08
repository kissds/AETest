import { Component, OnInit } from '@angular/core';
import { TextService } from '../text-service/text.service';
import { Word } from '../word.model';

@Component({
    selector: 'app-file',
    templateUrl: './file.component.html',
    styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {
    text = '';
    words: Word[] = [];

    private arrComma = [',', '.', '!'];

    constructor(private textService: TextService) {
    }

    ngOnInit() {
        this.textService.getMockText().then((res) => {
            this.text = res;
            this.initWords();
        });
    }

    selectWord(index) {
        this.textService.selectWord(index);
        this.textService.getSyn();
    }

    initWords() {
        const strings = this.text.split(' ');
        for (let i = 0; i < strings.length; i++) {
            const comma = this.arrComma.find( elem => strings[i].lastIndexOf(elem) >= 0);
            if (comma) {
                const wordWithoutComma = strings[i].substring(0, strings[i].length - 1);
                this.words.push(new Word(wordWithoutComma));
                this.words.push(new Word(comma));
            } else {
                this.words.push(new Word(strings[i]));
            }
        }
        this.textService.words = this.words;
    }
}

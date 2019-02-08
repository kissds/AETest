import { Component, OnInit } from '@angular/core';
import { TextService } from '../text-service/text.service';

@Component({
    selector: 'app-synonym-list',
    templateUrl: './synonym-list.component.html',
    styleUrls: ['./synonym-list.component.scss']
})
export class SynonymListComponent implements OnInit {
    public synonymItem: any;
    public errorText = 'Synonyms are not found'

    constructor(private textService: TextService) { }

    ngOnInit() {
        this.getSynonymList();
    }

    getSynonymList() {
      this.textService.getSynonym().subscribe(res => { this.synonymItem = res; });
    }

    applySyn(synword: string) {
      this.textService.selectedWord.value = synword;
    }

}

import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {Editor} from "primeng/components/editor/editor";


@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements AfterViewInit {

    private quill: any;

    constructor() {
    }

    @ViewChild(Editor) editor: Editor;

    ngAfterViewInit(): void {

        this.quill = this.editor.quill;
        let Quill = this.quill.constructor;
         let SizeStyle = Quill.import('attributors/style/size');
        Quill.register(SizeStyle, true);


    }

}

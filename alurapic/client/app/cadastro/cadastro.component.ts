import {Component} from '@angular/core'
import {FotoComponent} from '../foto/foto.component'
import {Http} from '@angular/http'

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent{

    foto: FotoComponent=new FotoComponent() 

    constructor(http: Http){
        
    }

    cadastrar(event){
        event.preventDefault()
        console.log(this.foto)
    }
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  notes : Array<Object> = [];
  overlay : HTMLElement | null = null;
  buttonCreate : HTMLElement | null = null;
  buttonUpdate : HTMLElement | null = null;
  buttonCancel : HTMLElement | null = null;
  noteTitle : HTMLInputElement | null = null;
  noteStatus : HTMLSelectElement | null = null;

  constructor() { }

  ngOnInit(): void {
	this.overlay = document.getElementById("overlay");
	this.buttonCreate = document.getElementById("btn-create");
	this.buttonUpdate = document.getElementById("btn-update");
	this.buttonCancel = document.getElementById("btn-cancel");
	this.noteTitle = document.querySelector("#dialog input");
	this.noteStatus = document.querySelector("#dialog select");
  }
  
  cancel() : void {
	 if( this.overlay != null ) {
		this.overlay.addEventListener("transitionend", ()=>{
			if( this.overlay != null )
				this.overlay.style.display = "none";
		}, {once:true});
		this.overlay.style.opacity = "0";
	 }
	
	if( this.noteTitle != null )
		this.noteTitle.style.borderColor = "black";
  }
  
  createNote() : void {
	var error : boolean = false;
	if( this.noteTitle != null ) {
		if( this.noteTitle.value.length == 0 ) {
			this.noteTitle.style.borderColor = "red";
			error = true;
		}
		
		if( !error ) {
			var div : HTMLElement = document.createElement("div");
			div.className = "note";
			
			var h3 : HTMLElement = document.createElement("h3");
			h3.innerText = this.noteTitle.value;
			
			var del : HTMLElement = document.createElement("div");
			del.innerText = "X";
			
			div.appendChild(h3);
			div.appendChild(del);
			
			if( this.noteStatus != null ) {
				
				var cont : HTMLElement | null = null;
				switch( this.noteStatus.selectedIndex ) {
					case 0:
						cont = document.getElementById("started-notes");
						break;
					
					case 1:
						cont = document.getElementById("process-notes");
						break;
					case 2:
						cont = document.getElementById("ready-notes");
						break;
				}
				
				if( cont != null )
					cont.appendChild(div);
			}
			
			this.cancel();
		}
	}
	
	
  }
  
  updateNote() : void {
	  
  }
  
  showDialog() : void {
	  
	 if( this.buttonUpdate != null )
		this.buttonUpdate.style.display = "none";
	  
    if( this.overlay != null) {
		this.overlay.style.display = "flex";
		
		let tid;
		let delay = (t:number) => {
			clearTimeout(t);
			
			if( this.overlay != null )
				this.overlay.style.opacity = "1";
		}
		
		tid = setTimeout(delay, 10, tid);
	}
	
  }

}

import { Component, OnInit } from '@angular/core';

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-post-experience',
  templateUrl: './post-experience.component.html',
  styleUrls: ['./post-experience.component.scss']
})
export class PostExperienceComponent implements OnInit {
  
  imgSrc: string='';
  selectedImage: any;
  isSubmitted!: boolean;
  public upImage!: File;
  public upImageToBackend!: File;
  public imgTemp: any = null;
  imgTemplate: string='';
  uploadProgress!:number;
  uploadSub: any;
  test :any;
  hidden: boolean = true;
  
    constructor(   )
     { }

     

    //  showPreview(event: any) : void {
       
    //       const file : File = event.target.files[0];
    
    //   if ( !file ) { 
    //     this.upImage= file;
    //     this.imgSrc = '../../../../../assets/image_placeholder.jpg',
    //     this.selectedImage=null;
    //   }

    //   const reader = new FileReader();
    //   reader.readAsDataURL( file );
    //   this.upImage = file;
    //   this.imgTemplate= file.name;
  
  
    //   reader.onload = (e: any) => this.imgSrc = e.target.result;
    //   reader.onloadend = () => {
    //     this.imgTemp = reader.result;
    //   }
    // };



  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
 
  
  
  }
  
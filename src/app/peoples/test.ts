

export class Cliente  {

     public skill :string ='';
     public array : string []=[];


    
     constructor( skill:string)
     {
        this.skill=skill;
    }
     
      arrToFilter( ){

        
      this.array.unshift(this.skill)  
      }

      skills(  ){

        //   this.skill='viene de la clase'
        return this.array;
    }
  }
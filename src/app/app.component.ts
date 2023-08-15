import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sidapp';
  // user=[];
  data:number = 6;
  user:any[]=[];
  user1:any[]=[];
   ab=document.getElementById('task')
   ab1=document.getElementById('form')
  subm(data:string){
    if(data=="")
     alert("Enter valid task");
    else
    {
      this.user.push({num:this.user.length,name:data})

    }
    console.log(this.user)
  }
  deltask(val:number){
    // console.log(val)
    this.user=this.user.filter(data=>data.num!==val)
  }
  deltask1(val:number){
    this.user1=this.user1.filter(data=>data.num!==val)
  }
  taskcmp(data:string,val:number){
    this.user1.push({num:this.user1.length,name:data})
    this.deltask(val)
  }

  userlogin1(data1:any){
    console.log(data1)
  }
}
import MyService from '../services/MyService';

export default class HomeCtrl{
	message:string;
	myService:MyService;
	
	constructor(myService:MyService){
		this.message="start";
		this.myService = myService;
	} 
	updateMessage(){
		this.message = "Congrats, you clicked me!!!!";
		this.myService.doSomething();
		this.myService.doAnotherThing();
	}
	
}
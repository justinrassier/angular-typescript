export default class HomeCtrl{
	message:string;
	
	constructor(){
		console.log('asdf');
		this.message="start";
	} 
	updateMessage(){
		this.message = "Congrats, you clicked me!!!!";
	}
	
}
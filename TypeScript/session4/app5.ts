class	Human
{
			//Attributes(Data) 
			name:string;
			age:number;
			height:number;
			//Behaviours(Functions)
			printdata():void
			{
				console.log('Name='+this.name);
				console.log('Age='+this.age);
				console.log('Height='+this.height);
			}
			eating(item:string):void
			{
				console.log(this.name+' eating '+item+' food item')
			}
			sleeping(noh:number):void
			{
				console.log(this.name+' sleeping '+noh+' hours per day')
			}
}
let	p1=new	Human();
p1.name='Ajay'
p1.age=22
p1.height=5.3
p1.printdata()
p1.eating('Chiken Biryani')
p1.sleeping(8)
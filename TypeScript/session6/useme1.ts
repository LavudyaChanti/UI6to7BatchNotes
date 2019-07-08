export class C1
{
    sayhi(x:string):void
    {
        console.log('Hi '+x+ ' From C1 class')
    }
}
export class C2
{
    sayhello(x:string):void
    {
        console.log('Hello '+x+ ' From C2 class')
    }
}
export class C3
{
    saybye(x:string):void
    {
        console.log('Bye'+x+ ' From C3 class')
    }
}
export function wish1(x:string)
{
    console.log(`Good morning Mr:${x}`)
}
export function wish2(x:string)
{
    console.log(`Good afternoon Mr:${x}`)
}
export function wish3(x:string)
{
    console.log(`Good evening Mr:${x}`)
}
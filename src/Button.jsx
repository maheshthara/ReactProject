

function Button(){
    let count=0;
    const handileClick=()=>console.log("OUCH!");
    const handileClick2=(name)=>{
        if(count<3)
            {
                count++;
                console.log(`${name} You clicked me ${count} times`)
            }
            else{
                console.log(`You cliked me enough times`)
            }
        };
        const eventHandile=(e)=>e.target.textContent="Ouch!"
        const eventHandile2=(e)=>console.log(e)

   
   

    return(<>
        <button onClick={ ()=>handileClick2("Bro")}>Click Me</button>
        <button onClick={ (e)=>eventHandile(e)}>Change Me</button>
        <button onClick={ (e)=>eventHandile2(e)}>Event Me</button>

    </>
)

}
export default Button
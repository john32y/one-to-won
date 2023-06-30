import { useState } from "react";

export default function Converter (){
    const [money, setMoney]= useState(0)

   const value = (e) => {
            e.preventDefault();
            const converting = e.target.input.value 
            const result= (converting * 1318.11)
            setMoney(result);
        }
        return(
        <section>
            <form onSubmit={value}>
            <h1>USD to Won</h1>
            <input type="text" name="input" />
            <input type="submit" value="convert" />
            <p>₩ {money}</p>
            </form>
        </section>
    )
}
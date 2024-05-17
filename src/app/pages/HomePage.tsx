import { useEffect, useState } from "react";
import { ApiService } from "../Services/ApiService"

export const HomePage = () => {
    const [catFact, setCatFact] = useState('');
    const [loading, setLoading] = useState(true);
    const [randomFacts, setRandomFacts] = useState<string[]>([]);
    const params = {
        max_length: 100
      };
      useEffect(() => {
        getCatFact();
    }, []);

    const getCatFact = async () => {
        
        const response = await ApiService.get(
            "/fact", 
            params
        );
        setCatFact(response.fact);
        setLoading(false);
    }

    const saveCatFact = () => {
        setRandomFacts([...randomFacts, catFact]);
    }

    return (<>        
    <div style = {{display: 'flex', height: '100vh' }}>
        <div style = {{flex: 1, maxWidth: '50%', borderRight: '1px solid black', padding: 'auto'}}>
        <h2>Random Cat Fact : </h2>
            {catFact}
            <div style={{display : 'flex',justifyContent : 'space-between', margin : '10%'}}>
                <button onClick={getCatFact}>Load New Fact</button>
                <button onClick={saveCatFact}>Save Fact</button>
            </div>
        </div>
        <div>
            <h2>Saved Cat Facts : </h2>
            <ul>
         {randomFacts.length > 0 && randomFacts.map((fact, index) => <li key={index}>
            {fact}
         </li>)}
         </ul>
        </div>
       </div>
       </>

    )
}

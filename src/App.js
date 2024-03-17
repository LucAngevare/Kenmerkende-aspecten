import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const KA_Array = {
  "Tijd van burgers en stoommachines (van 1800 tot 1900)": [
  "De industriële revolutie die de basis legde in de Westerse wereld voor de industriële samenleving",
  "De moderne vorm van imperialisme die verband hield met de industrialisatie",
  "De opkomst van politiek-maatschappelijke stromingen: liberalisme, nationalisme, socialisme, confessionnalisme en feminisme",
  "Voortschrijdende democratisering, met deelname van steeds meer mannen en vrouwen aan het politiek proces",
  "De opkomst van emancipatiebewegingen",
  "Discussies over de sociale kwestie",],
  "Tijd van de wereldoorlogen (van 1900 tot 1950)": [
  "Het voeren van twee wereldoorlogen",
  "De crisis van het wereldkapitalisme",
  "Het in praktijk brengen van de totalitaire ideologieën communisme en fascisme/nationaalsocialisme",
  "De rol van moderne propaganda- en communicatiemiddelen en vormen van massaorganisatie",
  "Vormen van verzet tegen het West-Europese imperialisme",
  "Verwoestingen op niet eerder vertoonde schaal door massavernietigingswapens en de betrokkenheid van de burgerbevolking bij oorlogvoering",
  "Racisme en discriminatie die leidden tot genocide, in het bijzonder op de joden",
  "De Duitse bezetting van Nederland",],
  "Tijd van televisie en computers (van 1950 tot heden)": [
  "De dekolonisatie die een einde maakte aan de Westerse hegemonie in de wereld",
  "De verdeling van de wereld in twee ideologische blokken in de greep van een wapenwedloop en de daaruit voortvloeiende dreiging van een atoomoorlog",
  "De toenemende westerse welvaart vanaf de jaren 60 in de 20e eeuw die aanleiding gaf tot ingrijpende sociaal-culturele veranderingsprocessen",
  "De eenwording van Europa",
  "De ontwikkeling van pluriforme en multiculturele samenlevingen"]
}

function App() {
  const [complArr, setComplArr] = useState([]);
  const [incomplArr, setIncomplArr] = useState([...KA_Array]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const sentence = formData.get('ka');

    let key = null;

    for (let k in KA_Array) {
      if (KA_Array[k].indexOf(sentence) !== -1) {
        setComplArr([...complArr, sentence]);
        break;
      }    
    }
    if (complArr.includes(sentence)) {
      
      setIncomplArr(incomplArr.filter((s) => s !== sentence));
    }
  };

  const handleReset = () => {
    setComplArr([]);
    setIncomplArr([...KA_Array]);
  };

  return (
    <div className="page">
      <ul>
        {complArr.map((ka, i) => (
          <li key={i}>{ka}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label htmlFor="ka">Kenmerkend aspect:</label><br />
        <input type="text" id="ka" name="ka" autoComplete='off'/>
        <input type="submit" />
      </form>
      <div className='button'>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;

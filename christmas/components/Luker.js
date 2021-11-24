
import Luke from "./Luke";

export const getRandomString = () => {
  const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const randomNumb = '0123456789';
  let result = '';
  for ( let i = 0; i < 4; i++ ) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  for ( let i = 0; i < 4; i++ ) {
    result += randomNumb.charAt(Math.floor(Math.random() * randomNumb.length));
}
  return result
}


export const luker = [
  {
    id: "hatch-1",
    nr: 1,
    text: "3",
    open: false
  },
  {
    id: "hatch-2",
    nr: 2,
    text: "",
    open: false
  },
  {
    id: "hatch-3",
    nr: 3,
    text: "",
    open: false
  },
  {
    id: "hatch-4",
    nr: 4,
    text: "",
    open: false
  },
  {
    id: "hatch-5",
    nr: 5,
    text: "",
    open: false
  },
  {
    id: "hatch-6",
    nr: 6,
    text: "",
    open: false
  },
  {
    id: "hatch-7",
    nr: 7,
    text: "",
    open: false
  },
  {
    id: "hatch-8",
    nr: 8,
    text: "",
    open: false
  },
  {
    id: "hatch-9",
    nr: 9,
    text: "",
    open: false
  },
  {
    id: "hatch-10",
    nr: 10,
    text: "",
    open: false
  },
  {
    id: "hatch-11",
    nr: 11,
    text: "",
    open: false
  },
  {
    id: "hatch-12",
    nr: 12,
    text: "",
    open: false
  },
  {
    id: "hatch-13",
    nr: 13,
    text: "",
    open: false
  },
  {
    id: "hatch-14",
    nr: 14,
    text: "",
    open: false
  },
  {
    id: "hatch-15",
    nr: 15,
    text: "",
    open: false
  },
  {
    id: "hatch-16",
    nr: 16,
    text: "",
    open: false
  },
  {
    id: "hatch-17",
    nr: 17,
    text: "",
    open: false
  },
  {
    id: "hatch-18",
    nr: 18,
    text: "",
    open: false
  },
  {
    id: "hatch-19",
    nr: 19,
    text: "",
    open: false
  },
  {
    id: "hatch-20",
    nr: 20,
    text: "",
    open: false
  },
  {
    id: "hatch-21",
    nr: 21,
    text: "",
    open: false
  },
  {
    id: "hatch-22",
    nr: 22,
    text: "",
    open: false
  },
  {
    id: "hatch-23",
    nr: 23,
    text: "",
    open: false
  },
  {
    id: "hatch-24",
    nr: 24,
    text: "",
    open: false
  },
];

const generateCode = () =>{
  for (let i = 0; i < luker.length; i++)
  luker[i].text = getRandomString();
}

generateCode()


const Luker = () =>{ 
  
  return (
    <div className="luke-grid">
    {luker.map(luke =>
      <Luke
      key={luke.nr} 
      number={luke.nr}
      lukeData = {luke}
      />)}
      </div>
    )
}


export default Luker;
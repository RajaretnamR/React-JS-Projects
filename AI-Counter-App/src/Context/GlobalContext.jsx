// // src/context/CounterContext.js
// import { createContext, useState, useEffect } from "react";
// import { fetchTextFromAi } from "../lib/ai";

// export const CounterContext = createContext();

// export const CounterProvider = ({ children }) => {
//   const [count, setCount] = useState(0);
//   const [aiMsg, setAiMsg] = useState("Loading inspiration...");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const getAiMsg = async () => {
//       setLoading(true);
//       const msg = await fetchTextFromAi(count);
//       setAiMsg(msg || "AI didn't respond 😢");
//       setLoading(false);
//     };
//     getAiMsg();
//   }, [count]);

//   return (
//     <CounterContext.Provider value={{ count, setCount, aiMsg, loading }}>
//       {children}
//     </CounterContext.Provider>
//   );
// };

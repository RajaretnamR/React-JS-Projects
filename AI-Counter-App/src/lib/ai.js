export const milestones = [5, 10, 25, 50, 75, 100, 250, 500, 1000];

export async function fetchTextFromAi(count) {

      const API_KEY = "";

      if(!API_KEY) {
        return "Missing API Key da... ??"
      }

      //System Prompt :
      const systemPrompt = " Think like you are an encouraging person ..."

      // User Prompt :
      const userPrompt = `The current count value : ${count}...`

      //Request Body :
      const body = {
        model :"google/gemini-2.0-flash-001",
        messages : [
          { role : "system", content:systemPrompt},
          { role : "user", content:userPrompt}
        ]

      }


      // API Call :

      try{
            const res= await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
          });

          //Error handling :
          if(!res.ok){
            return "Ai Request is Failed da ....🥲"
          }
          //Response Read :
          const data = await res.json();
          const text = data?.choices?.[0]?.message?.content?.trim();
          return text;
      }

      catch(err){
        console.log(`ERROR OCCURED:${err}`)
      }
  }
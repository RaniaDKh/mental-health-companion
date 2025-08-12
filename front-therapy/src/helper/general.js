export async function getQuestions(){
    const url="http://localhost:7000/api/v1/questions";
    try{
        let data=[]
        const answers =await fetch(url);
        if(!answers.ok){
            throw new Error(`Response status : ${answers.status}`);
            
        }
        const json = await answers.json();
      for (const answer of json) {
    const options = await getResponseById(answer.id);
    data.push({ question: answer.data, options });
  }

  return data;
    


    } catch (error ){
        console.error(error.message);
        return[];
    }
}

export async function getResponseById(id){
    const urls=`http://localhost:7000/api/v1/reponse/${id}`;
    try{
        const answers =await fetch(urls);
        if(!answers.ok){
throw new Error(`Response status : ${answers.status}`);
            
        }
const json = await answers.json();
return extractData(json);
    } catch (error ){
        console.error(error.message);
    }
}

export async function addAllMoods(data){
    console.log("let", data);
    const urls=`http://localhost:7000/api/v1/history`;
    try{
      
        const answers = await fetch(urls, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});
        if(!answers.ok){
throw new Error(`Response status : ${answers.status}`);
            
        }
const json = await answers.json();

return extractData(json);
    } catch (error ){
        console.error(error.message);
    }
}


function extractData(result) {
  return result.map(item => ({
    text: item.data,
    score: item.score,
    id: item.id, 
  }));
}


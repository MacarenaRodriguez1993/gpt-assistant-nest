import OpenAI from "openai";

interface Options{
    threadId:string;
    assistantId?:string
}

export const createRunUseCase=async(openai:OpenAI,options:Options)=>{
    const {threadId,assistantId=process.env.ASSISTANT_ID}=options ;
    console.log(assistantId)
    const run =await openai.beta.threads.runs.create(threadId,{
        assistant_id:assistantId,
        // instrucciones - obreescribe al asistente
    })
    return run
}
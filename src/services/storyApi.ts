export async function analyzeStory({file,text}:{file?:File,text?:string}){

  const form=new FormData()
  if(file) form.append('file',file)
  if(text) form.append('text',text)

  const res=await fetch('https://myfolio-ckz8.onrender.com/analyze-all',{
    method:'POST',
    body:form
  })

  return res.json()
}

const db = require('./bd');
const createProffy = require('./createProffy');

db.then(async(db)=>{
    //inserir dados
    proffyValue = {
        name:   "Gustavo Dias Rocha" , 
        avatar: "https://avatars1.githubusercontent.com/u/62334910?s=460&u=8e3cdaab81e1e2b920fa6a1bb600a3d6fc83077c&v=4",
        whatsapp:"(61) 998836780",
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    }
    classValue ={
        subject:"Javascript",
        cost:"50",
        //proffyid vira pelo DB
    }
    classScheduleValues = {
        weekday:[0],
        time_from:[720],
        time_to:[1220],
    },
    {
        weekday:[1],
        time_from:[520],
        time_to:[1320],
    }
await createProffy(db,{proffyValue,classValue,classScheduleValues})
    //consultar dados

})
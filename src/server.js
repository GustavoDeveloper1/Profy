/*Dados */

const proffys = [{
    name:   "Gustavo Dias Rocha" , 
    avatar: "https://avatars1.githubusercontent.com/u/62334910?s=460&u=8e3cdaab81e1e2b920fa6a1bb600a3d6fc83077c&v=4",
    bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject:"Javascript",
    cost:"50",
    weekday:[0],
    whatsapp:"(61) 998836780",
    time_from:[720],
    time_to:[1220],
}]
const subjects = [
   "Artes",
   "Biologia",
   "Ciência",
   "Educação Fisica",
   "Física",
   "Geografia",
   "História",
   "Matemática",
   "Português",
   "Química",
   "Espanhol",
   "Inglês",
]
const weekdays = [
   "Domingo",
   "Segunda-feira",
   "Terça-feira",
   "Quarta-feira",
   "Quinta-feira",
   "Sexta-feira",
   "Sabado",

]

/*funcionalidades*/
function getSubject(subjectNumber){
   const position = +subjectNumber - 1;
   return subjects[position]
}
//pagina para pegar e rodar a pagina principal
function pageLanding(req,res){
   return res.render("index.html")
}
//Pegar a pagina study 
function pageStudy(req,res){
   const filters = req.query
   return res.render("study.html", {proffys, filters,subjects,weekdays})
}

//mostrar a pagina classes 
function giveClasses(req,res){
   const dados = req.query

   const isnotEmpity = Object.keys(dados).length != 0
   if(isnotEmpity){
      dados.subject = getSubject(dados.subject)

      // console.log("não entrou ze!");
      proffys.push(dados);

      return res.redirect("/study")
   }else{
      return res.render("give-classes.html",{dados,subjects,weekdays})
   }
   //adicionar dados na lista proffys


 
}
//requisições servidor
const express = require('express');
const app = express();


//configurar  nunjucks
const nunjucks = require('nunjucks');
nunjucks.configure("src/views",{
   express: app,
   noCache: true,

})

//configurar aruivos estaticos
app.use(express.static("public"))


//rotas
app.get('/',pageLanding)

app.get('/study',pageStudy)

app.get('/give-classes', giveClasses)
//porta
app.listen(5500);


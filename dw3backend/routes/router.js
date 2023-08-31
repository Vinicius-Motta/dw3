const express = require("express");
const routerApp = express.Router();

const appAlunos = require("../apps/alunos/controller/ctlAlunos");
const appCursos = require("../apps/cursos/controller/ctlCursos");
const appLogin = require("../apps/login/controller/ctlLogin");

// middleware that is specific to this router
routerApp.use((req, res, next) => {
  next();
});

routerApp.get("/", (req, res) => {
  res.send("Olá mundo!");
});

//Rotas de Alunos
routerApp.get("/getAllAlunos", appAlunos.getAllAlunos);
routerApp.post("/getAlunoByID", appLogin.AutenticaJWT, appAlunos.getAlunoByID);
routerApp.post("/insertAlunos", appLogin.AutenticaJWT, appAlunos.insertAlunos);
routerApp.post("/updateAlunos", appAlunos.updateAlunos);
routerApp.post("/DeleteAlunos", appAlunos.DeleteAlunos);

//Rotas de Cursos
routerApp.get("/GetAllCursos", appCursos.GetAllCursos);
routerApp.post("/GetCursoByID", appCursos.GetCursoByID);
routerApp.post("/InsertCursos", appCursos.InsertCursos);
routerApp.post("/UpdateCursos", appCursos.UpdateCursos);
routerApp.post("/DeleteCursos", appCursos.DeleteCursos);

//Rotas de Clientes
routerApp.get("/GetAllClientes", appClientes.GetAllClientes);
routerApp.post("/GetClienteByID", appClientes.GetClienteByID);
routerApp.post("/InsertClientes", appClientes.InsertClientes);
routerApp.post("/UpdateClientes", appClientes.UpdateClientes);
routerApp.post("/DeleteClientes", appClientes.DeleteClientes);

//Rotas de Produtos
routerApp.get("/GetAllProdutos", appProdutos.GetAllProdutos);
routerApp.post("/GetProdutoByID", appProdutos.GetProdutoByID);
routerApp.post("/InsertProdutos", appProdutos.InsertProdutos);
routerApp.post("/UpdateProdutos", appProdutos.UpdateProdutos);
routerApp.post("/DeleteProdutos", appProdutos.DeleteProdutos);

// Rota Login
routerApp.post("/Login", appLogin.Login);
routerApp.post("/Logout", appLogin.Logout);

module.exports = routerApp;

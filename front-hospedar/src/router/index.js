import {
  createWebHistory,
  // createWebHashHistory,
  createRouter,
} from "vue-router";
 
import Welcome from "../views/Welcome/";
import ClientCadastro from "../views/ClientCadastro/";
import BusinessCadastro from "../views/BusinessCadastro/";
import ClientLogin from "../views/ClientLogin/";
import BusinessLogin from "../views/BusinessLogin/";
import CadastroEntidade from "../views/CadastroEntidade/";
import ListEntidade from "../views/ListEntidade/";
import DetailsEntidade from "../views/DetailsEntidade/";
import EditEntidade from "../views/EditEntidade/"





import NotFound from "../views/NotFound";
 
const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/client-cadastro",
    name: "ClientCadastro",
    component: ClientCadastro,
  },
  {
    path: "/business-cadastro",
    name: "BusinessCadastro",
    component: BusinessCadastro,
  },
  {
    path: "/client-login",
    name: "ClientLogin",
    component: ClientLogin,
  },
  {
    path: "/business-login",
    name: "BusinessLogin",
    component: BusinessLogin,
  },
  
  {
    path: "/edit/:id",
    name: "EditEntidade",
    component: EditEntidade,
  },
  {
    path: "/entidade-cadastro",
    name: "CadastroEntidade",
    component: CadastroEntidade,
  },
  {
    path: "/entidade-list",
    name: "ListEntidade",
    component: ListEntidade,
  },
  {
    path: "/entidade/:id",
    name: "DetailsEntidade",
    component: DetailsEntidade,
  },
  { path: "/:catchAll(.*)", component: NotFound }
];
 
const router = createRouter({
  history: createWebHistory(),
  routes,
});
 
export default router;
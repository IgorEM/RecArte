
import SoftBox from "components/SoftBox";


import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";




import pinus6 from "../../imagens/pinus6.jpg";

import Descricao from "../../examples/Cards/StatisticsCards/Descricao/Descricao";



function Itens() {
  

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
          <Descricao 
              imagem={pinus6} 
              titulo="Madereireira Y"
              endereco="Endereço" 
              tipo="Pinus " 
              distancia=" 10 KM" 
              comprimento="4x3x2"/>
              
      </SoftBox>
      
    </DashboardLayout>
  );
}

export default Itens;

import React  from 'react';
import './Formulario1.scss' ;



export default class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Item Registrado com sucesso' );
      event.preventDefault();
    }
  
    render() {



        return (
<div>
<form action="#" method="post" onSubmit={this.handleSubmit}>
    <fieldset>
        <fieldset class="grupo">
            <div class="campo">
                <label for="tamanho" >Tamanho</label>
                <input type="text" id="tamanho" name="tamanho"   placeholder="4x3x2"/>
            </div> 
            <div class="campo">
                <label for="qtsaco">Quantidade de Sacos</label>
                <select name="qtsaco" id="qtsaco">
                    <option value="">--</option>
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="30">30</option>
                </select>
            </div>
            
            <div class="campo">
                <label for="kg">Kg</label>
                <select name="kg" id="kg">
                    <option value="">--</option>
                    <option value="sacos de 3kg">sacos de 3kg</option>
                    <option value="sacos de 5kg">sacos de 5kg</option>
                    <option value="sacos de 10kg">sacos de 10kg</option>
                    <option value="sacos de 30kg">sacos de 30kg</option>
                </select>
            </div>
        </fieldset>
        <div class="campo">
                <label for="observacao" >Observação</label>
                <input type="text" id="observacao" name="observacao"   placeholder="Falar com José"/>
            </div> 
        <fieldset class="grupo">
            
            <div class="campo">
                <label for="estado">Tipo de Madeira</label>
                <select name="estado" id="estado">
                    <option value="">--</option>
                    <option value="PR">Pinus</option>
                </select>
            </div>
        </fieldset>
        <h4>Disponibilidade:</h4>

        <div class="campo">
                <label for="domingo">Domingo</label>
                <select name="domingo" id="domingo">
                    <option value="">--</option>
                    <option value="08h - 12h">08h - 12h</option>
                    <option value="09h - 12h">09h - 12h</option>
                    <option value="12h - 18h">12h - 18h</option>
                    <option value="13h - 18h">13h - 18h</option>
                    <option value="13h - 20h">13h - 20h</option>
                </select>
        </div>
        <div class="campo">
                <label for="segunda">Segunda-feira</label>
                <select name="segunda" id="segunda">
                    <option value="">--</option>
                    <option value="08h - 12h">08h - 12h</option>
                    <option value="09h - 12h">09h - 12h</option>
                    <option value="12h - 18h">12h - 18h</option>
                    <option value="13h - 18h">13h - 18h</option>
                    <option value="13h - 20h">13h - 20h</option>
                </select>
        </div>
        <div class="campo">
                <label for="terca">Terça-feira</label>
                <select name="terca" id="terca">
                    <option value="">--</option>
                    <option value="08h - 12h">08h - 12h</option>
                    <option value="09h - 12h">09h - 12h</option>
                    <option value="12h - 18h">12h - 18h</option>
                    <option value="13h - 18h">13h - 18h</option>
                    <option value="13h - 20h">13h - 20h</option>
                </select>
        </div>
        <div class="campo">
                <label for="quarta">Quarta-feira</label>
                <select name="quarta" id="quarta">
                    <option value="">--</option>
                    <option value="08h - 12h">08h - 12h</option>
                    <option value="09h - 12h">09h - 12h</option>
                    <option value="12h - 18h">12h - 18h</option>
                    <option value="13h - 18h">13h - 18h</option>
                    <option value="13h - 20h">13h - 20h</option>
                </select>
        </div>
        <div class="campo">
                <label for="quinta">Quinta-feira</label>
                <select name="quinta" id="quinta">
                    <option value="">--</option>
                    <option value="08h - 12h">08h - 12h</option>
                    <option value="09h - 12h">09h - 12h</option>
                    <option value="12h - 18h">12h - 18h</option>
                    <option value="13h - 18h">13h - 18h</option>
                    <option value="13h - 20h">13h - 20h</option>
                </select>
        </div>
        <div class="campo">
                <label for="sexta">Sexta-feira</label>
                <select name="sexta" id="sexta">
                    <option value="">--</option>
                    <option value="08h - 12h">08h - 12h</option>
                    <option value="09h - 12h">09h - 12h</option>
                    <option value="12h - 18h">12h - 18h</option>
                    <option value="13h - 18h">13h - 18h</option>
                    <option value="13h - 20h">13h - 20h</option>
                </select>
        </div>
        <div class="campo">
                <label for="sabado">Sábado</label>
                <select name="sabado" id="sabado">
                    <option value="">--</option>
                    <option value="08h - 12h">08h - 12h</option>
                    <option value="09h - 12h">09h - 12h</option>
                    <option value="12h - 18h">12h - 18h</option>
                    <option value="13h - 18h">13h - 18h</option>
                    <option value="13h - 20h">13h - 20h</option>
                </select>
        </div>

        <button type="submit" name="submit">Enviar</button>
    </fieldset>
</form>
</div>
        );

}
}
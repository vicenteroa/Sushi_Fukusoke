import React from "react";
import './MetodPage.css'
import Header from "../../components/header";

function MetodPage() {
    return (
        <div className="metod-container">

      <body className="body-pay">
        <Header
        text1={"Exit"}
        />

        <main>
          <section id="carrito">
            <h2>Carrito de Compras</h2>
            <ul id="lista-carrito">
              <li>Crunchy Roll - $7,999</li>
              <li>EBI Roll - $5,990</li>
              <li>Seitán Furay - $6,990</li>
              <li>Karifu Furay Roll - $6,990</li>
            </ul>
            <p>Total: <span id="total-carrito">$27,969</span></p>
          </section>
          <section id="metodo-pago">
            <h2>Método de Pago</h2>
            <label htmlFor="debito">
              <input type="radio" id="debito" name="pago" value="debito" /> Débito
            </label>
            <label htmlFor="credito">
              <input type="radio" id="credito" name="pago" value="credito" /> Crédito
            </label>
            <label htmlFor="transferencia">
              <input type="radio" id="transferencia" name="pago" value="transferencia" /> Transferencia
            </label>
            <label htmlFor="efectivo">
              <input type="radio" id="efectivo" name="pago" value="efectivo" /> Efectivo
            </label>
          </section>
          <section id="entrega">
            <h2>Entrega a Domicilio</h2>
            <label htmlFor="delivery">
              <input type="checkbox" id="delivery" name="entrega" value="delivery" />
              Quiero entrega a domicilio
            </label>
            {/* Contenido adicional si hay entrega a domicilio */}
          </section>
  
          <button id="comprar" onClick={() => window.location.href = 'index2.html'}>Comprar</button>
          <button id="Volver" onClick={() => window.location.href = 'index.html'}>Volver Atras</button>
        </main>
        <footer className="final_page">
          <p>© Sushi Fukusuke 2023</p>
        </footer>
        </body>

      </div>

      );
    }
export default MetodPage;
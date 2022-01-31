import React from "react";
import Footer from "components/Footer/footer";
import Navbar from "components/Navbar/navbar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">vsVendas</h1>
          <p className="lead">
            Analise o desempenho das suas vendas por diferentes perspectivas
          </p>
          <hr />
          <p>
            Esta aplicação consiste em exibir um dashboard a partir de dados
            fornecidos por um back end construído com Spring Boot.
          </p>
          <Link className="btn btn-primary btn-lg" to="/dashboard">Acessar o dashboard</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

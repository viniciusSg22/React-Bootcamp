import BarChart from "components/BarChart/barChart";
import DonutChart from "components/DonutChart/donutChart";
import Footer from "components/Footer/footer";
import Navbar from "components/Navbar/navbar";
import Table from "components/Table/table";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="py-3">Dashboarde de vendas!</h1>
        <div className="row px-3">
          <div className="col-sm-6 text-center">
            <h5>Porcentagem de sucesso (%)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6 text-center">
            <h5>Todas vendas</h5>
            <DonutChart />
          </div>
        </div>
        <div className="py-3">
          <h2>Todas as vendas</h2>
        </div>
        <Table />
      </div>
      <Footer />
    </>
  );
}
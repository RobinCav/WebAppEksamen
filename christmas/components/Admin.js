import AdminCard from "./AdminCard";


const Admin = () => {

  const products = [
  {id:1, title: "Luke 1", Dato: "Tilgjengelig fra: 05.12.12", },
  {id:2,title: "Luke 2", Dato:"Tilgjengelig fra: 05.12.12",  }
  ]


  return (
    <div className="background">
   <h2 className="header_admin"> Admin </h2>
   <section className="adminCard">
    {products.map((products) => (
      <AdminCard 
      Key={products.Key}
      title={products.title}
      Dato={products.Dato}
      />
    ))}
  </section>
  </div>
  );

};

export default Admin;
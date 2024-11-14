import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useState } from "react";
import { useEffect } from "react";

const DatatableScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  //TO DO, centrer le datatable et ajouter un srtyle professionnel avec tailwind

  // placer le datatable dans un container, une card, avec une hauteur fixe et un padding
  return (
    <div
      className="
    container
    mx-auto
    flex
    justify-center
    items-center
    h-screen
    gap-4
    
    "
    >
      <div
        className="datatable 
    w-full 
    "
      >
        <DataTable
          value={data}
          loading={loading}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
        >
          <Column field="id" header="Id"></Column>
          <Column field="title" header="Title"></Column>
          <Column field="body" header="Body"></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default DatatableScreen;

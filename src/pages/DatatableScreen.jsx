import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useState } from "react";
import { useEffect } from "react";
import CustomSnackBar from "../components/CustomSnackBar";
import { useContext } from "react";
import { SnackBarContext } from "../contexts/SnackBarContextProvider";
import { Button } from "primereact/button";

const DatatableScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { showSnack } = useContext(SnackBarContext);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <div
      className="
    container
    mx-auto
    flex
    justify-center
    items-center
    gap-4
    "
    >
      <div
        className="datatable 
    w-full 
    "
      >
        <Button
          onClick={() => {
            showSnack();
          }}
        >
          ok
        </Button>
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

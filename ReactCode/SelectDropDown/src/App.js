import "./styles.css";
import React, { useState } from "react";
import DropdownSelect from "./components/DropdownSelect";
// import CardDisplay from "./components/CardDisplay";
import useApiData from "./hooks/useApiData";
import ErrorBoundary from "./components/ErrorBoundary";
const CardDisplay = React.lazy(() => import("./components/CardDisplay"));

const App = () => {
  // eslint-disable-next-line no-undef
  const { data, error, loading } = useApiData(process.env.REACT_APP_API_URL);
  const [selectedId, setSelectedId] = useState(null);
  // console.log(process.env.REACT_APP_API_URL);

  const handleChange = (e) => {
    setSelectedId(e.target.value);
  };

  const selectedItem = data?.find((item) => item.id === parseInt(selectedId));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data!</p>;

  return (
    <ErrorBoundary>
      <div className="container">
        <DropdownSelect options={data || []} onChange={handleChange} />
        <CardDisplay item={selectedItem || []} />
      </div>
    </ErrorBoundary>
  );
};

export default App;

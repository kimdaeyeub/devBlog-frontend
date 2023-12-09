import { useParams } from "react-router-dom";

const Detail = () => {
  const param = useParams();
  console.log(param);
  return <div className="min-h-screen"></div>;
};

export default Detail;

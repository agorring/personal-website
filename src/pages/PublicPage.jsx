import { Link } from "react-router-dom";

export const PublicPage = () => {
  return (
    <div>
      <h3>Public Page</h3>
      <Link to="/protected" className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Protected</h1>
      </Link>
    </div>
  );
};

import { useEffect, useState } from "react";

interface DataItem {
  id: number;
  poster: string;
  synopsis: string;
  title: string;
}

const Programs: React.FC = () => {
  const [data, setData] = useState<DataItem[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3310/api/programs");
        if (!response.ok) {
          throw new Error(`Erreur: ${response.status}`);
        }
        const result: DataItem[] = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div>programs</div>
      <ul>
        {data?.map((item) => (
          <li key={item.id}>
            {" "}
            <br />
            {item.title}: {item.synopsis}
            <img src={item.poster} alt={item.title} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Programs;

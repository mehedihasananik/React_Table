import MyTable from "../Component/MyTable";



export default function Home() {
  const data = [
    { id: 1, name: 'John', subject: 'Math', marks: "88", avrg: "80%" },
    { id: 2, name: 'Alice', subject: 'Science', marks: "95", avrg: "90%" },
    { id: 3, name: 'Bob', subject: 'Economics ', marks: "85", avrg: "90%" },
    { id: 4, name: 'Cob', subject: 'History', marks: "87", avrg: "80%" },
    // Add more data items here
  ];
  return (
    <div>
      <MyTable data={data} />
    </div>
  )
}

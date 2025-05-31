// import Card from "../component/card";
import small from "/src/assets/img/smal.jpg";
import fullHD from "/src/assets/img/fulhd.jpg";
import largest from "/src/assets/img/largeeees.jpg";
import tester from "/src/assets/img/testernotaspect.jpg";
// import Card from "../component/card";
function WorkPages() {
  const CardData = [
    {
      id: 1,
      title: "Make web for company a",
      imageUrl: small,
      desc: "by using react and node js,after 10 days i finally done building this website",
    },
    {
      id: 2,
      title: "Make web for company n",
      imageUrl: fullHD,
      desc: "by using react and node js,after 10 days i finally done building this website",
    },
    {
      id: 3,
      title: "Make web for company i",
      imageUrl: largest,
      desc: "by using react and node js,after 10 days i finally done building this website",
    },
    {
      id: 4,
      title: "Make web for company u",
      imageUrl: tester,
      desc: "by using react and node js,after 10 days i finally done building this website",
    },
  ];
  return (
    <div className="grid h-fit grid-cols-1 gap-1 border-2 border-amber-400 px-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
      {CardData.map((data) => (
        <div key={data.id}>
          <div className="flex flex-col p-2">
            <img
              className="aspect-16/9 object-cover"
              src={data.imageUrl}
              alt={"error image"}
            />
            <h1 className="text-center font-[16px]">{data.title}</h1>
            <p className="font-[12px]">{data.desc}</p>
            <CustomButton />
          </div>
        </div>
      ))}
    </div>
  );
}

function CustomButton() {
  return (
    <button className="w-full rounded-b-xl bg-blue-500 p-2 hover:bg-blue-900">
      See more
    </button>
  );
}
export default WorkPages;

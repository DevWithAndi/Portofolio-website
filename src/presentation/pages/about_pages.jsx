import react from "/src/assets/react.svg";
import flutter from "/src/assets/flutter.svg";

function AboutPages() {
  const logo = [
    {
      name: "src/assets/react.svg",
      src: react,
    },
    {
      name: "src/assets/flutter.svg",
      src: flutter,
    },
  ];
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-1 flex-col justify-center p-3 text-center text-[20px] leading-relaxed">
        <h1 className="text-[32px] font-bold">Hi ! I’m Andi</h1>
        <p className="">
          <span className="font-semibold text-blue-400">A Front end</span> and{" "}
          {""}
          <span className="font-semibold text-blue-400">
            Mobile Developer
          </span>{" "}
          focused on building modern, scalable apps for web and mobile.
        </p>
        {""}
        <p className="">
          I'm early in my journey but already hands-on with {""}
          <span className="font-semibold text-cyan-400">Flutter</span>,{" "}
          <span className="font-semibold text-orange-400">Firebase</span>,{" "}
          <span className="font-semibold text-green-400">Node.js</span>, and{" "}
          <span className="font-semibold text-blue-400">React</span>
        </p>
        <p className="">
          I love creating real-world projects, writing clean code, and
          constantly leveling up as I learn and build
        </p>

        <div className="mt-4 flex justify-center">
          <span className="mr-2 flex items-center text-[20px]">
            My Current Tech Stack :
          </span>
          <div className="m-1 flex justify-center">
            {logo.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.name}
                className="h-12 w-12"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPages;

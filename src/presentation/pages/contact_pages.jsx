import Github from "/src/assets/github.svg";
import gmail from "/src/assets/gmail.svg";
import Linkedin from "/src/assets/linkedin.svg";
function ContactPages() {
  const logo = [
    {
      id: 1,
      img: Github,
      url: "",
    },
    {
      id: 2,
      img: gmail,
      url: "",
    },
    {
      id: 3,
      img: Linkedin,
      url: "",
    },
  ];
  return (
    <div className="flex flex-1 flex-col border-4 border-amber-300">
      <h1 className="flex flex-1 flex-col items-center justify-center text-center">
        Although I am new to this field
        <p className="mt-2">
          I am eager to gain experience and open to opportunities to collaborate
          on real-world projects.
        </p>
        <p className="mt-2">If you are interested in working together,</p>
        please feel free to reach out via email or through the contact
        information provided below.
      </h1>
      <div className="flex items-center justify-center gap-3">
        {logo.map((logo) => (
          <div key={logo.id}>
            <img src={logo.img} className="flex h-13 w-13" alt="error" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactPages;

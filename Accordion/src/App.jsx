import { useState } from "react";

const App = () => {
  const item = [
    {
      id: 1,
      title: "Do I have to allow the use of cookies?",
      info: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
    },
    {
      id: 2,
      title: "How do I change my My Page password?",
      info: "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
    },
    {
      id: 3,
      title: "What is BankID?",
      info: "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
    },
    {
      id: 4,
      title: "Whose birth number can I use?",
      info: "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.",
    },
    {
      id: 5,
      title: "When do I recieve a password ordered by letter?",
      info: "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ",
    },
  ];

  const [open, setOpen] = useState([]);
  const [multiple, setMultiple] = useState(false);

  const toggleEvent = (id) => {
    if (multiple) {
      setOpen((prev) =>
        prev.includes(id) ? prev.filter((id) => id !== id) : [...prev, id]
      );
    } else {
      setOpen(open === id ? [] : [id]);
    }
  };

  const handleChecked = () => {
    setMultiple(!multiple);
    setOpen([]);
  };
  return (
    <div>
      <h1 className="text-center shadow-lg p-5  text-lg">Accordion</h1>
      <div className="flex flex-col items-center justify-center gap-5 mt-5">
        <div>
          <label>Is multiple open accordion allowed?</label>
          <input type="checkbox" checked={multiple} onChange={handleChecked} />
        </div>
        <div className="flex flex-col gap-4">
          {item.map((element) => (
            <li className="list-none border ">
              <div className="flex justify-between px-2 py-5">
                <p className="mr-10">{element.title}</p>
                <button
                  className="px-2 rounded-full bg-gray-200"
                  onClick={() => toggleEvent(element.id)}
                >
                  {open.includes(element.id) ? "-" : "+"}
                </button>
              </div>
              {open.includes(element.id) && <p>{element.info}</p>}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

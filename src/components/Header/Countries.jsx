import { flags } from "./data";

function Countries() {
  return (
    <ul className="flex items-center justify-center gap-5 max-sm:px-2">
      {flags.map((flag, index) => (
        <li className="cursor-pointer" key={index}>
          <img
            className="w-6 h-6 object-contain"
            src={flag.src}
            alt={flag.alt}
          />
        </li>
      ))}
    </ul>
  );
}

export default Countries;

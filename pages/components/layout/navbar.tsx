import ViewGridIcon from "@heroicons/react/outline/ViewGridIcon";

function Navbar() {
  const options = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "React",
      value: "react",
    },
    {
      label: "Vue",
      value: "vue",
    },
    {
      label: "Angular",
      value: "angular",
    },
    {
      label: "Next",
      value: "next",
    },
  ];

  return (
    <div className="flex bg-black justify-between">
      <div className="bg-zinc-300 p-2">
        Home
      </div>

      <div className="my-1 mx-2 space-x-2 text-white">
        {
          options.map((option) => (
            <button className="bg-neutral-800 border-2 border-neutral-700 hover:bg-neutral-700 px-3 py-0.5 rounded-2xl">
              {option.label}
            </button>
          ))
        }
      </div>

      <div className="bg-zinc-300 px-2 flex items-center justify-end space-x-2">
        <button className="hover:bg-neutral-400 rounded-2xl p-1.5">
          <ViewListIcon />
        </button>
        <button className="hover:bg-neutral-400 rounded-2xl p-1.5">
          <ViewGridIcon className="w-6 h-6" />
        </button>
      </div>

    </div>
  )
}

const ViewListIcon = () => (
  <svg width="24" height="24" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <rect width="50" height="50" fill="url(#pattern0)" />
    <defs>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_227_2" transform="scale(0.0111111)" />
      </pattern>
      <image id="image0_227_2" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAACOUlEQVR4nO3ay27TQBSA4Z8IVSoKL8KCdgXhWXihsIMCouvyaL2wa1lwCZvCwq5QI3l8mxmP4/+TZhXnxHNij+3jA5IkSZIkSZIkSYrnCHgH3AB/I41rYFvHVm1LvATvj23GeRQv5pG8P75lnEfxUiX5YXTxDPgMfM+wP2PGHfAJOO44r0dKSPR5hv2IOc6bJvIkMMmuyRgq9NsAK+AHA4+SifwCngP3+x+sRgTdAR+A18C6HhvgDPgzIu7ihE6RS+Bl4Lsn9TZLWzq+dJzXI03BfhNO8oMTqqN+TKKPgY9UF5upkxgat1RnctSL4fseMc4CcVRrStCrHjE2gTiqNSVo3SPGOhBnUcbcdZQQfzaGJOJFom0P2pBEv0207WI1ra07qlu3NqdUDy5j1uipah2jahd9hXbkknCyT4GrlhhdTP3A0li7iKltJ3ZU98kb/j+Cv6F6wAgdyV0TvaKqHUyZ6J9EuqBbVAprLBL1VfLt1z1wMfE+XBAhyW1Sn5ZdTFXrGFW76Os64USuckygJKGl42vC300Ze3aOqN5WxzyybTeQJEmSpDmxET0TG9EzsRE9k9Q13y5sRI8wupj65WzfYSN6Jo3vGJ8OCNaWoH2p/7BZ8OVsXINe5o5ZW2PFOZhG9CFrdKylo2+cWSt56TgoJjoTE52Jic7ERGdSeqIX3YieM87UtY5ojegl30eXUOuI1h89pNZh7WKAktfoEmodNqInHjaiz5WN6AWwEV2SJEmSJEmSFMs/lssoRp9RsEsAAAAASUVORK5CYII=" />
    </defs>
  </svg>
)

export default Navbar
